import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import useRandom from '../hooks/useRandom'
import useBus from '../hooks/useBus'
import DicesContext from '../contexts/dices'
import Dice from './dice'

const PlayableDice = ({
  id,
  faces,
}) => {
  const [value, rand] = useRandom(1, faces)

  useBus('@@ui/ROLL>DICES', rand)

  const { setRoll, remove } = useContext(DicesContext)
  setRoll(id, value)

  return (
    <div
      className="m-dice"
    >
      <div
        className="a-dice__info"
      >
        <div
          className="a-dice__faces"
        >
          {'D'}
          {faces}
        </div>

        <button
          type="button"
          className="a-dice__remove"
          onClick={remove(id)}
        >
          X
        </button>
      </div>

      <Dice
        onClick={rand}
        value={value}
        faces={faces}
      />
    </div>
  )
}

PlayableDice.propTypes = {
  id: PropTypes.number.isRequired,
  faces: PropTypes.number.isRequired,
}

export default PlayableDice
