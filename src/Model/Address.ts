import { formatAddressShort } from '../Utils/js-utils'

export class AddressOpts {
  address: string
  constructor (addressOptions: AddressOpts) {
    Object.assign(this, addressOptions)
  }
}

export class Address extends AddressOpts {
  public get short (): string {
    return formatAddressShort(this.address)
  }
}
