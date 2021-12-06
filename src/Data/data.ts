import { BroadcastTxResponse } from '@cosmjs/stargate'
import { Allocator } from '../Model/generated/regen/divvy/v1/types'
import { PendingTx } from '../Model/Transactions'
import { allocatorDB } from './offline'

const getAllocators = async function getAllocators () {
  console.log(await allocatorDB.Allocators.count(), 'active Allocators in db')
  const currentAllocators = await allocatorDB.Allocators.toArray()
  console.log(currentAllocators)
}

export const addPendingTx = async (newFinishedTx: PendingTx) => await allocatorDB.PendingTxs.add(newFinishedTx)

export const completePendingTx = async (txHash: string, response: BroadcastTxResponse) => {
  const tx = await allocatorDB.PendingTxs.get(txHash)
  if (tx) {
    const cTx = {
      ...tx,
      response,
    }
    await allocatorDB.CompletedTxs.add(cTx)
    await allocatorDB.PendingTxs.delete(txHash)
  }
}

export const AllocatorsForOwnerQuery = (ownerAddress: string = '') => allocatorDB.Allocators.where('admin').equalsIgnoreCase(ownerAddress).toArray()

export const updateAllocator = async (allocatorToUpdate: Allocator) => await allocatorDB.Allocators.put(allocatorToUpdate)
export const delAllocator = async (idToDelete: number) => await allocatorDB.Allocators.delete(idToDelete)

export const AllocatorsQuery = () => allocatorDB.Allocators.toArray()
export const CompletedTxsQuery = () => allocatorDB.CompletedTxs.toArray()
export const PendingTxsQuery = () => allocatorDB.PendingTxs.toArray()
