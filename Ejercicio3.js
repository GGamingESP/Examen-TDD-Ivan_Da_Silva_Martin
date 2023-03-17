export const distributegiftIDSM = (packsofGifts, reindeers) => {
  if (typeof packsofGifts !== 'string') throw new Error('debe ser un string')
  if (typeof reindeers !== 'string') throw new Error('debe ser un string')
  const pesoreno = reindeers.length / 2
  const pesoregalos = packsofGifts.length
  return Math.floor(pesoreno / pesoregalos)
}
