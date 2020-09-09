import { isExternal, validURL, validEmail, validPsw, isString, isArray } from '@/utils/validate'

describe('Utils:validate', () => {
  it('isExternal', () => {
    expect(isExternal('http://www.baidu.com')).toBe(true)
    expect(isExternal('tel:110')).toBe(true)
    expect(isExternal('/login')).toBe(false)
  })

  it('validURL', () => {
    expect(validURL('http://www.baidu.com')).toBe(true)
    expect(validURL('www.baidu.com')).toBe(false)
  })

  it('validEmail', () => {
    expect(validEmail('zu1662@163.com')).toBe(true)
    expect(validEmail('123132141231')).toBe(false)
  })

  it('validPsw', () => {
    expect(validPsw('Qwer123//123')).toBe(true)
    expect(validPsw('qweqrq//12131')).toBe(true)
    expect(validPsw('12342314123')).toBe(false)
    expect(validPsw('qwqeqqw121312')).toBe(false)
  })

  it('isString', () => {
    expect(isString('123')).toBe(true)
    expect(isString(123)).toBe(false)
  })

  it('isArray', () => {
    expect(isArray([0,1,2,3])).toBe(true)
    expect(isArray('123')).toBe(false)
    expect(isArray({a: 1, b:2})).toBe(false)
  })
})