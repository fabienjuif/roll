import React, { useState, useContext } from 'react'
import AddDiceModal from './components/addDiceModal'
import Dice from './components/dice'
import { dispatch } from './hooks/useBus'
import useLocales from './hooks/useLocales'
import DicesContext from './contexts/dices'
import './app.css'

const App = () => {
  // modal
  const [printModal, setPrintModal] = useState(false)

  // dices
  const { dices, clear, add } = useContext(DicesContext)
  const addDice = (faces) => {
    add({ faces })

    setPrintModal(false)
  }

  // locales
  const messages = useLocales()

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
        {messages.add}
      </button>

      <button
        type="button"
        onClick={clear}
      >
        {messages.clear}
      </button>

      <button
        type="button"
        onClick={() => dispatch('@@ui/ROLL>DICES')}
      >
        {messages.rollAllDices}
      </button>

      {dices.length > 0 && (
        <div>
          <span>
            {messages.total}
          </span>
          <span>
            {dices.reduce((acc, { roll = 0 }) => acc + roll, 0)}
          </span>
        </div>
      )}

      {dices.length === 2 && (
        <div>
          <span>
            {messages.substract}
          </span>
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
