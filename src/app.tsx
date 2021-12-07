import { EncodeObject, Registry } from '@cosmjs/proto-signing'
import { defaultRegistryTypes, SigningStargateClient } from '@cosmjs/stargate'
import { getKeplrFromWindow } from '@keplr-wallet/stores'
import WarningIcon from '@mui/icons-material/Warning'
import { IconButton, Link, Tooltip } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { sha256 } from 'js-sha256'
import { Image } from 'mui-image'
import { createContext, h } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import AllocatorsComboBox from './Components/Allocator/AllocatorsComboBox'
import AllocatorSet from './Components/Allocator/AllocatorSet'
import SubmitRow from './Components/Allocator/SubmitRow'
import ConnectButton from './Components/ButtonComponents/ConnectButton'
import { FlexRow } from './Components/Minis'
import { addPendingTx, completePendingTx } from './Data/data'
import { Address } from './Model/Address'
import { initialRecipients, Recipient, RecipientWeighted } from './Model/Allocations'
import { TxRaw } from './Model/generated/cosmos/tx/v1beta1/tx'
import { MsgCreateAllocator } from './Model/generated/regen/divvy/v1/tx'
import { Allocator } from './Model/generated/regen/divvy/v1/types'
import { addRegenLocalChain, getAllAllocators } from './Utils/cosmos-utils'
import { useDarkMode } from './Utils/react-utils'
const myRegistry = new Registry([
  ...defaultRegistryTypes,
  ['/regen.divvy.v1.MsgCreateAllocator', MsgCreateAllocator], // Replace with your own type URL and Msg class
  // ['/regen.ecocredit.v1alpha2.tx.MsgCreateAllocator', MsgCreateAllocator], // Replace with your own type URL and Msg class
])

const runningTally = new Map(initialRecipients.map((r) => [r.recipient.address, new RecipientWeighted(r)]))

export const CosmosContext = createContext<{
  sgClient: null | SigningStargateClient
  clientAddress: string
}>({
  sgClient: null,
  clientAddress: '',
})
export const AllocatorContext = createContext<{
  recipientList: Recipient[]
  allocatorOptions: Allocator[]
}>({
  recipientList: [],
  allocatorOptions: [],
})

export const App = () => {
  const theme = useDarkMode()

  const [tally, setTally] = useState(runningTally)
  const [clientAddress, setClientAddress] = useState('')
  const [sgClient, setSgClient] = useState<null | SigningStargateClient>(null)

  const [allocatorOptions, setAllocatorOptions] = useState<Allocator[]>([])

  const [recipientList, setRecipientList] = useState<Recipient[]>([])
  useEffect(() => {
    if (sgClient) {
      const fetchData = async () => {
        const data = await getAllAllocators(sgClient)
        if (data) {
          setAllocatorOptions(data.allocator)
          setRecipientList(data.allocator[1].entries.map(({ address, share }, i) =>
            new Recipient({
              recipient: new Address({ address }),
              name: `Endeavor ${i}`,
              value: share / 10000,
            }),
          ))
        }
      }

      void fetchData()
    }
  }, [sgClient])

  // const ActiveTasks = useLiveQuery(ActiveTasksQuery) ?? []
  // console.log(`Active Tasks: ${ActiveTasks.length}`)

  const onSubmit = (amount: number) => {
    for (const eachRecip of recipientList) {
      console.log(amount, eachRecip.short)
      const recipRef = (tally.get(eachRecip.recipient.address))
      if (!recipRef || !amount) return
      const newWeight = recipRef.weight + amount
      recipRef.value = ((recipRef?.weight * recipRef?.value) + (amount * eachRecip.value)) / newWeight
      recipRef.weight = newWeight
    }
    setTally(new Map(tally))
  }
  const clickConnect = async (mEv: MouseEvent) => {
    if (sgClient) return console.log('already connected')

    const k = await getKeplrFromWindow()
    // addRegenRedwoodChain(k) // if you don't have a regen ledger running locally with api.enabled = true, then you can use redwood (but it won't have the latest modules active)
    addRegenLocalChain(k)

    const offlineSigner = await k?.getOfflineSignerAuto('test')

    if (!offlineSigner) {
      console.log('no signer??')
    } else {
      const [account] = await offlineSigner.getAccounts()
      setClientAddress(account.address)

      const regenStargateClient = await SigningStargateClient.connectWithSigner(
        'http://127.0.0.1:26657',
        offlineSigner,
        { registry: myRegistry },
      )
      setSgClient(regenStargateClient)

      console.log('account 0', account)

      const allocatorQueryResults = await getAllAllocators(regenStargateClient)
      console.log('allocatorQueryResults', allocatorQueryResults)

      const encodableMsg: EncodeObject = {
        typeUrl: '/cosmos.bank.v1beta1.MsgSend',
        value: {
          fromAddress: account.address,
          toAddress: account.address,
          amount: [{
            denom: 'uregen',
            amount: '1000',
          }],
        },
      }
      const fee = {
        amount: [
          {
            denom: 'uregen', // Use the appropriate fee denom for your chain
            amount: '40000',
          },
        ],
        gas: '80000',
      }

      const response: any = await regenStargateClient.getAllBalances(account.address)
      console.log('getAllBalances', response)

      // response = await regenStargateClient.sendTokens(
      //   account.address,
      //   account.address,
      //   [{
      //     denom: 'uregen',
      //     amount: '10000',
      //   }],
      //   fee,
      // )
      // console.log('sendTokens', response)

      const raw = await regenStargateClient.sign(
        account.address,
        [encodableMsg],
        fee,
        '',
      )

      const finished = TxRaw.encode(raw).finish()
      console.log('signedTx', raw)
      const hash = sha256(finished).toUpperCase()
      console.log('finished', finished, hash)
      await addPendingTx({
        hash,
        finished,
        raw,
      })

      const bresponse = await regenStargateClient.broadcastTx(finished)
      const parsedLog = JSON.parse(bresponse.rawLog ?? '')
      console.log('broadcastTx', bresponse, parsedLog)
      void completePendingTx(bresponse.transactionHash, bresponse)
    }
  }

  return (
    <CosmosContext.Provider value={{ sgClient, clientAddress }}>
      <AllocatorContext.Provider value={{ recipientList, allocatorOptions }}>
        <ThemeProvider theme={theme}>
          <FlexRow className="p-4">
            <ConnectButton address={ clientAddress } onClick={clickConnect} />
            {sgClient && <AllocatorsComboBox address={ clientAddress } className="ml-4" />}
          </FlexRow>
          <div className="container mx-auto lg:w-1/2">
            <h1 className="text-5xl mb-4">Allocator</h1>
            <AllocatorSet {...{ recipientList, setRecipientList }} />
            <SubmitRow className="mb-4" {...{ onSubmit }} />
            <h1 className="mb-2 text-3xl text-left">Running Weighted Tally</h1>
            {
              Array.from(tally.values()).map((eachRecip) => {
                return <FlexRow key={eachRecip.recipient.address} className="w-2/3 justify-between">
                  <span className="mr-2">{eachRecip.name}: </span>
                  <span className="mr-2">{eachRecip.value.toFixed(2)}%</span>
                  <span className="mr-2">{`(weight:${eachRecip.weight})`}</span>
                </FlexRow>
              })
            }
          </div>
          <FlexRow className="p-4">
            <Link href='https://github.com/onezoomin'>
              <Image width={100} src="https://avatars.githubusercontent.com/u/13870464?s=200&v=4" />
            </Link>
            <Image width={100} src="https://test.broken.url" showLoading
            errorIcon={
              <Tooltip arrow title="Broken Image" placement="right-start">
                <IconButton aria-label="broken"><WarningIcon /></IconButton>
              </Tooltip>}
          />
          </FlexRow>
        </ThemeProvider>
      </AllocatorContext.Provider>
    </CosmosContext.Provider>
  )
}
