import { ActionTypes } from './types'
import initialValues from './initialValues'
import HighContrastInterface from '../../models/interfaces/HighContrastInterface'

export const reducer = (
  state: HighContrastInterface,
  action: ActionTypes,
): HighContrastInterface => {
  switch (action.type) {
    case 'CHANGE_HIGH_CONTRAST':
      return {
        highContrast: !state,
      }

    case 'CLEAR_HIGH_CONTRAST':
      return initialValues
  }
}
export default reducer
