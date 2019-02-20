import React, { useState, useContext } from 'react'
import cn from 'classnames'
import AddDiceModal from './components/addDiceModal'
import Dice from './components/dice'
import ActionButton from './components/actionButton'
import { dispatch } from './hooks/useBus'
import useLocales from './hooks/useLocales'
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

          <svg width="100%" height="100%">
            <path d="M10,110 a1,1 0 0,1 200,0" fill="transparent" id="curve" />
            <text className="-light">
              <textPath textLength="70%" alignmentBaseline="hanging" href="#curve">
                {messages.roll}
              </textPath>
            </text>
          </svg>
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
