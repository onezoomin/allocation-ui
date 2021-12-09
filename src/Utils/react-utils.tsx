
import EditIcon from '@mui/icons-material/Edit'
import SaveIcon from '@mui/icons-material/Save'
import { createTheme, Fab, TextField, useMediaQuery } from '@mui/material'
import { deepOrange, deepPurple, grey } from '@mui/material/colors'
import { h } from 'preact'
import { useCallback, useEffect, useMemo, useRef, useState } from 'preact/hooks'

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
export const usePrevious = <T extends unknown>(value: T): T | undefined => {
  const ref = useRef<T>()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
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
  const mode = prefersDarkMode ? 'dark' : 'light'
  return useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
              // palette values for light mode
                primary: deepPurple,
                divider: deepPurple[200],
                text: {
                  primary: grey[900],
                  secondary: grey[800],
                },
              }
            : {
              // palette values for dark mode
                primary: {
                  main: grey[200],
                },
                warning: {
                  main: deepOrange[700],
                },
                background: {
                  default: deepPurple[900],
                  paper: deepPurple[900],
                },
                text: {
                  primary: '#fff',
                  secondary: grey[200],
                },
              }),
        },
      }),
    [prefersDarkMode],
  )
}
