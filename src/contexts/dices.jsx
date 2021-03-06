import React, { createContext, useState } from 'react'
import useLocalStorage from 'react-use/lib/useLocalStorage'
import PropTypes from 'prop-types'

const Context = createContext()

const DicesProvider = ({ children }) => {
  const [init, setInit] = useState(false)
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

  const add = ({ faces = 6 } = {}) => {
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

  const remove = id => () => {
    if (id === undefined || id === null) return

    const newDices = { ...dices }
    delete newDices[id]
    setDices(newDices)
  }

  if (!init) {
    setInit(true)

    if (
      !dices
      || Object.values(dices).length === 0
    ) add({ faces: 6 })
  }

  return (
    <Context.Provider
      value={{
        dices: Object.values(dices),
        setRoll,
        clear,
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
