import { h } from 'preact'
import { useState } from 'preact/hooks'
import AllocatorSet from './Components/Allocator/AllocatorSet'
import CheckButton from './Components/ButtonComponents/CheckButton'
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

export const App = () => {
  // // InitializingServiceWorker()
  // const ActiveTasks = useLiveQuery(ActiveTasksQuery) ?? []
  // const CompletedTasks = useLiveQuery(CompletedTasksQuery) ?? []

  // // useEffect(() => {
  // //   localStorage.setItem('ActiveTasks', JSON.stringify(ActiveTasks))
  // // }, [ActiveTasks])

  // // useEffect(() => {
  // //   localStorage.setItem('CompletedTasks', JSON.stringify(CompletedTasks))
  // // }, [CompletedTasks])

  // console.log(`Active Tasks: ${ActiveTasks.length}`)
  // console.log(`Completed Tasks: ${CompletedTasks.length}`)

  const [struct, setStruct] = useState(allocatorStructure)

  return (
    <div className="container mx-auto lg:w-1/2">
      <h1 className="text-5xl">Allocator</h1>
      <AllocatorSet {...{ struct, setStruct }} />
      <CheckButton onCheck={(mEv) => console.log(mEv)} />
    </div>
  )
}
