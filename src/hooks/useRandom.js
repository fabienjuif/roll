import { useState } from 'react'

const useRandom = (min = 0, max = Number.MAX_SAFE_INTEGER) => {
  const [value, setValue] = useState(undefined)

  const rand = () => {
    setValue(Math.floor(Math.random() * max) + min)
  }

  if (value === undefined) rand()

  return [value || 0, rand]
}

export default useRandom
