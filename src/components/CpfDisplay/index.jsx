import React from 'react'
import {
  CpfDisplayContainer,
  CpfDisplayLabel,
  CpfDisplayContent,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import copy from 'copy-to-clipboard'
import PropTypes from 'prop-types'
import { formatCpf } from '../../service/cpf-service'
import { NotificationManager } from 'react-notifications'

const CpfDisplay = (props) => {
  const { formated, cpf, label } = props

  const cpfShowed = formated ? formatCpf(cpf) : cpf

  return (
    <CpfDisplayContainer
      onClick={() => {
        copy(cpfShowed)
        NotificationManager.info(`CPF ${cpfShowed} copiado.`, '', 3000)
      }}
    >
      <CpfDisplayLabel>{label}</CpfDisplayLabel>
      <CpfDisplayContent>
        {cpfShowed}
        <FontAwesomeIcon icon={faCopy} />
      </CpfDisplayContent>
    </CpfDisplayContainer>
  )
}

CpfDisplay.propTypes = {
  formated: PropTypes.bool,
  cpf: PropTypes.string,
  label: PropTypes.string,
}

export default CpfDisplay
