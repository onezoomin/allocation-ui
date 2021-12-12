import { SigningStargateClient } from '@cosmjs/stargate'
import { getKeplrFromWindow } from '@keplr-wallet/stores'
import SaveAltIcon from '@mui/icons-material/SaveAlt'
import { Button } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel'
import { ThemeProvider } from '@mui/material/styles'
import Switch from '@mui/material/Switch'
import { createContext, h } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import AllocatorsComboBox from './Components/Allocator/AllocatorsComboBox'
import AllocatorSet from './Components/Allocator/AllocatorSet'
import SubmitRow from './Components/Allocator/SubmitRow'
import ConnectButton from './Components/ButtonComponents/ConnectButton'
import { FlexRow } from './Components/Minis'
import { callCustomMessage } from './Data/AllocationEngine'
import { Allocator, allocatorTemplate, initialRecipients, Recipient, RecipientWeighted } from './Model/Allocations'
import { addRegenLocalChain, getAllAllocators, regenRegistry } from './Utils/cosmos-utils'
import { useDarkMode, useToggle } from './Utils/react-utils'

const runningTally = (recipients) => new Map<string, RecipientWeighted>(recipients.map((r) => [r.address, new RecipientWeighted(r)]))

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

  const [clientAddress, setClientAddress] = useState('')
  const [sgClient, setSgClient] = useState<null | SigningStargateClient>(null)

  const [allocatorOptions, setAllocatorOptions] = useState<Allocator[]>([])
  const [chosenAllocator, setChosenAllocator] = useState<Allocator>(allocatorTemplate(clientAddress))
  const [isFetchTriggered, triggerFetch] = useState(true)
  const [isTallyShown, showHideTally] = useToggle(false)

  const [recipientList, setRecipientList] = useState<Recipient[]>([])
  const [tally, setTally] = useState<Map<string, RecipientWeighted> | null >(null)

  useEffect(() => {
    // console.log('useEffect', sgClient, clientAddress, chosenAllocator, isFetchTriggered)

    if (sgClient) {
      const fetchData = async () => {
        const allAllocatorsResponse = await getAllAllocators(sgClient)
        if (!allAllocatorsResponse) return

        const currentRecips = chosenAllocator?.recipients ?? initialRecipients
        // console.log(currentRecips)

        !tally && recipientList.length && setTally(runningTally(recipientList))

        const currentAllocatorOptions = allAllocatorsResponse?.allocator.reduce<Allocator[]>((resultArray, eachAllo) => {
          if (eachAllo.admin === clientAddress) resultArray.push(new Allocator({ ...eachAllo }))
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

        // const claimableResponse = await getAllAllocators(sgClient)
        // if (!claimableResponse) return

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
        { registry: regenRegistry },
      )
      setSgClient(regenStargateClient)

      console.log('account 0', account)

      // const allocatorQueryResults = await getAllAllocators(regenStargateClient)
      // console.log('allocatorQueryResults', allocatorQueryResults)
    }
  }
  return (
    <CosmosContext.Provider value={{ sgClient, clientAddress }}>
      <AllocatorContext.Provider value={{ recipientList, allocatorOptions }}>
        <ThemeProvider theme={theme}>
          <FlexRow className="mt-6 p-4 justify-end">
            {sgClient && <AllocatorsComboBox onChoose={setChosenAllocator} triggerFetch={triggerFetch} address={ clientAddress } className="mr-4" />}

            <ConnectButton address={ clientAddress } onClick={clickConnect} />
          </FlexRow>

          {sgClient
              && <FlexRow className="p-4 items-baseline justify-end">
                <Button
                onClick={async () => {
                  const partialMsg = {
                    sender: clientAddress,
                    allocator: chosenAllocator.address,
                  }
                  await callCustomMessage('/regen.divvy.v1.MsgClaimAllocations', partialMsg, sgClient, clientAddress)
                }} >
                  <SaveAltIcon className="mr-2" />Claim
                </Button>
              </FlexRow>}
          <div className="container mx-auto lg:w-1/2">

            {chosenAllocator && <AllocatorSet {...{ chosenAllocator, triggerFetch, setRecipientList }} />}

            {tally && <div>
              <FormControlLabel control={
                <Switch
                  checked={isTallyShown}
                  onChange={showHideTally}
                />} label="Show Weighted Tally"
              />
              { isTallyShown && <div>
                <SubmitRow className="mb-4" {...{ onSubmit }} />
                <h1 className="mb-2 text-3xl text-left">Running Weighted Tally</h1>
                {
                  Array.from(tally.values()).map((eachRecip) => {
                    return <FlexRow key={eachRecip.address.address} className="w-2/3 justify-between">
                      <span className="mr-2">{eachRecip.name}: </span>
                      <span className="mr-2">{(eachRecip.share / 1000).toFixed(2)}%</span>
                      <span className="mr-2">{`(weight:${eachRecip.weight})`}</span>
                    </FlexRow>
                  })
                }
              </div>} {/* tally ui */}
            </div>} {/* tally switch */}
          </div> {/* main container */}

        </ThemeProvider>
      </AllocatorContext.Provider>
    </CosmosContext.Provider>
  )
}
