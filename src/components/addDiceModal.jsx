import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import useOutsideClick from 'react-use/lib/useOutsideClick'
import Dice from './dice'
import './addDiceModal.css'

const faces = [
  4,
  6,
  10,
  20,
]

const AddDiceModal = ({ addDice, onClose }) => {
  const ref = useRef(null)
  useOutsideClick(ref, onClose)

  return (
    <div className="o-modal">
      <div
        className="m-card"
        ref={ref}
      >
        <button
          type="button"
          className="a-button a-close"
          onClick={onClose}
        >
          X
        </button>

        <ul className="a-list">
          {faces.map(number => (
            <li key={number} className="a-list__item">
              <Dice
                value={`D${number}`}
                faces={number}
                onClick={() => addDice(number)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

AddDiceModal.propTypes = {
  addDice: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default AddDiceModal
