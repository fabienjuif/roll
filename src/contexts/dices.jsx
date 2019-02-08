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

  const clear = () => {
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

  return (
    <Context.Provider
      value={{
        dices: Object.values(dices),
        setRoll,
        clear,
        add,
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
