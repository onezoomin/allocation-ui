import { Address } from './Address'

export class RecipientOpts {
  recipient: Address
  name: string
  percentage?: number = 0
  constructor (recipientOptions: RecipientOpts) {
    Object.assign(this, recipientOptions)
  }
}

export class Recipient extends RecipientOpts {
  declare percentage: number // declaring as required because it is optional with a default set above in the Opts
  public get short (): string {
    return `${this.recipient.short} gets ${this.percentage}%`
  }
}

export interface AllocatorCategory {
  label: string
  value: number
  children: Recipient[]
}

export const initialAllocatorStructure: AllocatorCategory[] = [
  {
    label: 'Dev',
    value: 25,
    children: [
      new Recipient({
        recipient: new Address({ address: 'regen1xq3aq5ctyj3knu32usn66df9a67n0sf7usqaw4' }),
        name: 'Dev endeavor 1',
        percentage: 25,
      }),
      new Recipient({
        recipient: new Address({ address: 'regen1xq3aq5ctyj3knu32usn66df9a67n0sf7usqdv2' }),
        name: 'Dev endeavor 1',
        percentage: 25,
      }),
    ],
  },
  {
    label: 'Seeds',
    value: 25,
    children: [
      new Recipient({
        recipient: new Address({ address: 'regen1xq3aq5ctyj3knu32usn66df9a67n0sf7usqse1' }),
        name: 'Dev endeavor 1',
        percentage: 25,
      }),
      new Recipient({
        recipient: new Address({ address: 'regen1xq3aq5ctyj3knu32usn66df9a67n0sf7usqse2' }),
        name: 'Dev endeavor 1',
        percentage: 25,
      }),
    ],
  },
  {
    label: 'Flowers',
    value: 25,
    children: [
      new Recipient({
        recipient: new Address({ address: 'regen1xq3aq5ctyj3knu32usn66df9a67n0sf7usqfl1' }),
        name: 'Flowers endeavor 1',
        percentage: 25,
      }),
      new Recipient({
        recipient: new Address({ address: 'regen1xq3aq5ctyj3knu32usn66df9a67n0sf7usqfl2' }),
        name: 'Flowers endeavor 1',
        percentage: 25,
      }),
    ],
  },
  {
    label: 'Fruit',
    value: 25,
    children: [
      new Recipient({
        recipient: new Address({ address: 'regen1xq3aq5ctyj3knu32usn66df9a67n0sf7usqfr1' }),
        name: 'Fruit endeavor 1',
        percentage: 25,
      }),
      new Recipient({
        recipient: new Address({ address: 'regen1xq3aq5ctyj3knu32usn66df9a67n0sf7usqfr2' }),
        name: 'Fruit endeavor 1',
        percentage: 25,
      }),
    ],
  },
]
