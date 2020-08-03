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
  const cpfNumbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  for (let i = 0; i < 8; i++) {
    cpfNumbers[i] = Math.round(Math.random() * 9)
    cpfNumbers[9] = cpfNumbers[9] + cpfNumbers[i] * (9 - ((i + 1) % 10))
    cpfNumbers[10] = cpfNumbers[10] + cpfNumbers[i] * (9 - (i % 10))
  }
  cpfNumbers[9] = cpfNumbers[9] + cpfNumbers[10] * 9
  cpfNumbers[9] = (cpfNumbers[9] % 11) % 10
  cpfNumbers[10] = (cpfNumbers[10] % 11) % 10

  if (fiscalZone === TAX_ZONES.ANY) {
    cpfNumbers[8] = Math.round(Math.random() * 9)
  } else {
    cpfNumbers[8] = fiscalZone
  }

  return cpfNumbers.join('')
}
