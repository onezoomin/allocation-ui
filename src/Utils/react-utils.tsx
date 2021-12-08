
import EditIcon from '@mui/icons-material/Edit'
import SaveIcon from '@mui/icons-material/Save'
import { createTheme, Fab, TextField, useMediaQuery } from '@mui/material'
import { h } from 'preact'
import { useCallback, useMemo, useState } from 'preact/hooks'

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
export const useToggle = (initialValue = false): [boolean, () => void] => {
  const [value, setValue] = useState(initialValue)
  const toggle = useCallback(() => {
    setValue(v => !v)
  }, [])
  return [value, toggle]
}
export const useEditSaveFab = (initialValue: boolean, onSave: Function, onEdit: Function = () => console.log('onEdit')): [boolean, () => JSX.Element] => {
  const [isEditing, toggleEditing] = useToggle(initialValue)
  const callAndToggle = useCallback((mEv) => {
    isEditing ? onSave(mEv) : onEdit(mEv)
    toggleEditing()
  }, [isEditing, onSave, onEdit, toggleEditing])
  return [
    isEditing,
    () => (
      <Fab size='small' onClick={callAndToggle}>
        {isEditing ? <SaveIcon /> : <EditIcon />}
      </Fab>
    ),
  ]
}
/** Extend classes if given */
export const appendClassNames = (
  classes: string,
  additional: string = '',
) => {
  return { className: `${classes} ${additional}` }
}
export const useDarkMode = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  return useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  )
}
