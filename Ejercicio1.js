export const fizzbuzz = (number) => {
  if (typeof number !== 'number') throw new Error('The provided parameter must be a number')
  if (Number.isNaN(number)) throw new Error('The provided parameter must be a number')
  if (number % 2 === 0) return 'Ivan'
  if (number % 3 === 0) return 'Da Silva'
  if (number % 11 === 0) return 'Martin'
  return number
}
