// import ReactSlider from '@mui/material/Slider'
import { h } from 'preact'
import ReactSlider from 'react-slider'
import { FlexRow } from './Minis'

export default function Slider ({
  recip,
  onChangeCallback,
  id,

  value = recip.share,
  step = 1,
  min = 0,
  max = 1000000,

  onChange = (value: number) => {
    onChangeCallback(id, value)
  },
}) {
  return (
    <FlexRow className="w-full justify-between">
      <span className="w-1/6 mr-1">{(value / 10000).toFixed(2)}%</span>
      <ReactSlider
        {...{ id, step, min, max }}
        className="w-5/6 h-3 pr-2 my-4 bg-gray-200 rounded-md cursor-grab"
        thumbClassName="absolute w-5 h-5 cursor-grab bg-indigo-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 -mt-1"
        value={value}
        onChange={onChange}
      />
    </FlexRow>

  )
}
