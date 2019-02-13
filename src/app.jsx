import React, { useState, useContext } from 'react'
import cn from 'classnames'
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
  const roll = () => {
    if (dices.length === 0) setPrintModal(true)
    else dispatch('@@ui/ROLL>DICES')
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

      <div className="actions">
        <div className="actions__secondary">
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
        </div>

        <button
          type="button"
          onClick={roll}
          className="bg_primary actions__primary"
        >
          {dices.length > 1 ? messages.rollAllDices : messages.roll}
        </button>
      </div>

      <div className={cn('stats', 'substract', { inactive: dices.length !== 2 })}>
        <div className="stats__label">
          {messages.substract}
        </div>
        <div className="stats__value">
          {dices.length === 2
            ? Math.abs(dices[0].roll - dices[1].roll) || 0
            : 'X'
          }
        </div>
      </div>

      <div className="bg_secondary stats total">
        <div className="stats__label">
          {messages.total}
        </div>
        <div className="stats__value">
          {dices.reduce((acc, dice) => acc + (dice.roll || 0), 0)}
        </div>
      </div>

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
