import React from 'react'
// import useSpring from 'react-use/lib/useSpring'
import useRandom from '../hooks/useRandom'
import useBus from '../hooks/useBus'
import './dice.css'

const Dice = ({ faces }) => {
  const [value, rand] = useRandom(1, faces)

  useBus('@@ui/ROLL>DICES', rand)

  return (
    <button
      onClick={rand}
      className={`dice dice-${faces}`}
    >
      <div
        className="faces"
      >
        {faces}
      </div>

      <div
        className="value"
      >
        {value}
      </div>
    </button>
  )
}

export default Dice
