import { Address } from './Address'

export class RecipientOpts {
  recipient: Address
  name: string
  catKey: string
  value?: number = 0
  constructor (recipientOptions: RecipientOpts) {
    Object.assign(this, recipientOptions)
  }
}

export class Recipient extends RecipientOpts {
  declare value: number // declaring as required because it is optional with a default set above in the Opts
  public get short (): string {
    return `${this.catKey} ${this.recipient.short} gets ${this.value}%`
  }
}
export class RecipientWeighted extends Recipient {
  weight: number = 100
}

export interface AllocatorCategory {
  label: string
  key: string
  value: number
}

export enum Categories {
  DEV='dev',
  SEED='seed',
  FLOWER='flower',
  FRUIT='fruit',
}
export const initialCategories: AllocatorCategory[] = [
  {
    label: 'Devs',
    key: Categories.DEV,
    value: 20,
  },
  {
    label: 'Seeds',
    key: Categories.SEED,
    value: 20,
  },
  {
    label: 'Flowers',
    key: Categories.FLOWER,
    value: 20,
  },
  {
    label: 'Fruits',
    key: Categories.FRUIT,
    value: 20,
  },
]

export const initialRecipients: Recipient[] = [
  new Recipient({
    recipient: new Address({ address: 'regen1xq3aq5ctyj3knu32usn66df9a67n0sf7usqse1' }),
    name: 'Seeds endeavor 1',
    catKey: Categories.SEED,
    value: 20,
  }),
  new Recipient({
    recipient: new Address({ address: 'regen1xq3aq5ctyj3knu32usn66df9a67n0sf7usqfl1' }),
    name: 'Flowers endeavor 1',
    catKey: Categories.FLOWER,
    value: 20,
  }),
  new Recipient({
    recipient: new Address({ address: 'regen1xq3aq5ctyj3knu32usn66df9a67n0sf7usqfl2' }),
    name: 'Flowers endeavor 2',
    catKey: Categories.FLOWER,
    value: 20,
  }),
  new Recipient({
    recipient: new Address({ address: 'regen1xq3aq5ctyj3knu32usn66df9a67n0sf7usqfr1' }),
    name: 'Fruit endeavor 1',
    catKey: Categories.FRUIT,
    value: 20,
  }),
  new Recipient({
    recipient: new Address({ address: 'regen1xq3aq5ctyj3knu32usn66df9a67n0sf7usqfr2' }),
    name: 'Fruit endeavor 2',
    catKey: Categories.FRUIT,
    value: 20,
  }),
]
