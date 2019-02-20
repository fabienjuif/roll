import React from 'react'
import PropTypes from 'prop-types'

const ActionButton = ({ onClick, label, children }) => (
  <button
    type="button"
    onClick={onClick}
    className="a-button -secondary"
    aria-label={label}
    title={label}
  >
    {children || label}
  </button>
)

ActionButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
}

ActionButton.defaultProps = {
  children: undefined,
}

export default ActionButton
