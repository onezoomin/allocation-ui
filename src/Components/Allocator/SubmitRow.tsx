import { h } from 'preact'
import { useField } from '../../Utils/react-utils'
import CheckButton from '../ButtonComponents/CheckButton'
import { FlexRow } from '../Minis'
export default function SubmitRow ({ defaultValue = 100, onSubmit = () => console.log('submit'), ...restProps }: any) {
  const [amount, AmountField] = useField({ label: 'Allocation Amount', defaultValue })
  return (
    <FlexRow {...restProps}>
      <AmountField />
      <CheckButton onCheck={() => onSubmit(+amount)} />
    </FlexRow>
  )
}
