import Button from '@mui/material/Button'
import WalletIcon from 'mdi-preact/WalletIcon'
import { h } from 'preact'
import { formatAddressShort } from '../../Utils/js-utils'
export default function ConnectButton (props: any) {
  const { address, ...restProps } = props

  return (
    <Button {...restProps}>
      <WalletIcon class='mr-2' color='white' /> {address ? formatAddressShort(address) : 'Connect'}
    </Button>
  )
}
