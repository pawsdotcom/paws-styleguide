import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Button.css'

export default class Button extends Component {
  render () {
    return this.renderButton()
  }

  renderButton () {
    const {
      onClick,
      children,
      disabled,
      type,
      color
    } = this.props

    return (
      <button type={type} styleName={`button ${color}`} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    )
  }
}

class LinkButton extends Button {
  render () {
    const {
      link
    } = this.props

    return (
      <a href={link} styleName={classes.link}>
        {this.renderButton()}
      </a>
    )
  }
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  color: PropTypes.oneOf([
    'setter',
    'archangel',
    'corgi'
  ])
}

Button.defaultProps = {
  onClick: (e) => null,
  disabled: false,
  type: 'button',
  color: 'setter'
}

export { Button, LinkButton }