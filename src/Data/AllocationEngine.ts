import { EncodeObject } from '@cosmjs/proto-signing'
import { sha256 } from 'js-sha256'
import { TxRaw } from '../Model/generated/cosmos/tx/v1beta1/tx'
import { MsgCreateAllocator, MsgSetAllocatorRecipients } from '../Model/generated/regen/divvy/v1/tx'
import { regenFee } from '../Utils/cosmos-utils'
import { initialRecipients, Recipient, RecipientWeighted } from './../Model/Allocations'
import { MsgRemoveAllocator } from './../Model/generated/regen/divvy/v1/tx'
import { addPendingTx, completePendingTx } from './data'

export const sendAndAwaitMsg = async (
  encodableMsg,
  sgClient,
  clientAddress,
  fee = regenFee(),
) => {
  if (!sgClient || !clientAddress) return console.warn('useCallCreateAllocator called without client')
  console.log(encodableMsg)

  const raw = await sgClient.sign(
    clientAddress,
    [encodableMsg],
    fee,
    '',
  )

  const finished = TxRaw.encode(raw).finish()
  console.log('signedTx', raw)
  const hash = sha256(finished).toUpperCase()
  console.log('finished', finished, hash)
  await addPendingTx({
    hash,
    finished,
    raw,
  })

  const bresponse = await sgClient.broadcastTx(finished)
  console.log('broadcastTx', bresponse)
  await completePendingTx(bresponse.transactionHash, bresponse)
}
export const callSetAllocatorRecipients = async (partialMsgSetAllocatorRecipients, sgClient, clientAddress) => {
  const setAllocatorRecipientsMsg: MsgSetAllocatorRecipients = MsgSetAllocatorRecipients.fromPartial(partialMsgSetAllocatorRecipients)
  const encodableMsg: EncodeObject = {
    typeUrl: '/regen.divvy.v1.MsgSetAllocatorRecipients',
    value: setAllocatorRecipientsMsg,
  }
  console.log('sending', encodableMsg)

  await sendAndAwaitMsg(encodableMsg,
    sgClient,
    clientAddress)
}
export const callCreateAllocator = async (partialMsgCreateAllocator, sgClient, clientAddress) => {
  if (!sgClient || !clientAddress) return console.warn('useCallCreateAllocator called without client')

  const createAllocatorMsg: MsgCreateAllocator = MsgCreateAllocator.fromPartial(partialMsgCreateAllocator)
  const encodableMsg: EncodeObject = {
    typeUrl: '/regen.divvy.v1.MsgCreateAllocator',
    value: createAllocatorMsg,
  }
  await sendAndAwaitMsg(encodableMsg,
    sgClient,
    clientAddress)
}
export const callRemoveAllocator = async (partialMsgRemoveAllocator, sgClient, clientAddress) => {
  if (!sgClient || !clientAddress) return console.warn('useCallCreateAllocator called without client')

  const removeAllocatorMsg: MsgRemoveAllocator = MsgRemoveAllocator.fromPartial(partialMsgRemoveAllocator)
  const encodableMsg: EncodeObject = {
    typeUrl: '/regen.divvy.v1.MsgRemoveAllocator',
    value: removeAllocatorMsg,
  }
  await sendAndAwaitMsg(encodableMsg,
    sgClient,
    clientAddress)
}
const mockRecipientMap: Map<string, RecipientWeighted> = new Map(
  initialRecipients.map(
    (r: Recipient) => [r.address.address, new RecipientWeighted(r)],
  ),
)

const newContractAddress = () => 'NEWcontractInstancePublicKey'
type PublicKeyString = string
type RecipientMap = Map<string, RecipientWeighted>
export class DivvyAddress {
  recipientMap: Map<PublicKeyString, RecipientWeighted>
  owner: string
  publicAddress: string

  constructor (newMap = mockRecipientMap, caller) {
    this.recipientMap = newMap
    this.owner = caller
    this.publicAddress = newContractAddress()

    // subscribe to fund arrival events and call this.doDistribution(amountThatArrived)
  }

  getCurrentRecipientMap = (): Map<string, RecipientWeighted> => {
    // return the current tally
    return this.recipientMap
  }

  setCurrentRecipientMap = (newMap: RecipientMap, caller = 'addressThatCalledTheContract'): void => {
    try {
      // set the current tally
      this.recipientMap = this.assertValidRecipientMap(newMap, caller)
      // return success via rpc
    } catch (error) {
      // return error via rpc
    }
  }

  assertValidRecipientMap = (newMap: RecipientMap, caller = 'addressThatCalledTheContract'): RecipientMap => {
    if (caller !== this.owner) throw new Error('unauthorized attempt to setCurrentRecipientMap')
    return newMap
  }

  // Distribute according to tally
  doDistribution = (totalAmount): void => {
    // build aggregate Tx to distribute to all recips
    this.getCurrentRecipientMap().forEach((eachRecip: RecipientWeighted) => {
      // addSendMsg(eachRecip.recipient.address, eachRecip.value*totalAmount)
    })
  }
}

export class DivvyAddress2 extends DivvyAddress {
  authorizedWhitelisters = ['addressThatCalledTheContract']
  mockWhitelist: string[] = initialRecipients.map((r: Recipient) => r.address.address)

  whitelistRecipientAddress = (newAddressToWhitelist: string, caller = 'addressThatCalledTheContract') => {
  // Check for authority/permission
    if (!this.authorizedWhitelisters.includes(caller)) throw new Error('unauthorized attempt to whitelist an address')

    // Grant whitelist authority to new address (Add to list of addresses that can add whitelist addresses)
    this.mockWhitelist.push(newAddressToWhitelist)
  }

  castWeightedVote = (recipientArray: RecipientWeighted[], weight: number) => {
    // Ensure all recipients are whitelisted
    for (const eachRecip of recipientArray) {
      if (!this.mockWhitelist.includes(eachRecip.address.address)) throw new Error('unknown recipient address - vote is discarded and voting tokens returned')
    }

    // Update running tally
    const tally = this.getCurrentRecipientMap()
    for (const eachRecip of recipientArray) {
      console.log(weight, eachRecip.short)
      const recipRef = (tally.get(eachRecip.address.address))
      if (!recipRef) return
      const newWeight = +recipRef.weight + weight
      recipRef.share = ((recipRef.weight * recipRef.share) + (weight * eachRecip.share)) / newWeight
      recipRef.weight = newWeight
    }

    // TODO consider if we should Commit each vote record as an individual message/tx
    const voteRecord = recipientArray

    this.setCurrentRecipientMap(tally)
  }

  selfRemoval = (signedMessage, caller): void => {
    // a recipient should be able to remove themselves
    if (signedMessage.isSignedby(caller)) {
      // remove

      // reallocate / rebalance percentages
    } else {
      // throw
    }
  }

  assertValidRecipientMap = (newMap: RecipientMap, caller = 'addressThatCalledTheContract'): RecipientMap => {
    if (caller !== this.owner) throw new Error('unauthorized attempt to setCurrentRecipientMap')
    newMap.forEach((eachRecip) => {
      if (!this.mockWhitelist.includes(eachRecip.address.address)) throw new Error(`attempt to include non-whitelisted address: ${eachRecip.address.address}`)
    })
    return newMap
  }

  validateTally = (): boolean => {
    // Retrace all vote records and recalculate tally
    return false || true
  }
}
