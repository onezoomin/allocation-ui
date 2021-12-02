import { EncodeObject, Registry } from '@cosmjs/proto-signing'
import { defaultRegistryTypes, SigningStargateClient } from '@cosmjs/stargate'
import { getKeplrFromWindow } from '@keplr-wallet/stores'
import WarningIcon from '@mui/icons-material/Warning'
import { IconButton, Link, Tooltip } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { Image } from 'mui-image'
import { h } from 'preact'
import { useState } from 'preact/hooks'
import AllocatorSet from './Components/Allocator/AllocatorSet'
import SubmitRow from './Components/Allocator/SubmitRow'
import ConnectButton from './Components/ButtonComponents/ConnectButton'
import { FlexRow } from './Components/Minis'
import { initialRecipients, RecipientWeighted } from './Model/Allocations'
import { MsgCreateAllocator } from './Model/generated/regen/divvy/v1/tx'
import { addRegenChain } from './Utils/cosmos-utils'
import { useDarkMode } from './Utils/react-utils'

const myRegistry = new Registry([
  ...defaultRegistryTypes,
  ['/regen/divvy/v1/tx/MsgCreateAllocator', MsgCreateAllocator], // Replace with your own type URL and Msg class
])

const runningTally = new Map(initialRecipients.map((r) => [r.recipient.address, new RecipientWeighted(r)]))

export const App = () => {
  const theme = useDarkMode()
  const [struct, setStruct] = useState(initialRecipients)
  const [tally, setTally] = useState(runningTally)
  const [clientAddress, setClientAddress] = useState('')
  const [sgClient, setSgClient] = useState<null | SigningStargateClient>(null)

  // const ActiveTasks = useLiveQuery(ActiveTasksQuery) ?? []
  // console.log(`Active Tasks: ${ActiveTasks.length}`)

  const onSubmit = (amount: number) => {
    for (const eachRecip of struct) {
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
    addRegenChain(k)
    // console.log('click', mEv, k, await k?.getKey('osmosis-1'))
    const offlineSigner = await k?.getOfflineSignerAuto('regen-redwood-1')

    if (!offlineSigner) {
      addRegenChain(k)
    } else {
      const [account] = await offlineSigner.getAccounts()
      setClientAddress(account.address)

      const regenStargateClient = await SigningStargateClient.connectWithSigner(
        'http://209.182.218.23:26657',
        offlineSigner,
        { registry: myRegistry },
      )
      setSgClient(regenStargateClient)

      console.log('account 0', account)
      const createAllocatorMsg: MsgCreateAllocator = MsgCreateAllocator.fromPartial({
        admin: account.address,
        start: new Date(),
        name: `${account.address}-allocator-X`,
        /** url with metadata */
        url: 'https://meta.data',
        entries: Array.from(struct.values()).map(eachRecip => ({
          address: eachRecip.recipient.address,
          share: eachRecip.value * 1000000, /** allocation share. 100% = 1e6. */
        })),
      })
      const encodableMsg: EncodeObject = {
        typeUrl: '/regen/divvy/v1/tx/MsgCreateAllocator', // Same as above
        value: createAllocatorMsg,
      }
      const fee = {
        amount: [
          {
            denom: 'udenom', // Use the appropriate fee denom for your chain
            amount: '120000',
          },
        ],
        gas: '10000',
      }

      // const response = await regenStargateClient.signAndBroadcast(
      //   account.address,
      //   [encodableMsg],
      //   fee)

      // console.log('response', response)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <FlexRow className="p-4">
        <ConnectButton address={ clientAddress } onClick={clickConnect} />
      </FlexRow>
      <div className="container mx-auto lg:w-1/2">

        <h1 className="text-5xl mb-4">Allocator</h1>
        <AllocatorSet {...{ struct, setStruct }} />
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
  )
}
