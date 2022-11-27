export const CHANGE_COLOR = 'CHANGE_COLOR'
export const CLEAR_COLOR = 'CLEAR_COLOR'

interface ChangeColor {
  type: typeof CHANGE_COLOR
}

interface ClearColor {
  type: typeof CLEAR_COLOR
}

export type ActionTypes = ChangeColor | ClearColor
