import { h } from 'preact'
import { useField } from '../../Utils/react-utils'
import CheckButton from '../ButtonComponents/CheckButton'
import { FlexRow } from '../Minis'
export default function SubmitRow ({ onSubmit = () => console.log('submit') }: any) {
  const [amount, AmountField] = useField({ defaultValue: 1000 })
  return (
    <FlexRow>
      <AmountField />
      <CheckButton onCheck={() => onSubmit(amount)} />
    </FlexRow>
  )
}
