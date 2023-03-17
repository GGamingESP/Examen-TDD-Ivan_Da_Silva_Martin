import { expect } from 'chai'
import { describe, it } from 'vitest'

const fizzbuzz = (number) => {
  if (typeof number !== 'number') throw new Error('The provided parameter must be a number')
  if (Number.isNaN(number)) throw new Error('The provided parameter must be a number')
  if (number % 2 === 0) return 'Ivan'
  if (number % 3 === 0) return 'Da Silva'
  if (number % 11 === 0) return 'Martin'
  return number
}

describe('fizzbuzz', () => {
  it('debería ser una funcion', () => {
    expect(typeof fizzbuzz).toBe('function')
  })
  it('debería fallar si no es un númnero el parámetro proporcionado', () => {
    expect(() => fizzbuzz()).toThrow('The provided parameter must be a number')
  })
  it('debería fallar si no es un númnero el parámetro proporcionado', () => {
    expect(() => fizzbuzz()).toThrow('The provided parameter must be a number')
  })
  it('debería fallar si no es un númnero el parámetro proporcionado', () => {
    expect(() => fizzbuzz()).toThrow('The provided parameter must be a number')
  })
  it('debería fallar si no es un númnero el parámetro proporcionado', () => {
    expect(fizzbuzz(1)).toBe(1)
  })
  it('debería fallar si no es un númnero el parámetro proporcionado', () => {
    expect(fizzbuzz(2)).toBe('Ivan')
  })
  it('debería fallar si no es un númnero el parámetro proporcionado', () => {
    expect(fizzbuzz(3)).toBe('Da Silva')
  })
  it('debería fallar si no es un númnero el parámetro proporcionado', () => {
    expect(fizzbuzz(11)).toBe('Martin')
  })
})
