import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import './dice.css'

const Dice = ({
  faces,
  onClick,
  value,
}) => (
  <button
    type="button"
    className={cn(`-dice-${faces}`, 'a-dice__roll', 'a-button')}
    onClick={onClick}
  >
    <div
      className="a-dice__value"
    >
      {value}
    </div>
  </button>
)

Dice.propTypes = {
  faces: PropTypes.number.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onClick: PropTypes.func,
}

Dice.defaultProps = {
  onClick: undefined,
}

export default Dice
