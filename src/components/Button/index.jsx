import React from 'react'
import PropTypes from 'prop-types'
import hotKeys, { hotkey_display } from 'react-keyboard-shortcuts'
import ButtonContainer from './styles'

class Button extends React.PureComponent {
  render() {
    this.hot_keys = {}

    if (this.props.shortCut) {
      this.hot_keys[this.props.shortCut] = {
        priority: 1,
        handler: () => {
          this.props.onClick()
        },
      }
    }

    return (
      <ButtonContainer
        onClick={this.props.onClick}
        title={`Tecla de atalho: ${hotkey_display(this.props.shortCut)}`}
      >
        {this.props.children}
      </ButtonContainer>
    )
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
  shortCut: PropTypes.string,
  children: PropTypes.element,
}

export default hotKeys(Button)
