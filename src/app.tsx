import { Registry } from '@cosmjs/proto-signing'
import { defaultRegistryTypes, SigningStargateClient } from '@cosmjs/stargate'
import { getKeplrFromWindow } from '@keplr-wallet/stores'
import WarningIcon from '@mui/icons-material/Warning'
import { IconButton, Link, Tooltip } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { Image } from 'mui-image'
import { createContext, h } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import AllocatorsComboBox from './Components/Allocator/AllocatorsComboBox'
import AllocatorSet from './Components/Allocator/AllocatorSet'
import SubmitRow from './Components/Allocator/SubmitRow'
import ConnectButton from './Components/ButtonComponents/ConnectButton'
import { FlexRow } from './Components/Minis'
import { Allocator, initialRecipients, Recipient, RecipientWeighted } from './Model/Allocations'
import { MsgCreateAllocator } from './Model/generated/regen/divvy/v1/tx'
import { addRegenLocalChain, getAllAllocators } from './Utils/cosmos-utils'
import { useDarkMode } from './Utils/react-utils'
const myRegistry = new Registry([
  ...defaultRegistryTypes,
  ['/regen.divvy.v1.MsgCreateAllocator', MsgCreateAllocator], // Replace with your own type URL and Msg class
  // ['/regen.ecocredit.v1alpha2.tx.MsgCreateAllocator', MsgCreateAllocator], // Replace with your own type URL and Msg class
])

const runningTally = new Map(initialRecipients.map((r) => [r.address.address, new RecipientWeighted(r)]))

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
  const [chosenAllocator, setChosenAllocator] = useState<Allocator | null>(null)
  const [isFetchTriggered, triggerFetch] = useState(true)

  const [recipientList, setRecipientList] = useState<Recipient[]>([])

  useEffect(() => {
    console.log('useEffect', sgClient, clientAddress, chosenAllocator, isFetchTriggered)

    if (sgClient) {
      const fetchData = async () => {
        const data = await getAllAllocators(sgClient)
        if (!data) return

        const currentRecips = chosenAllocator?.recipients ?? initialRecipients
        console.log(currentRecips)

        const currentAllocatorOptions = data?.allocator.reduce<Allocator[]>((resultArray, eachAllo) => {
          if (eachAllo.a?.admin === clientAddress) resultArray.push(new Allocator({ address: eachAllo.address, ...eachAllo.a }))
          return resultArray
        }, [])

        setAllocatorOptions(currentAllocatorOptions)
        setRecipientList(currentRecips.map(({ address, share, name }, i) =>
          new Recipient({
            address,
            name: name || `Endeavor ${i}`,
            share,
          }),
        ))
        triggerFetch(false)
      }
      void fetchData()
    }
  }, [sgClient, clientAddress, chosenAllocator, isFetchTriggered])

  const onSubmit = (amount: number) => {
    for (const eachRecip of recipientList) {
      console.log(amount, eachRecip.short)
      const recipRef = (tally.get(eachRecip.address))
      if (!recipRef || !amount) return
      const newWeight = recipRef.weight + amount
      recipRef.share = ((recipRef?.weight * recipRef?.share) + (amount * eachRecip.share)) / newWeight
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

      // const allocatorQueryResults = await getAllAllocators(regenStargateClient)
      // console.log('allocatorQueryResults', allocatorQueryResults)
    }
  }
  const allocatorName = chosenAllocator?.name ?? ''
  return (
    <CosmosContext.Provider value={{ sgClient, clientAddress }}>
      <AllocatorContext.Provider value={{ recipientList, allocatorOptions }}>
        <ThemeProvider theme={theme}>
          <FlexRow className="p-4">
            <ConnectButton address={ clientAddress } onClick={clickConnect} />
            {sgClient && <AllocatorsComboBox onChoose={setChosenAllocator} triggerFetch={triggerFetch} address={ clientAddress } className="ml-4" />}
          </FlexRow>
          <div className="container mx-auto lg:w-1/2">

            <AllocatorSet {...{ allocatorName, recipientList, setRecipientList }} />
            <SubmitRow className="mb-4" {...{ onSubmit }} />
            <h1 className="mb-2 text-3xl text-left">Running Weighted Tally</h1>
            {
              Array.from(tally.values()).map((eachRecip) => {
                return <FlexRow key={eachRecip.address.address} className="w-2/3 justify-between">
                  <span className="mr-2">{eachRecip.name}: </span>
                  <span className="mr-2">{eachRecip.share.toFixed(2)}%</span>
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
