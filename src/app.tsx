import { createTheme, ThemeProvider } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { h } from 'preact'
import { useMemo, useState } from 'preact/hooks'
import AllocatorSet from './Components/Allocator/AllocatorSet'
import SubmitRow from './Components/Allocator/SubmitRow'
import { Address } from './Model/Address'
import { Recipient } from './Model/Allocations'
// eslint-disable-next-line @typescript-eslint/promise-function-async
// const App = lazy(() => import('./app'))
// <Suspense fallback={<div>Loading...</div>}></Suspense>

const allocatorStructure = {
  Dev: {
    value: 25,
    endeavor: {
      'End 1': 50,
      'End 2': 50,
    },
  },
  Seeds: {
    value: 25,
    endeavor: {
      'Seeds 1': 25,
      'Seeds 2': 75,
    },
  },
  Flowers: {
    value: 25,
    endeavor: {
      'Seeds 1': 25,
      'Seeds 2': 75,
    },
  },
  Fruit: {
    value: 25,
    endeavor: {
      'Seeds 1': 25,
      'Seeds 2': 75,
    },
  },
}

const walletStruct = {
  address: '0x234',
  balance: 10000,
}

export const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  )

  // const ActiveTasks = useLiveQuery(ActiveTasksQuery) ?? []
  // console.log(`Active Tasks: ${ActiveTasks.length}`)

  const [struct, setStruct] = useState(allocatorStructure)

  const onSubmit = (amount) => {
    const topKeys = Array.from(Object.keys(struct))
    for (const eachTopKey of topKeys) {
      const eachRecip = new Recipient({
        percentage: (struct[eachTopKey].value as number) * amount * 0.01,
        recipient: new Address({ address: eachTopKey }),
      })
      console.log(amount, eachRecip.short)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="container mx-auto lg:w-1/2">
        <h1 className="text-5xl">Allocator</h1>
        <AllocatorSet {...{ struct, setStruct }} />
        <SubmitRow {...{ onSubmit }} />
      </div>
    </ThemeProvider>
  )
}
