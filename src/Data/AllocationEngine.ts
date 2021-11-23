import { initialRecipients, Recipient, RecipientWeighted } from './../Model/Allocations'

const mockRecipientMap: Map<string, RecipientWeighted> = new Map(initialRecipients.map((r: Recipient) => [r.recipient.address, new RecipientWeighted(r)]))
class DivvyAddress {
  recipientMap: Map<string, RecipientWeighted>
  owner: string

  constructor (newMap = mockRecipientMap, caller) {
    this.recipientMap = newMap
    this.owner = caller
  }

  setCurrentRecipientMap = (newMap: Map<string, RecipientWeighted>, caller = 'addressThatCalledTheContract'): void => {
    if (caller !== this.owner) throw new Error('unauthorized attempt to setCurrentRecipientMap')
    // set the current tally
    this.recipientMap = newMap
  }

  getCurrentRecipientMap = (): Map<string, RecipientWeighted> => {
    // return the current tally
    return this.recipientMap
  }
}

const authorizedWhitelisters = ['addressThatCalledTheContract']
const mockWhitelist: string[] = initialRecipients.map((r: Recipient) => r.recipient.address)
const whitelistRecipientAddress = (newAddressToWhitelist: string, caller = 'addressThatCalledTheContract') => {
  // Check for authority/permission
  if (!authorizedWhitelisters.includes(caller)) throw new Error('unauthorized attempt to whitelist an address')

  // Grant whitelist authority to new address (Add to list of addresses that can add whitelist addresses)
  mockWhitelist.push(newAddressToWhitelist)
}

const castWeightedVote = (recipientArray: Recipient[], weight: number) => {
  // Ensure all recipients are whitelisted
  for (const eachRecip of recipientArray) {
    if (!mockWhitelist.includes(eachRecip.recipient.address)) throw new Error('unknown recipient address - vote is discarded and voting tokens returned')
  }

  // Update running tally
  const tally = getCurrentRecipientMap()
  for (const eachRecip of recipientArray) {
    console.log(weight, eachRecip.short)
    const recipRef = (tally.get(eachRecip.recipient.address))
    if (!recipRef) return
    const newWeight = recipRef.weight + weight
    recipRef.value = ((recipRef.weight * recipRef.value) + (weight * eachRecip.value)) / newWeight
    recipRef.weight = newWeight
  }

  // Commit vote record
  const voteRecord = {
    thisVote: recipientArray,

  }
  setCurrentRecipientMap(tally)
}

const selfRemoval = (signedMessage, caller): void => {
  // a recipient should be able to remove themselves
  if (signedMessage.isSignedby(caller)) {
    // remove

    // reallocate / rebalance percentages
  } else {
    // throw
  }
}
const triggerDistribution = (): void => {
  // Distribute according to tally
}
const validateTally = (): boolean => {
  // Retrace all vote records and recalculate tally
  return false || true
}
