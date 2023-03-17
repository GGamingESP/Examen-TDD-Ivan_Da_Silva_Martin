import { expect } from 'chai'
import { describe, it } from 'vitest'

const ivanreconfigure = (from, to) => {
  if (typeof from !== 'string') throw new Error('from is not a string')
  if (typeof to !== 'string') throw new Error('to is not a string')
  const isSameLength = from.length === to.length
  if (isSameLength) return false
  const hasSameUniqueLetters = new Set(from).size === new Set(to).size
  if (!hasSameUniqueLetters) return false
  return true
}

describe('canReconfigure', () => {
  it('should throw if first parameter is missing', () => {
    expect(() => ivanreconfigure().toThrow())
  })
  it('should throw if first parameter is not a string', () => {
    expect(() => ivanreconfigure(2).toThrow())
  })
  it('should throw if second parameter is not a string', () => {
    expect(() => ivanreconfigure('a').toThrow())
  })
  it('should return a boolean', () => {
    expect(ivanreconfigure('a', 'b')).toBeTypeOf('boolean')
  })
  it('should return false if string provided have different length', () => {
    expect(ivanreconfigure('abc', 'de')).toBe(false)
  })
  it('should return false if string provided have different number of unique letters', () => {
    expect(ivanreconfigure('abc', 'ddd')).toBe(false)
  })
})
