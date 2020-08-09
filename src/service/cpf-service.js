import debugFactory from 'debug'
const debug = debugFactory('cpf-service')

export const TAX_ZONES = {
  ZONE_1: 1, //DF, GO, MT, MS, and TO
  ZONE_2: 2, //AC, AP, AM, PA, RO, and RR
  ZONE_3: 3, //CE, MA, and PI
  ZONE_4: 4, //AL, PB, PE, and RN
  ZONE_5: 5, //BA, and SE
  ZONE_6: 6, //MG
  ZONE_7: 7, //ES and RJ
  ZONE_8: 8, //SP
  ZONE_9: 9, //PR and SC
  ZONE_10: 0, //RS
  ANY: 100,
}

export const formatCpf = (cpf) => {
  cpf = cpf.replace(/[^\d]/g, '')
  while (cpf.length < 10) {
    cpf = '0' + cpf
  }
  const cpfParts = cpf.match(/(\d{3}|\d{2})/g)
  return `${cpfParts[0]}.${cpfParts[1]}.${cpfParts[2]}-${cpfParts[3]}`
}

export const generateCpf = (fiscalZone = TAX_ZONES.ANY) => {
  debug(`Generating CPF for fiscal zone ${fiscalZone}`)
  const weights = [10, 9, 8, 7, 6, 5, 4, 3, 2]
  const cpfNumbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  let firstCheckSum = 0
  let secondCheckSum = 0

  for (let i = 0; i < 8; i++) {
    cpfNumbers[i] = Math.round(Math.random() * 9)
    firstCheckSum += cpfNumbers[i] * weights[i]
    secondCheckSum += cpfNumbers[i] * (weights[i] + 1)
  }
  if (fiscalZone === TAX_ZONES.ANY) {
    cpfNumbers[8] = Math.round(Math.random() * 9)
  } else {
    cpfNumbers[8] = fiscalZone
  }
  debug(`CPF without checksum ${cpfNumbers}.`)

  firstCheckSum += cpfNumbers[8] * weights[8]
  secondCheckSum += cpfNumbers[8] * (weights[8] + 1)
  debug(`sum of the products for first checksum ${firstCheckSum}.`)

  firstCheckSum = firstCheckSum % 11
  if (firstCheckSum === 0 || firstCheckSum === 1) {
    firstCheckSum = 0
  } else {
    firstCheckSum = 11 - firstCheckSum
  }
  cpfNumbers[9] = firstCheckSum
  debug(`CPF with first checksum ${cpfNumbers}.`)

  secondCheckSum += firstCheckSum * 2
  debug(`sum of the products for second checksum ${secondCheckSum}.`)

  secondCheckSum = secondCheckSum % 11
  if (secondCheckSum === 0 || secondCheckSum === 1) {
    secondCheckSum = 0
  } else {
    secondCheckSum = 11 - secondCheckSum
  }
  cpfNumbers[10] = secondCheckSum
  debug(`CPF with two checksums ${cpfNumbers}.`)

  return cpfNumbers.join('')
}
