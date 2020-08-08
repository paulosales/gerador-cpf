import React, { useState } from 'react'
import { GeneratorBarContainer } from './styles'
import Display from '../Display'
import Button from '../Button'
import { generateCpf } from '../../service/cpf-service'

const GeneratorBar = () => {
  const [cpf, setCpf] = useState(generateCpf())

  return (
    <GeneratorBarContainer>
      <Display formated={true} cpf={cpf} label="CPF formatado" />
      <Display formated={false} cpf={cpf} label="CPF não formatado" />
      <Button
        onClick={() => {
          setCpf(generateCpf())
        }}
      >
        Gerar
      </Button>
    </GeneratorBarContainer>
  )
}

export default GeneratorBar
