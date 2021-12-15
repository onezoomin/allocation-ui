import { Coin } from '@cosmjs/proto-signing'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import SaveAltIcon from '@mui/icons-material/SaveAlt'
import Badge from '@mui/material/Badge'
import Button from '@mui/material/Button'
import Fab from '@mui/material/Fab'
import TextField from '@mui/material/TextField'
import Tooltip from '@mui/material/Tooltip'
import { clamp } from 'lodash'
import { h } from 'preact'
import { StateUpdater, useContext, useEffect, useState } from 'preact/hooks'
import { CosmosContext } from '../../app'
import { callCustomMessage, callRemoveAllocator, callSetAllocatorRecipients } from '../../Data/AllocationEngine'
import { Allocator } from '../../Model/Allocations'
import { regenMsgConsts } from '../../Utils/cosmos-utils'
import { useEditSaveFab } from '../../Utils/react-utils'
import { FlexRow } from '../Minis'
import Slider from '../Slider'

export default function AllocatorSet ({ chosenAllocator, triggerFetch, setRecipientList }: {chosenAllocator: Allocator, setRecipientList: any, triggerFetch: StateUpdater<boolean>}) {
  const { name: allocatorName, recipients, address, admin: sender } = chosenAllocator
  const { sgClient, clientAddress } = useContext(CosmosContext)
  const [allocatorBalances, setAllocatorBalances] = useState<readonly Coin[]>([])
  useEffect(() => {
    const getAndSetBalances = async () => {
      setAllocatorBalances((await sgClient?.getAllBalances(address)) ?? [])
    }
    void getAndSetBalances()
  }, [address, sgClient])

  const doSave = async (mEv) => {
    const { address, name, admin: sender, recipients } = chosenAllocator // extract again here to use edited values
    console.log('save', mEv)
    await callSetAllocatorRecipients({
      address,
      name,
      sender,
      recipients,
    },
    sgClient,
    clientAddress)
  }
  const [isEditing, EditSaveFab] = useEditSaveFab(false, doSave)

  let currentSum = 0
  for (const eachRecip of recipients) {
    currentSum += eachRecip.share
  }

  const onChangeCallback = (id: number, newVal: number) => {
    const recip = recipients[id]
    recip.share = newVal

    if (recip.share > 999000) {
      recip.share = 1000000
      for (const eachRecip of recipients) {
        if (eachRecip !== recip) eachRecip.share = 0
      }
      return setRecipientList([...recipients]) // new array instance needed to trigger render
    }

    currentSum = 0
    for (const eachRecip of recipients) {
      currentSum += eachRecip.share
    }
    // console.log('before', struct, newVal, currentSum)
    if (currentSum !== 10000000) {
      const adjust = 1000000 - currentSum
      const eachAdjustment: number = Math.ceil(adjust / (recipients.length - 1))
      for (const eachRecip of recipients) {
        const thisAdjustment: number = clamp(Math.round(eachRecip.share + eachAdjustment), 0, 1000000)
        if (eachRecip !== recip) { // && thisAdjustment >= 0
          eachRecip.share = thisAdjustment
        }
        currentSum = 0
        for (const eachRecip of recipients) {
          currentSum += eachRecip.share
        }
        if (currentSum !== 1000000) {
          const adjust = 1000000 - currentSum
          recip.share = clamp(recip.share + adjust, 0, 1000000)
          // console.log('mid', newVal, adjust)
        }
      }
    }
    currentSum = 0
    for (const eachRecip of recipients) {
      currentSum += eachRecip.share
    }
    // console.log('after', recipients, recip, newVal, currentSum)
    setRecipientList([...recipients]) // new array instance needed to trigger render
  }

  return (
    <div class="container overflow-y:auto mx-auto mb-5">
      <FlexRow className="justify-between items-baseline">
        <h1 className="text-5xl mb-4">Allocator: </h1>
        {
        isEditing
          ? <TextField
            variant="filled"
            className="w-1/2"
            defaultValue={allocatorName}
            onBlur={() => setRecipientList([...recipients])}
            onChange={(inputEv) => { chosenAllocator.name = inputEv.target.value }} />
          : <h2>{allocatorName}</h2>}
        <EditSaveFab />
        {isEditing
        && <Fab
            size="small"
            color="secondary"
            onClick={async () => {
              await callRemoveAllocator(
                {
                  address,
                  sender,
                },
                sgClient,
                clientAddress)
              triggerFetch(true)
            }}>
          <DeleteForeverIcon />
        </Fab>}
      </FlexRow>
      {recipients?.map((recip, id) => {
        // console.log(recip, struct)
        const key = `${recip.catKey}-${id}`
        return (
          <FlexRow key={key} >
            <span className="w-1/3 mr-1 text-right">
              {isEditing
                ? <TextField
                  className="w-full"
                  variant="filled"
                  size='small'
                  defaultValue={recip.name}
                  onBlur={() => setRecipientList([...recipients])}
                  onChange={(inputEv) => { recip.name = inputEv.target.value }} />
                : <h2>{recip.name} :</h2>
              }
            </span>
            <Slider {...{ id, recip, onChangeCallback }} />
          </FlexRow>
        )
      })}
      Sum: {(currentSum / 10000).toFixed(1)} %
      <FlexRow className="mt-2 p-4 items-center justify-end">
        <Button
          onClick={async () => {
            const partialMsg = {
              sender: clientAddress,
              allocator: chosenAllocator.address,
            }
            await callCustomMessage(regenMsgConsts.CLAIM_ALLOCATIONS, partialMsg, sgClient, clientAddress)
          }} >
          <SaveAltIcon className="mr-2" />
          Claim
          {!allocatorBalances.length
            ? null
            : (
              <Tooltip
                className="ml-4 mr-2"
                placement="right"
                title={
                  allocatorBalances.map((eachBal) => `${eachBal.denom}: ${+eachBal.amount / 1000000}`)
                } arrow>
                <Badge color="secondary" badgeContent={allocatorBalances.length} showZero />
              </Tooltip>
              )}
        </Button>

      </FlexRow>

    </div>
  )
}
// export function CategoryAllocatorSet ({ struct, onRecipientChange }: {struct: AllocatorCategory[], setStruct: any, onRecipientChange: any}) {
//   // .sort((a, b) => a.value - b.value)

//   let currentSum = 0
//   for (const eachCat of struct) {
//     currentSum += eachCat.value
//   }

//   return (
//     <div class="container overflow-y:auto mx-auto mb-5">
//       {struct?.map((eachCategory, i) => {
//         console.log(eachCategory, struct)
//         // const innerKeys = Array.from(Object.keys(cat.endeavor))
//         return (
//           <Slider value={eachCategory.value} key={`cat-${i}`} id={eachCategory.label} onChangeCallback={ onRecipientChange } />
//         )
//       })}
//       Sum: {currentSum}
//     </div>
//   )
// }
