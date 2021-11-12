import Button from '@mui/material/Button'
import CheckCircleOutlineIcon from 'mdi-preact/CheckCircleOutlineIcon'
import { h } from 'preact'
// import { Button } from 'preact-fluid'
import { StateUpdater } from 'preact/hooks'
export default function CheckButton (props: any) {
  const onCheck: StateUpdater<number> = props.onCheck
  const i: number = props.index

  return (
    <Button onClick={() => onCheck(i)}>
      <CheckCircleOutlineIcon />
    </Button>
  )
}
