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
      className={`m-dice -dice-${faces}`}
    >
      <button
        type="button"
        className="a-button a-dice__roll"
        onClick={rand}
      >
        <div
          className="a-dice__faces"
        >
          {faces}
        </div>

        <div
          className="a-dice__value"
        >
          {value}
        </div>
      </button>

      <button
        type="button"
        className="a-button a-dice__remove"
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
