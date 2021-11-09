import { h } from 'preact'
import { useState } from 'preact/hooks'
import Slider from '../Slider'

const allocatorStructure = {
  Dev: {
    value: 25,
    endeavor: {
      'End 1': 50,
      'End 2': 50,
    },
  },
  Seeds: {
    value: 25,
    endeavor: {
      'Seeds 1': 25,
      'Seeds 2': 75,
    },
  },
  Flowers: {
    value: 25,
    endeavor: {
      'Seeds 1': 25,
      'Seeds 2': 75,
    },
  },
  Fruit: {
    value: 25,
    endeavor: {
      'Seeds 1': 25,
      'Seeds 2': 75,
    },
  },
}
export default function AllocatorSet () {
  const [struct, setStruct] = useState(allocatorStructure)
  // .sort((a, b) => a.value - b.value)

  const topKeys = Array.from(Object.keys(struct))
  let currentSum = 0
  for (const eachTopKey of topKeys) {
    currentSum += (struct[eachTopKey].value as number)
  }

  function onChangeCallback (key: string, newVal: number) {
    struct[key].value = newVal

    let currentSum = 0
    for (const eachTopKey of topKeys) {
      currentSum += (struct[eachTopKey].value as number)
    }

    if (currentSum !== 100) {
      const adjust = 100 - currentSum
      for (const eachTopKey of topKeys) {
        const eachAdjustment: number = (adjust / (topKeys.length - 1))
        const thisAdjustment: number = Math.max(0, Math.floor((struct[eachTopKey].value as number) + eachAdjustment))
        if (eachTopKey !== key) { // && thisAdjustment >= 0
          struct[eachTopKey].value = thisAdjustment
        }
      }
    }
    currentSum = 0
    for (const eachTopKey of topKeys) {
      currentSum += (struct[eachTopKey].value as number)
    }
    if (currentSum !== 100) {
      const adjust = 100 - currentSum
      struct[topKeys[0]].value = Math.max(0, (struct[topKeys[0]].value as number) + adjust)
    }
    console.log(struct, key, newVal, currentSum)
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
