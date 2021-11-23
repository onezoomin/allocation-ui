import { initialRecipients, Recipient, RecipientWeighted } from './../Model/Allocations'

const mockRecipientMap: Map<string, RecipientWeighted> = new Map(initialRecipients.map((r: Recipient) => [r.recipient.address, new RecipientWeighted(r)]))
class DivvyAddress {
  recipientMap: Map<string, RecipientWeighted>
  owner: string
  publicAddress: string

  constructor (newMap = mockRecipientMap, caller) {
    this.recipientMap = newMap
    this.owner = caller
    this.publicAddress = determinePublicAddress()
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

  doDistribution = (totalAmount): void => {
    // Distribute according to tally
    this.getCurrentRecipientMap().forEach((eachRecip: RecipientWeighted) => {
      // doSend(eachRecip.recipient.address, eachRecip.value*totalAmount)
    })
  }
}

class DivvyAddress2 extends DivvyAddress {
  authorizedWhitelisters = ['addressThatCalledTheContract']
  mockWhitelist: string[] = initialRecipients.map((r: Recipient) => r.recipient.address)

  whitelistRecipientAddress = (newAddressToWhitelist: string, caller = 'addressThatCalledTheContract') => {
  // Check for authority/permission
    if (!this.authorizedWhitelisters.includes(caller)) throw new Error('unauthorized attempt to whitelist an address')

    // Grant whitelist authority to new address (Add to list of addresses that can add whitelist addresses)
    this.mockWhitelist.push(newAddressToWhitelist)
  }

  castWeightedVote = (recipientArray: RecipientWeighted[], weight: number) => {
    // Ensure all recipients are whitelisted
    for (const eachRecip of recipientArray) {
      if (!this.mockWhitelist.includes(eachRecip.recipient.address)) throw new Error('unknown recipient address - vote is discarded and voting tokens returned')
    }

    // Update running tally
    const tally = this.getCurrentRecipientMap()
    for (const eachRecip of recipientArray) {
      console.log(weight, eachRecip.short)
      const recipRef = (tally.get(eachRecip.recipient.address))
      if (!recipRef) return
      const newWeight = +recipRef.weight + weight
      recipRef.value = ((recipRef.weight * recipRef.value) + (weight * eachRecip.value)) / newWeight
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

  validateTally = (): boolean => {
    // Retrace all vote records and recalculate tally
    return false || true
  }
}
