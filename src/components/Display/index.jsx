import React from 'react'
import { DisplayContainer, DisplayLabel, DisplayContent } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import copy from 'copy-to-clipboard'
import PropTypes from 'prop-types'
import { formatCpf } from '../../service/cpf-service'
import { NotificationManager } from 'react-notifications'

const Display = (props) => {
  const { formated, cpf, label } = props

  const cpfShowed = formated ? formatCpf(cpf) : cpf

  return (
    <DisplayContainer
      onClick={() => {
        copy(cpfShowed)
        NotificationManager.info(`CPF ${cpfShowed} copiado.`, '', 3000)
      }}
    >
      <DisplayLabel>{label}</DisplayLabel>
      <DisplayContent>
        {cpfShowed}
        <FontAwesomeIcon icon={faCopy} />
      </DisplayContent>
    </DisplayContainer>
  )
}

Display.propTypes = {
  formated: PropTypes.bool,
  cpf: PropTypes.string,
  label: PropTypes.string,
}

export default Display
