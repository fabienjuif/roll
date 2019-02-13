import React, { useState, useContext, Fragment } from 'react'
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
          onClick={roll}
        >
          {messages.rollAllDices}
        </button>
      </div>

      <div className="stats total">
        {dices.length > 1 && (
          <Fragment>
            <span className="label">
              {messages.total}
            </span>
            <span>
              {dices.reduce((acc, dice) => acc + dice.roll, 0)}
            </span>
          </Fragment>
        )}
      </div>

      <div className="stats substract">
        {dices.length === 2 && (
          <Fragment>
            <span className="label">
              {messages.substract}
            </span>
            <span>
              {Math.abs(dices[0].roll - dices[1].roll) || 0}
            </span>
          </Fragment>
        )}
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
