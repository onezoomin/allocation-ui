import Button from '@mui/material/Button'
import CheckCircleOutlineIcon from 'mdi-preact/CheckCircleOutlineIcon'
import { h } from 'preact'
export default function CheckButton (props: any) {
  const { onCheck } = props

  return (
    <Button onClick={(mEv) => onCheck(mEv)}>
      <CheckCircleOutlineIcon color='white' />
    </Button>
  )
}
