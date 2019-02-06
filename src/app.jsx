import React, { useState } from 'react'
import useLocalStorage from 'react-use/lib/useLocalStorage'
import AddDiceModal from './components/addDiceModal'
import Dice from './components/dice'
import { dispatch } from './hooks/useBus'
import './app.css'

const App = () => {
  const [printModal, setPrintModal] = useState(false)

  const [dices, setDices] = useLocalStorage('dices', [])
  const reset = () => setDices([])
  const roll = () => dispatch('@@ui/ROLL>DICES')

  const addDice = (faces) => {
    setDices([...dices, { id: Date.now(), faces }])
    setPrintModal(false)
  }

  return (
    <div className="app">
      {printModal && <AddDiceModal addDice={addDice} />}

      <button
        onClick={() => setPrintModal(!printModal)}
      >
        Add a dice
      </button>

      <button
        onClick={reset}
      >
        Reset
      </button>

      <button
        onClick={roll}
      >
        Roll all dices
      </button>

      <ul className="dices">
        {dices.map(({ faces, id }) => (
          <li key={id}>
            <Dice
              key={id}
              faces={faces}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
