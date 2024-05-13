import { Color, isColor } from '@root/models/color'

export const resolveInvalidNumber = (
  value: string | null | undefined,
  fallback: number,
  inclusiveMin = 0,
  inclusiveMax: number
): number => {
  if (value === null || value === undefined) {
    return fallback
  }

  const number = Number(value)

  const isValidNumber =
    !isNaN(number) && number >= inclusiveMin && number < inclusiveMax

  return isValidNumber ? number : fallback
}

export const resolveInvalidColor = (
  value: string | null | undefined,
  fallback: Color
): Color => {
  if (value === null || value === undefined) {
    return fallback
  }

  return isColor(value) ? (value as Color) : fallback
}

export const resolveInvalidBoolean = (
  value: string | null | undefined,
  fallback: boolean
): boolean => {
  if (value === 'true') {
    return true
  }

  if (value === 'false') {
    return false
  }

  return fallback
}
