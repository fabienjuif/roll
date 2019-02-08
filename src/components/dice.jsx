import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import useRandom from '../hooks/useRandom'
import useBus from '../hooks/useBus'
import DicesContext from '../contexts/dices'
import './dice.css'

const Dice = ({ id, faces }) => {
  const [value, rand] = useRandom(1, faces)

  useBus('@@ui/ROLL>DICES', rand)

  const { setRoll, remove } = useContext(DicesContext)
  setRoll(id, value)

  return (
    <div
      className={`dice dice-${faces}`}
    >
      <button
        type="button"
        className="roll"
        onClick={rand}
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

      <button
        type="button"
        className="remove"
        onClick={remove(id)}
      >
        x
      </button>
    </div>
  )
}

Dice.propTypes = {
  id: PropTypes.number.isRequired,
  faces: PropTypes.number.isRequired,
}

export default Dice
