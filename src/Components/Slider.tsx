// import ReactSlider from '@mui/material/Slider'
import { h } from 'preact'
import ReactSlider from 'react-slider'
import { FlexRow } from './Minis'

export default function Slider ({
  recip,
  onChangeCallback,
  id,

  value = recip.value,
  step = 1,
  min = 0,
  max = 100,

  onChange = (value: number) => {
    onChangeCallback(id, value)
  },
}) {
  return (
    <FlexRow className="w-full justify-between">
      <FlexRow className="w-1/3 justify-between">
        <span className="mr-2">{recip.name}: </span>
        <span className="mr-2">{value}%</span>
      </FlexRow>
      <ReactSlider
        {...{ id, step, min, max }}
        className="w-2/3 h-3 pr-2 my-4 bg-gray-200 rounded-md cursor-grab"
        thumbClassName="absolute w-5 h-5 cursor-grab bg-indigo-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 -mt-1"
        value={value}
        onChange={onChange}
      />
    </FlexRow>

  )
}
