import { clamp } from 'lodash'
import { h } from 'preact'
import { GenericObject } from '../../Model/Generics'
import Slider from '../Slider'

export default function AllocatorSet ({ struct, setStruct }: {struct: GenericObject, setStruct: any}) {
  // .sort((a, b) => a.value - b.value)

  const topKeys = Array.from(Object.keys(struct))
  let currentSum = 0
  for (const eachTopKey of topKeys) {
    currentSum += (struct[eachTopKey].value as number)
  }

  function onChangeCallback (key: string, newVal: number) {
    struct[key].value = newVal

    currentSum = 0
    for (const eachTopKey of topKeys) {
      currentSum += (struct[eachTopKey].value as number)
    }
    console.log('before', struct, key, newVal, currentSum)
    if (currentSum !== 100) {
      const adjust = 100 - currentSum
      const eachAdjustment: number = Math.ceil(adjust / (topKeys.length - 1))
      for (const eachTopKey of topKeys) {
        const thisAdjustment: number = clamp(Math.round((struct[eachTopKey].value as number) + eachAdjustment), 0, 100)
        if (eachTopKey !== key) { // && thisAdjustment >= 0
          struct[eachTopKey].value = thisAdjustment
        }
        currentSum = 0
        for (const eachTopKey of topKeys) {
          currentSum += (struct[eachTopKey].value as number)
        }
        if (currentSum !== 100) {
          const adjust = 100 - currentSum
          struct[key].value = clamp((struct[key].value as number) + adjust, 0, 100)
          console.log('mid', newVal, adjust)
        }
      }
    }
    currentSum = 0
    for (const eachTopKey of topKeys) {
      currentSum += (struct[eachTopKey].value as number)
    }
    console.log('after', struct, key, newVal, currentSum)
    setStruct({ ...struct })
  }

  return (
    <div class="container overflow-y:auto mx-auto mb-5">
      {topKeys?.map((eachCategory) => {
        const cat = struct[eachCategory]
        console.log(cat, struct)
        // const innerKeys = Array.from(Object.keys(cat.endeavor))
        return (
          <Slider value={cat.value} key={eachCategory} id={eachCategory} {...{ cat, onChangeCallback }} />
        )
      })}
      Sum: {currentSum}
    </div>
  )
}
