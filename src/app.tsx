import { useLiveQuery } from 'dexie-react-hooks'
import { h } from 'preact'
import Footer from './Components/Footer'
// import InitializingServiceWorker from './Components/ServiceWorker'
import ActiveTask from './Components/Tasks/ActiveTask'
import AddTasks from './Components/Tasks/AddTasks'
import CompletedTask from './Components/Tasks/CompletedTask'
import { ActiveTasksQuery, CompletedTasksQuery } from './Data/data'
// eslint-disable-next-line @typescript-eslint/promise-function-async
// const App = lazy(() => import('./app'))
// <Suspense fallback={<div>Loading...</div>}></Suspense>

export const App = () => {
  // InitializingServiceWorker()
  const ActiveTasks = useLiveQuery(ActiveTasksQuery) ?? []
  const CompletedTasks = useLiveQuery(CompletedTasksQuery) ?? []

  // useEffect(() => {
  //   localStorage.setItem('ActiveTasks', JSON.stringify(ActiveTasks))
  // }, [ActiveTasks])

  // useEffect(() => {
  //   localStorage.setItem('CompletedTasks', JSON.stringify(CompletedTasks))
  // }, [CompletedTasks])

  console.log(`Active Tasks: ${ActiveTasks.length}`)
  console.log(`Completed Tasks: ${CompletedTasks.length}`)

  return (
    <div className="container mx-auto lg:w-1/2">
      <h1 className="text-5xl">Todo App</h1>
      <AddTasks />
      <ActiveTask />
      <hr />
      <CompletedTask />
      <Footer />
    </div>
  )
}
