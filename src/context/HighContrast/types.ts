export const CHANGE_HIGH_CONTRAST = 'CHANGE_HIGH_CONTRAST'
export const CLEAR_HIGH_CONTRAST = 'CLEAR_HIGH_CONTRAST'

interface ChangeHighContrast {
  type: typeof CHANGE_HIGH_CONTRAST
}

interface ClearHighContrast {
  type: typeof CLEAR_HIGH_CONTRAST
}

export type ActionTypes = ChangeHighContrast | ClearHighContrast
