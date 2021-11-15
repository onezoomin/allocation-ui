import { ThemeProvider } from '@mui/material/styles'
import { h } from 'preact'
import { useState } from 'preact/hooks'
import AllocatorSet from './Components/Allocator/AllocatorSet'
import SubmitRow from './Components/Allocator/SubmitRow'
import { FlexRow } from './Components/Minis'
import { initialRecipients, RecipientWeighted } from './Model/Allocations'
import { useDarkMode } from './Utils/react-utils'

const runningTally = new Map(initialRecipients.map((r) => [r.recipient.address, new RecipientWeighted(r)]))

export const App = () => {
  const theme = useDarkMode()
  const [struct, setStruct] = useState(initialRecipients)
  const [tally, setTally] = useState(runningTally)

  // const ActiveTasks = useLiveQuery(ActiveTasksQuery) ?? []
  // console.log(`Active Tasks: ${ActiveTasks.length}`)

  const onSubmit = (amount: number) => {
    for (const eachRecip of struct) {
      console.log(amount, eachRecip.short)
      const recipRef = (tally.get(eachRecip.recipient.address))
      if (!recipRef) return
      const newWeight = recipRef.weight + amount
      recipRef.value = ((recipRef?.weight * recipRef?.value) + (amount * eachRecip.value)) / newWeight
      recipRef.weight = newWeight
    }
    setTally(new Map(tally))
  }

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  )
}
