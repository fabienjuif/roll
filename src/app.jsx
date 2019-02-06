import React, { useState } from 'react'
import useLocalStorage from 'react-use/lib/useLocalStorage'
import Dice from './dice'
import { dispatch } from './useBus'
import './app.css'

const possibleDicesFaces = [
  4,
  6,
  10,
  20,
]

const getRandomFaces = () => possibleDicesFaces[Math.floor(Math.random() * possibleDicesFaces.length)]

const App = () => {
  const [dices, setDices] = useLocalStorage('dices', [])

  const addDice = () => setDices([...dices, { id: Date.now(), faces: getRandomFaces() }])
  const reset = () => setDices([])
  const roll = () => dispatch('@@ui/ROLL>DICES')

  return (
    <div className="app">
      <button
        onClick={addDice}
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
