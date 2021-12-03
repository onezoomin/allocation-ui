import AddIcon from '@mui/icons-material/Add'
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete'
import Fab from '@mui/material/Fab'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import Zoom from '@mui/material/Zoom'
import { h } from 'preact'
import { useState } from 'preact/hooks'
import { FlexRow } from '../Minis'

const filter = createFilterOptions<FilmOptionType>()

const optionDefaults = ['regenAllocatorAddress1', 'regenAllocatorAddress2']

export default function AllocatorsComboBox ({ ...passedProps }) {
  const [options, setOptions] = useState<string[]>(optionDefaults)
  const [value, setValue] = useState<string | null>(options[0])
  const [inputValue, setInputValue] = useState('')
  const [showAddButton, setShowAddButton] = useState(false)

  return (

    <Autocomplete
        {...passedProps}
        {...{ options, value, filterOptions }}
        onChange={(event: any, newValue: string | null) => {
          if (newValue && !options.includes(newValue)) {
            const newVa = newValue.split(ADD_NEW)[1]
            setOptions([...options, newVa])
            return setValue(newVa)
          }
          setValue(newValue)
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          if (newInputValue && !options.includes(newInputValue)) {
            setValue(null)
            setShowAddButton(true)
          } else {
            setShowAddButton(false)
          }
          setInputValue(newInputValue)
        }}
        id="allocators-combo-box"
        sx={{ width: 300 }}
        renderInput={(params) => {
          if (showAddButton) {
            params.InputProps = {
              ...params.InputProps,

              startAdornment: (
                <InputAdornment position="start">
                  <Zoom
                    in={true}
                    unmountOnExit
                  >
                    <Fab size="small" color="primary" aria-label="add" onClick={() => console.log('add')}>
                      <AddIcon />
                    </Fab>
                  </Zoom>
                </InputAdornment>
              ),

            }
          }
          return (
            <FlexRow>
              <TextField {...params} label="Choose or Add an Allocator" />
            </FlexRow>
          )
        }}
      />

  )
}
const ADD_NEW = 'Add new allocator: '
const filterOptions = (options, params) => {
  const filtered = filter(options, params)

  if (params.inputValue !== '') {
    filtered.push(`${ADD_NEW}${params.inputValue}`)
  }

  return filtered
}
