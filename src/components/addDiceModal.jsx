import React from 'react'
import './addDiceModal.css'

const faces = [
  4,
  6,
  10,
  20,
]

const AddDiceModal = ({ addDice }) => {
  return (
    <div className="modal">
      <div className="card">
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
