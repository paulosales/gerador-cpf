import React from 'react'
import { DisplayContainer, DisplayLabel, DisplayContent } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import copy from 'copy-to-clipboard'
import hotKeys, { hotkey_display } from 'react-keyboard-shortcuts'
import PropTypes from 'prop-types'
import { formatCpf } from '../../service/cpf-service'
import { NotificationManager } from 'react-notifications'

class Display extends React.PureComponent {
  constructor() {
    super()
    this.doCopy = this.doCopy.bind(this)
  }

  doCopy() {
    const { formated, cpf } = this.props
    const cpfShowed = formated ? formatCpf(cpf) : cpf
    copy(cpfShowed)
    NotificationManager.info(`CPF ${cpfShowed} copiado.`, '', 3000)
  }

  componentDidMount() {
    this.hot_keys = {}
    if (this.props.shortCut) {
      this.hot_keys[this.props.shortCut] = {
        priority: 1,
        handler: this.doCopy,
      }
    }
  }

  render() {
    const { formated, cpf, label } = this.props

    const cpfShowed = formated ? formatCpf(cpf) : cpf

    return (
      <DisplayContainer
        title={`Copie com ${hotkey_display(this.props.shortCut)}`}
        onClick={this.doCopy}
      >
        <DisplayLabel>{label}</DisplayLabel>
        <DisplayContent>
          {cpfShowed}
          <FontAwesomeIcon icon={faCopy} />
        </DisplayContent>
      </DisplayContainer>
    )
  }
}

Display.propTypes = {
  formated: PropTypes.bool,
  cpf: PropTypes.string.isRequired,
  shortCut: PropTypes.string,
  label: PropTypes.string.isRequired,
}

export default hotKeys(Display)
