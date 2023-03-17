export const ivanreconfigure = (from, to) => {
  if (typeof from !== 'string') throw new Error('from is not a string')
  if (typeof to !== 'string') throw new Error('to is not a string')
  const isSameLength = from.length === to.length
  if (isSameLength) return false
  const hasSameUniqueLetters = new Set(from).size === new Set(to).size
  if (!hasSameUniqueLetters) return false
  return true
}
