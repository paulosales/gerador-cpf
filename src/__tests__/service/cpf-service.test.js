import { generateCpf, formatCpf } from '../../service/cpf-service'

describe('CpfService', () => {
  describe('#generate-cpf', () => {
    describe('when generate a new CPF', () => {
      beforeEach(() => {
        jest
          .spyOn(global.Math, 'random')
          .mockReturnValueOnce(0.444)
          .mockReturnValueOnce(1.0)
          .mockReturnValueOnce(0.666)
          .mockReturnValueOnce(0.222)
          .mockReturnValueOnce(0.555)
          .mockReturnValueOnce(0.111)
          .mockReturnValueOnce(1.0)
          .mockReturnValueOnce(0.555)
          .mockReturnValueOnce(0.0)
      })

      afterEach(() => {
        jest.spyOn(global.Math, 'random').mockRestore()
      })

      it('should generate a correct checksum', () => {
        const cpf = generateCpf()
        expect(cpf).toBe('49625195068')
      })
    })
  })

  describe('#format-cpf', () => {
    describe('when format the cpf 49625195068', () => {
      it('shoudl return 496.251.950-68', () => {
        const formatedCpf = formatCpf('49625195068')
        expect(formatedCpf).toBe('496.251.950-68')
      })
    })
  })
})
