import { expect } from 'chai'
import { describe, it } from 'vitest'

const distributegiftIDSM = (packsofGifts, reindeers) => {
  if (typeof packsofGifts !== 'string') throw new Error('debe ser un string')
  if (typeof reindeers !== 'string') throw new Error('debe ser un string')
  const pesoreno = reindeers.length / 2
  const pesoregalos = packsofGifts.length
  return Math.floor(pesoreno / pesoregalos)
}

describe('distributegiftIDSM', () => {
  it('debería ser una funcion', () => {
    expect(typeof distributegiftIDSM).toBe('function')
  })
  it('primer paramentro deberia ser un string', () => {
    expect(() => distributegiftIDSM(2).toThrow())
  })
  it('segundo paramentro deberia ser un string', () => {
    expect(() => distributegiftIDSM('a').toThrow())
  })
})
