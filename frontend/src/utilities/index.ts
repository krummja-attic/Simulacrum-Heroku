import dayjs from 'dayjs'

export const isDark = useDark()

export function formatDate(d: string | number | Date) {
  const date = dayjs(d)
  if (date.year() === dayjs().year())
    return date.format('MMM D')
  return date.format('MMM D, YYYY')
}

export function polarToCartesian(
  x: number, 
  y: number, 
  r: number, 
  theta: number
): number[] {
  const dx = r * Math.cos(theta)
  const dy = r * Math.sin(theta)
  return [x + dx, y + dy]
}

export function decToHex(dec: number): string {
  if (dec < 0)
    dec = 0xFFFFFFFF + dec + 1
  return dec.toString(16).toUpperCase()
}

export function colorFromRGBA(...colorDef: Array<number>): string {
  let color = decToHex(colorDef[0])
  color += decToHex(colorDef[1])
  color += decToHex(colorDef[2])
  color += decToHex(colorDef[3])
  return `#${color}`
}

export const R180 = Math.PI
export const R90 = Math.PI / 2
export const R15 = Math.PI / 12
