import Dexie from 'dexie'
import { Address } from '../Model/Address'
import { Allocator } from '../Model/generated/regen/divvy/v1/types'
import { PendingTx } from './../Model/Transactions'

// TODO consider https://dexie.org/docs/Typescript#storing-real-classes-instead-of-just-interfaces
class AllocatorDB extends Dexie {
  // Declare implicit table properties. (just to inform Typescript. Instanciated by Dexie in stores() method)
  Addresses: Dexie.Table<Address, string> // string = type of the primkey
  Allocators: Dexie.Table<Allocator, number>
  PendingTxs: Dexie.Table<PendingTx, number>
  // ...other tables go here...

  // async init () {
  //   if ((await this.ActiveTasks.count()) === 0) {
  //     await this.ActiveTasks.bulkAdd(initialActiveTasks)
  //   }
  //   if ((await this.CompletedTasks.count()) === 0) {
  //     await this.CompletedTasks.bulkAdd(initialCompletedTasks)
  //   }
  // }

  constructor () {
    super('AllocatorDB')
    this.version(1).stores({
      Addresses: 'address',
      Allocators: '++id, name, admin, string',
      PendingTxs: '++id',
      // ...other tables go here...//
    })
    this.Addresses = this.table('Addresses')
    this.Allocators = this.table('Allocators')
    this.PendingTxs = this.table('PendingTxs')

    this.Addresses.mapToClass(Address)
    // this.Allocators.mapToClass(Allocator)
    // this.PendingTxs.mapToClass(Tx)

    // void this.init()
  }
}
export const allocatorDB = new AllocatorDB()
