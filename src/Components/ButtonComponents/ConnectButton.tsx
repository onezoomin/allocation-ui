import Button from '@mui/material/Button'
import WalletIcon from 'mdi-preact/WalletIcon'
import { h } from 'preact'
export default function ConnectButton (props: any) {
  const { ...restProps } = props

  return (
    <Button {...restProps}>
      <WalletIcon color='white' /> Connect
    </Button>
  )
}
