import React, { createContext } from 'react'
import useLocalStorage from 'react-use/lib/useLocalStorage'
import PropTypes from 'prop-types'

const Context = createContext()

const DicesProvider = ({ children }) => {
  const [dices, setDices] = useLocalStorage('dices', {})

  const setRoll = (id, roll) => {
    if (dices[id].roll === roll) return

    setDices({
      ...dices,
      [id]: {
        ...dices[id],
        roll,
      },
    })
  }

  const reset = () => {
    setDices({})
  }

  const add = ({ faces = 4 } = {}) => {
    const dice = {
      faces,
      id: Date.now(),
      roll: undefined,
    }

    setDices({
      ...dices,
      [dice.id]: dice,
    })

    return dice
  }

  const remove = id => (e) => {
    e.stopPropagation()

    if (id === undefined || id === null) return

    const newDices = { ...dices }
    delete newDices[id]
    setDices(newDices)
  }

  return (
    <Context.Provider
      value={{
        dices: Object.values(dices),
        setRoll,
        reset,
        add,
        remove,
      }}
    >
      {children}
    </Context.Provider>
  )
}

DicesProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Context
export { DicesProvider }
