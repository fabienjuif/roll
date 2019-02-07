import React from 'react'
import PropTypes from 'prop-types'
import useRandom from './useRandom'
import useBus from './useBus'
import './dice.css'

const Dice = ({ faces }) => {
  const [value, rand] = useRandom(1, faces)

  useBus('@@ui/ROLL>DICES', rand)

  return (
    <button
      type="button"
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

Dice.propTypes = {
  faces: PropTypes.number.isRequired,
}

export default Dice
