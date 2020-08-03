import React, { useState } from 'react'
import { CpfGeneratorBarContainer } from './styles'
import CpfDisplay from '../CpfDisplay'
import Button from '../Button'
import { generateCpf } from '../../service/cpf-service'

const CpfGeneratorBar = () => {
  const [cpf, setCpf] = useState(generateCpf())

  return (
    <CpfGeneratorBarContainer>
      <CpfDisplay formated={true} cpf={cpf} label="CPF formatado" />
      <CpfDisplay formated={false} cpf={cpf} label="CPF não formatado" />
      <Button
        onClick={() => {
          setCpf(generateCpf())
        }}
      >
        Regerar
      </Button>
    </CpfGeneratorBarContainer>
  )
}

export default CpfGeneratorBar
