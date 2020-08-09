import { generateCpf, formatCpf } from '../../service/cpf-service'

//381.861.378-82
describe('CpfService', () => {
  describe('#generate-cpf', () => {
    describe('when generate the CPF 381861378', () => {
      beforeEach(() => {
        jest
          .spyOn(global.Math, 'random')
          .mockReturnValueOnce(0.333)
          .mockReturnValueOnce(0.888)
          .mockReturnValueOnce(0.111)
          .mockReturnValueOnce(0.888)
          .mockReturnValueOnce(0.666)
          .mockReturnValueOnce(0.111)
          .mockReturnValueOnce(0.333)
          .mockReturnValueOnce(0.777)
          .mockReturnValueOnce(0.888)
      })

      afterEach(() => {
        jest.spyOn(global.Math, 'random').mockRestore()
      })

      it('the checksum should be 82', () => {
        const cpf = generateCpf()
        expect(cpf).toBe('38186137882')
      })
    })
  })

  describe('#format-cpf', () => {
    describe('when format the cpf 61333481004', () => {
      it('shoudl return 613.334.810-04', () => {
        const formatedCpf = formatCpf('61333481004')
        expect(formatedCpf).toBe('613.334.810-04')
      })
    })
  })
})
