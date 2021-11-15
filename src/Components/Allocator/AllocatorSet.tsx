import { clamp } from 'lodash'
import { h } from 'preact'
import { Recipient } from '../../Model/Allocations'
import Slider from '../Slider'

export default function AllocatorSet ({ struct, setStruct }: {struct: Recipient[], setStruct: any}) {
  // .sort((a, b) => a.value - b.value)

  let currentSum = 0
  for (const eachRecip of struct) {
    currentSum += eachRecip.value
  }

  function onChangeCallback (id: number, newVal: number) {
    const recip = struct[id]
    recip.value = newVal

    currentSum = 0
    for (const eachRecip of struct) {
      currentSum += eachRecip.value
    }
    console.log('before', struct, newVal, currentSum)
    if (currentSum !== 100) {
      const adjust = 100 - currentSum
      const eachAdjustment: number = Math.ceil(adjust / (struct.length - 1))
      for (const eachRecip of struct) {
        const thisAdjustment: number = clamp(Math.round(eachRecip.value + eachAdjustment), 0, 100)
        if (eachRecip !== recip) { // && thisAdjustment >= 0
          eachRecip.value = thisAdjustment
        }
        currentSum = 0
        for (const eachRecip of struct) {
          currentSum += eachRecip.value
        }
        if (currentSum !== 100) {
          const adjust = 100 - currentSum
          recip.value = clamp(recip.value + adjust, 0, 100)
          console.log('mid', newVal, adjust)
        }
      }
    }
    currentSum = 0
    for (const eachRecip of struct) {
      currentSum += eachRecip.value
    }
    console.log('after', struct, recip, newVal, currentSum)
    setStruct([...struct]) // new array instance needed to trigger render
  }

  return (
    <div class="container overflow-y:auto mx-auto mb-5">
      {struct?.map((recip, id) => {
        console.log(recip, struct)
        const key = `${recip.catKey}-${id}`
        // const innerKeys = Array.from(Object.keys(cat.endeavor))
        return (
          <Slider {...{ key, id, recip, onChangeCallback }} />
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
