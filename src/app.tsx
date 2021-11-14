import { createTheme, ThemeProvider } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { h } from 'preact'
import { useMemo, useState } from 'preact/hooks'
import AllocatorSet from './Components/Allocator/AllocatorSet'
import SubmitRow from './Components/Allocator/SubmitRow'
import { initialAllocatorStructure } from './Model/Allocations'
// eslint-disable-next-line @typescript-eslint/promise-function-async
// const App = lazy(() => import('./app'))
// <Suspense fallback={<div>Loading...</div>}></Suspense>

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

  const [struct, setStruct] = useState(initialAllocatorStructure)

  const onSubmit = (amount) => {
    const topKeys = Array.from(Object.keys(struct))
    for (const eachCategory of struct) {
      for (const eachRecip of eachCategory.children) {
        console.log(amount, eachRecip.short)
      }
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
