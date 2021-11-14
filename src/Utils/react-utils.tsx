
import { TextField } from '@mui/material'
import { h } from 'preact'
import { useState } from 'preact/hooks'

export const useField = ({ defaultValue, variant = 'filled', label = 'Label', id = `${variant}-${label}` }) => {
  const [value, setValue] = useState(defaultValue)
  const input = () => (
    <TextField
      {...{ id, label, variant, value }}
      onChange={e => setValue(e.target.value)}
    />
  )

  return [value, input]
}

/** Extend classes if given */
export const appendClassNames = (
  classes: string,
  additional: string = '',
) => {
  return { className: `${classes} ${additional}` }
}
