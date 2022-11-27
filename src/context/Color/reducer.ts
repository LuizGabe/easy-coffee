/* eslint-disable indent */
import { ActionTypes } from './types'
// import initialValues from './initialValues'
import ColorInterface from '../../models/interfaces/Color'

export const reducer = (state: ColorInterface, action: ActionTypes): ColorInterface => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      if (state.colorSchema == 0) {
        state = {
          colorSchema: state.colorSchema,
          veryDarkBrown: '#240f04',
          brown: '#6b451e',
          transparentBrown: '#6b451ee6',
          lightBrown: '#977452',
          veryLightBrown: '#ce9f6e',
          darkGray: '#676363',
          gray: '#747778',
          lightGray: '#a7a7a7',
          white: '#FFF',
          black: '#000',
          veryLightGray: '#E7E7E7',
        }
      } else if (state.colorSchema == 1) {
        state = {
          colorSchema: state.colorSchema,
          veryDarkBrown: '#00000',
          brown: '#00000',
          transparentBrown: '#00000',
          lightBrown: '#00000',
          veryLightBrown: '#00000',
          darkGray: '#00000',
          gray: '#00000',
          lightGray: '#00000',
          white: '#00000',
          black: '#00000',
          veryLightGray: '#00000',
        }
      }
      return state
    default:
      return state
  }
}

export default reducer
