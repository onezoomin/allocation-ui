import { useLiveQuery } from 'dexie-react-hooks'
import { h } from 'preact'
import { CompletedTasksQuery } from '../../Data/data'
import DeleteButton from '../ButtonComponents/DeleteButton'

export default function CompletedTask () {
  // const ActiveTasks = useLiveQuery(ActiveTasksQuery) ?? []
  const CompletedTasks = useLiveQuery(CompletedTasksQuery) ?? []
  const onDelete = (index: number) => {
    console.log('del', index)
  }

  return (
    <div class="container overflow-y:auto mx-auto mt-5 pb-2">
      {CompletedTasks?.map((task, i) => {
        return (
          <div key={i} class="flex flex-wrap px-5 md:px-20">
            <DeleteButton onDelete={onDelete} index={i} />
            <p class="flex-grow overflow-ellipsis overflow-hidden w-2/3 line-through">{task.task}</p>
          </div>
        )
      })}
    </div>
  )
}
