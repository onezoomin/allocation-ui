import { initialRecipients, Recipient, RecipientWeighted } from './../Model/Allocations'
const mockWhitelist: string[] = [
  'regen1xq3aq5ctyj3knu32usn66df9a67n0sf7usqse1',
  'regen1xq3aq5ctyj3knu32usn66df9a67n0sf7usqfl1',
  'regen1xq3aq5ctyj3knu32usn66df9a67n0sf7usqfl2',
  'regen1xq3aq5ctyj3knu32usn66df9a67n0sf7usqfr1',
  'regen1xq3aq5ctyj3knu32usn66df9a67n0sf7usqfr2',
]
const runningTally = new Map(initialRecipients.map((r: Recipient) => [r.recipient.address, new RecipientWeighted(r)]))

const castWeightedVote = (recipientArray: Recipient[], weight: number) => {
  // Ensure all recipients are whitelisted
  for (const eachRecip of recipientArray) {
    if (!mockWhitelist.includes(eachRecip.recipient.address)) throw new Error('unknown recipient address - vote is discarded and voting tokens returned')
  }
  // Commit vote record

  // Update tally
  const tally = getCurrentTally()
  for (const eachRecip of recipientArray) {
    console.log(weight, eachRecip.short)
    const recipRef = (tally.get(eachRecip.recipient.address))
    if (!recipRef) return
    const newWeight = recipRef.weight + weight
    recipRef.value = ((recipRef?.weight * recipRef?.value) + (weight * eachRecip.value)) / newWeight
    recipRef.weight = newWeight
  }
}
const getCurrentTally = (): Map<string, RecipientWeighted> => {
  // return the current tally
  return runningTally
}
const whitelistRecipientAddress = () => {
  // Check for authority/permission
  // Grant whitelist authority to new address (Add to list of addresses that can add whitelist addresses)

}

const triggerDistribution = () => {
// Distribute according to tally
}
const validateTally = () => {
// Retrace all vote records and recalculate tally
}
