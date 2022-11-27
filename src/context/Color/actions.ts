import { ActionTypes } from './types'

export function changeHighContrast(): ActionTypes {
  return {
    type: 'CHANGE_HIGH_CONTRAST',
  }
}

export function clearHighContrast(): ActionTypes {
  return {
    type: 'CLEAR_HIGH_CONTRAST',
  }
}
