import { Address } from './Address'

export class RecipientOpts {
  recipient: Address
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
