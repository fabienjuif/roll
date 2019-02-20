import React, { useState, useContext } from 'react'
import cn from 'classnames'
import AddDiceModal from './components/addDiceModal'
import PlayableDice from './components/playableDice'
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
    <div className="o-app">
      {printModal && (
        <AddDiceModal
          addDice={addDice}
          onClose={() => setPrintModal(false)}
        />
      )}

      <div className="m-actions">
        <div className="m-actions__secondaryActions">
          <button
            type="button"
            onClick={() => setPrintModal(!printModal)}
            className="a-button -outlined"
          >
            {messages.add}
          </button>

          <button
            type="button"
            onClick={clear}
            className="a-button -outlined"
          >
            {messages.clear}
          </button>
        </div>

        <button
          type="button"
          onClick={roll}
          className="a-actions__mainAction a-button -color"
        >
          {dices.length > 1 ? messages.rollAllDices : messages.roll}
        </button>
      </div>

      <div className={cn('m-stats', 'm-stats__substract', '-bg_primary', { '-inactive': dices.length !== 2 })}>
        <div className="a-stats__label">
          {messages.substract}
        </div>
        <div className="a-stats__value">
          {dices.length === 2
            ? Math.abs(dices[0].roll - dices[1].roll) || 0
            : 'X'
          }
        </div>
      </div>

      <div className="m-stats m-stats__total -bg_secondary">
        <div className="a-stats__label">
          {messages.total}
        </div>
        <div className="a-stats__value">
          {dices.reduce((acc, dice) => acc + (dice.roll || 0), 0)}
        </div>
      </div>

      <ul className="m-dices">
        {dices.map(({ faces, id }) => (
          <li key={id} className="m-dices__dice">
            <PlayableDice
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
