import { formatAddressShort } from '../Utils/js-utils'
import { Address } from './Address'
import { Allocator as AllocatorDivvy, Recipient as RecipientDivvy, StoreAllocator } from './generated/regen/divvy/v1/types'

export class AllocatorOpts implements AllocatorDivvy, StoreAllocator {
  address: string
  admin: string
  start?: Date
  end?: Date
  interval: Duration
  name: string
  url: string
  paused: boolean
  recipients: Recipient[]
  constructor (AllocatorOptions: AllocatorOpts) {
    Object.assign(this, AllocatorOptions)
  }
}

export class Allocator extends AllocatorOpts {
  public get short (): string {
    return formatAddressShort(this.address)
  }

  public get recipientAddresses (): string[] {
    return this.recipients.map(recip => recip.address)
  }
}
export class RecipientOpts implements RecipientDivvy {
  address: string
  name: string
  share: number
  catKey?: string
  constructor (recipientOptions: RecipientOpts) {
    Object.assign(this, recipientOptions)
  }
}

export class Recipient extends RecipientOpts {
  declare share: number // declaring as required because it is optional with a default set above in the Opts
  public get short (): string {
    return `${this.catKey ?? ''} ${this.recipient.short} gets ${this.share}%`
  }

  public get recipient (): Address {
    return new Address({ address: this.address })
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
    address: 'regen1w4m7a6xm4njeehtgdkf4cmy6j2ezj2uq5gynal',
    name: 'Seeds endeavor 1',
    catKey: Categories.SEED,
    share: 250000,
  }),
  new Recipient({
    address: 'regen1u0jaralpy2cnfjhq4am6aufd6r28tku2c5f309',
    name: 'Flowers endeavor 1',
    catKey: Categories.FLOWER,
    share: 250000,
  }),
  new Recipient({
    address: 'regen136k6u22ukc7k59murkp2wqllexcu5d859z7lt8',
    name: 'Flowers endeavor 2',
    catKey: Categories.FLOWER,
    share: 250000,
  }),
  new Recipient({
    address: 'regen1xq3aq5ctyj3knu32usn66df9a67n0sf7usqaw4',
    name: 'Fruit endeavor 1',
    catKey: Categories.FRUIT,
    share: 250000,
  }),
]
