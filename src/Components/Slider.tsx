// import ReactSlider from '@mui/material/Slider'
import { h } from 'preact'
import ReactSlider from 'react-slider'

export default function Slider ({
  id,
  onChangeCallback,

  value = 50,
  step = 1,
  min = 0,
  max = 100,

  onChange = (value: number) => {
    onChangeCallback(id, value)
  },
}) {
  return (
    <div className="w-full flex flex-row justify-between">
      <span className="mr-2">{id}: </span>
      <span className="mr-2">{value}%</span>
      <ReactSlider
        {...{ id, step, min, max }}
        className="w-3/4 h-3 pr-2 my-4 bg-gray-200 rounded-md cursor-grab"
        thumbClassName="absolute w-5 h-5 cursor-grab bg-indigo-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 -mt-1"
        value={value}
        onChange={onChange}
      />
    </div>

  )
}
