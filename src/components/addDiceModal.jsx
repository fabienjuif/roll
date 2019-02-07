import React, { useRef } from 'react'
import useOutsideClick from 'react-use/lib/useOutsideClick'
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
    <div className="modal">
      <div
        className="card"
        ref={ref}
      >
        <button
          className="btn-close"
          onClick={onClose}
        >
          X
        </button>

        <ul className="list">
          {faces.map(number => (
            <li key={number}>
              <button
                onClick={() => addDice(number)}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AddDiceModal
