import { Task } from '../Model/Task'
import { PendingTx } from '../Model/Transactions'
import { allocatorDB } from './offline'

const getTaskStates = async function getTaskStates () {
  console.log(await allocatorDB.ActiveTasks.count(), 'active tasks in db')
  const currentActiveTasks = await allocatorDB.ActiveTasks.toArray()
  console.log(currentActiveTasks)
}
void getTaskStates()

export const addPendingTx = async (newFinishedTx: PendingTx) => await allocatorDB.PendingTxs.add(newFinishedTx)

export const completePendingTx = async (idToComplete: number) => {
  const cTask = await allocatorDB.PendingTxs.get(idToComplete)
  delete cTask?.id
  cTask && await allocatorDB.CompletedTasks.add(cTask)
  await allocatorDB.ActiveTasks.delete(idToComplete)
}

export const updateActiveTask = async (taskToUpdate: Task) => await allocatorDB.ActiveTasks.put(taskToUpdate)
export const delActiveTask = async (idToDelete: number) => await allocatorDB.ActiveTasks.delete(idToDelete)

export const ActiveTasksQuery = () => allocatorDB.ActiveTasks.toArray()
export const CompletedTasksQuery = () => allocatorDB.CompletedTasks.toArray()
