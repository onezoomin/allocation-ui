import { TextField } from '@mui/material'
import { clamp } from 'lodash'
import { h } from 'preact'
import { Recipient } from '../../Model/Allocations'
import { useEditSaveFab } from '../../Utils/react-utils'
import { FlexRow } from '../Minis'
import Slider from '../Slider'
export default function AllocatorSet ({ allocatorName, recipientList, setRecipientList }: {allocatorName: string, recipientList: Recipient[], setRecipientList: any}) {
  const doSave = (mEv) => {
    console.log('save', mEv)
  }
  const [isEditing, EditSaveFab] = useEditSaveFab(false, doSave)

  let currentSum = 0
  for (const eachRecip of recipientList) {
    currentSum += eachRecip.share
  }

  // const onEditOrSave = (mEv) => {
  //   // console.log('edit', mEv)
  //   isEditing ? doSave(mEv) : setEditing(true)
  // }

  const onChangeCallback = (id: number, newVal: number) => {
    const recip = recipientList[id]
    recip.share = newVal

    if (recip.share > 999000) {
      recip.share = 1000000
      for (const eachRecip of recipientList) {
        if (eachRecip !== recip) eachRecip.share = 0
      }
      return setRecipientList([...recipientList]) // new array instance needed to trigger render
    }

    currentSum = 0
    for (const eachRecip of recipientList) {
      currentSum += eachRecip.share
    }
    // console.log('before', struct, newVal, currentSum)
    if (currentSum !== 10000000) {
      const adjust = 1000000 - currentSum
      const eachAdjustment: number = Math.ceil(adjust / (recipientList.length - 1))
      for (const eachRecip of recipientList) {
        const thisAdjustment: number = clamp(Math.round(eachRecip.share + eachAdjustment), 0, 1000000)
        if (eachRecip !== recip) { // && thisAdjustment >= 0
          eachRecip.share = thisAdjustment
        }
        currentSum = 0
        for (const eachRecip of recipientList) {
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
    for (const eachRecip of recipientList) {
      currentSum += eachRecip.share
    }
    console.log('after', recipientList, recip, newVal, currentSum)
    setRecipientList([...recipientList]) // new array instance needed to trigger render
  }

  return (
    <div class="container overflow-y:auto mx-auto mb-5">
      <FlexRow className="justify-between">
        <h1 className="text-5xl mb-4">Allocator: {allocatorName}</h1>
        <EditSaveFab />
      </FlexRow>
      {recipientList?.map((recip, id) => {
        // console.log(recip, struct)
        const key = `${recip.catKey}-${id}`
        return (
          <FlexRow key={key} >
            <span className="w-1/3 mr-1">
              {isEditing
                ? <TextField
                  variant="filled"
                  size='small'
                  defaultValue={recip.name}
                  onBlur={() => setRecipientList([...recipientList])}
                  onChange={(inputEv) => { recip.name = inputEv.target.value }} />
                : recip.name
              } :
            </span>
            <Slider {...{ id, recip, onChangeCallback }} />
          </FlexRow>
        )
      })}
      Sum: {currentSum}
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
