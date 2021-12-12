import AddIcon from '@mui/icons-material/Add'
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete'
import CircularProgress from '@mui/material/CircularProgress'
import Fab from '@mui/material/Fab'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import Zoom from '@mui/material/Zoom'
import addDays from 'date-fns/addDays'
import { h } from 'preact'
import { StateUpdater, useCallback, useContext, useEffect, useState } from 'preact/hooks'
import { AllocatorContext, CosmosContext } from '../../app'
import { callCreateAllocator } from '../../Data/AllocationEngine'
import { Recipient } from '../../Model/Allocations'
import { Duration } from '../../Model/generated/google/protobuf/duration'
import { Allocator } from '../../Model/generated/regen/divvy/v1/types'
import { usePrevious } from '../../Utils/react-utils'
import { FlexRow } from '../Minis'

const filter = createFilterOptions()

const allocatorEquality = (option: Allocator, value: Allocator) => option.address === value.address

const ADD_NEW = 'Add a new Allocator: '

export default function AllocatorsComboBox ({ onChoose, triggerFetch, ...passedProps }: { onChoose: StateUpdater<Allocator>, triggerFetch: StateUpdater<boolean> }) {
  const [inputValue, setInputValue] = useState('')
  const [showAddButton, setShowAddButton] = useState(false)
  const [isAwaitingAdd, setIsAwaitingAdd] = useState(false)
  const { sgClient, clientAddress } = useContext(CosmosContext)
  const { recipientList, allocatorOptions } = useContext(AllocatorContext)
  const prevAllocatorOptions = usePrevious<Allocator[]>(allocatorOptions)
  const [options, setOptions] = useState<Allocator[]>(allocatorOptions.map((a: Allocator) => a))
  const [value, setValue] = useState<Allocator | null>(null)
  const alloNames = allocatorOptions.map((a) => a.name)

  const onAdd = useCallback(async () => {
    if (!sgClient) return console.warn('no stargate client in context')
    setIsAwaitingAdd(true)
    // setValue(null)
    await callCreateAllocator({
      admin: clientAddress,
      start: new Date(),
      end: addDays(new Date(), 21),
      name: inputValue.split(ADD_NEW)[1] ?? inputValue,
      interval: Duration.fromPartial({
        seconds: 60,
      }),
      url: 'https://meta.data',
      recipients: Array.from(recipientList.values()).map(({ address, share, name }: Recipient) => ({
        address,
        name,
        share,
      })),
    },
    sgClient, clientAddress)

    triggerFetch(true)
  }, [clientAddress, inputValue, recipientList, sgClient, triggerFetch])
  const onChange = useCallback((event: any, newValue: string | Allocator = '') => {
    if (typeof newValue === 'string' && newValue.split(ADD_NEW)[1]) return onAdd()
    const newVa = newValue as Allocator // (typeof newValue === 'string') ? newValue?.split(ADD_NEW)[1] :
    const alloMapByAddress = new Map(allocatorOptions.map((a) => ([a.address, a])))
    // console.log('choose', newVa, alloMapByAddress)

    // if (newVa && options.includes(newVa)) {
    //   setValue(newVa)
    //   // setShowAddButton(false)
    //   // setOptions([...options, newVa])
    // }

    if (alloMapByAddress.has(newVa.address)) {
      setValue(newVa)
      onChoose(alloMapByAddress.get(newVa.address) as Allocator)
    }
  }, [allocatorOptions, onAdd, onChoose, options])
  useEffect(() => {
    // console.log('useEffect', prevAllocatorOptions, allocatorOptions)

    if (!prevAllocatorOptions || allocatorOptions?.length !== prevAllocatorOptions?.length) {
      setIsAwaitingAdd(false)
      // setShowAddButton(false)
      setOptions(allocatorOptions)
      if (allocatorOptions.length && (!value || allocatorOptions?.length < prevAllocatorOptions?.length)) void onChange(undefined, allocatorOptions[allocatorOptions.length - 1])
    }
  }, [allocatorOptions, onChange, isAwaitingAdd, prevAllocatorOptions, value])

  const onInputChange = (event, newInputValue) => {
    setInputValue(newInputValue)
    if (newInputValue && !alloNames.includes(newInputValue)) {
      setShowAddButton(true)
    } else {
      setShowAddButton(false)
    }
    setInputValue(newInputValue)
  }
  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.defaultMuiPrevented = true // Prevent's default 'Enter' behavior.
      void onAdd()
    }
  }
  return (

    <Autocomplete
        {...passedProps}
        {...{ options, value, filterOptions, inputValue, onChange, onKeyDown, onInputChange }}
        getOptionLabel={(option: Allocator | string) => (option as Allocator).name ?? option}
        id="allocators-combo-box"
        sx={{ width: 300 }}
        isOptionEqualToValue={allocatorEquality}
        renderInput={(params) => {
          if (showAddButton || isAwaitingAdd) {
            params.InputProps = {
              ...params.InputProps,

              startAdornment: (
                <InputAdornment position="start">
                  <Zoom
                    in={true}
                    unmountOnExit
                  >
                    <Fab size="small" color="primary" aria-label="add" onClick={onAdd}>
                      <AddIcon />
                    </Fab>
                  </Zoom>
                  {isAwaitingAdd && (
                    <CircularProgress
                        size={44}
                        sx={{
                          color: 'white',
                          position: 'absolute',
                          left: 7,
                          zIndex: 1,
                        }}
                      />
                  )}
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

const filterOptions = (options, params) => {
  const filtered = filter(options, params)

  if (params.inputValue !== '') {
    filtered.push(`${ADD_NEW}${params.inputValue}`)
  }

  return filtered
}
