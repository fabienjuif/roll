import React, { useState, useContext } from 'react'
import AddDiceModal from './components/addDiceModal'
import Dice from './components/dice'
import { dispatch } from './hooks/useBus'
import DicesContext from './contexts/dices'
import './app.css'

const App = () => {
  const [printModal, setPrintModal] = useState(false)

  const { dices, reset, add } = useContext(DicesContext)

  const addDice = (faces) => {
    add({ faces })

    setPrintModal(false)
  }

  return (
    <div className="app">
      {printModal && (
        <AddDiceModal
          addDice={addDice}
          onClose={() => setPrintModal(false)}
        />
      )}

      <button
        type="button"
        onClick={() => setPrintModal(!printModal)}
      >
        Add a dice
      </button>

      <button
        type="button"
        onClick={reset}
      >
        Reset
      </button>

      <button
        type="button"
        onClick={() => dispatch('@@ui/ROLL>DICES')}
      >
        Roll all dices
      </button>

      {dices.length > 1 && (
        <div>
          <span>Total</span>
          <span>
            {dices.reduce((acc, { roll = 0 }) => acc + roll, 0)}
          </span>
        </div>
      )}

      {dices.length === 2 && (
        <div>
          <span>Subtract</span>
          <span>
            {Math.abs(dices[0].roll - dices[1].roll) || 0}
          </span>
        </div>
      )}

      <ul className="dices">
        {dices.map(({ faces, id }) => (
          <li key={id}>
            <Dice
              key={id}
              id={id}
              faces={faces}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
