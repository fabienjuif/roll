import React, { useState, useContext } from 'react'
import cn from 'classnames'
import AddDiceModal from './components/addDiceModal'
import ActionButton from './components/actionButton'
import PlayableDice from './components/playableDice'
import { dispatch } from './hooks/useBus'
import { useLocales } from 'use-locales'
import DicesContext from './contexts/dices'
import IconAdd from './icon/add'
import IconRemove from './icon/remove'
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

      <div className="m-bottom">
        <div className="m-actions">
          <div className="m-actions__secondaryActions">
            <ActionButton onClick={clear} label={messages.clear}><IconRemove /></ActionButton>
            <ActionButton onClick={() => setPrintModal(!printModal)} label={messages.add}><IconAdd /></ActionButton>
          </div>

          <button
            type="button"
            onClick={roll}
            className="a-actions__mainAction a-button -dot"
          >

            <svg width="100%" height="100%" overflow="visible" viewBox="none">
              <path d="M25 108 A1,1 0 0 1 191,108" fill="transparent" id="curve" />
              <text textLength="50%" className="-light">
                <textPath startOffset="5%" textLength="50%" alignmentBaseline="baseline" href="#curve">
                  {messages.roll}
                </textPath>
              </text>
            </svg>
          </button>
        </div>

        <div className="m-stats">
          <div className="m-stat m-stat__total">
            <div className="a-stat__label">
              {messages.total}
            </div>
            <div className="a-stat__value">
              {dices.length > 0 && dices.reduce((acc, dice) => acc + (dice.roll || 0), 0)}
            </div>
          </div>

          <div className={cn('m-stat', 'm-stat__substract', { '-inactive': dices.length !== 2 })}>
            <div className="a-stat__label">
              {messages.substract}
            </div>
            <div className="a-stat__value">
              {dices.length === 2 && (Math.abs(dices[0].roll - dices[1].roll) || 0)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
