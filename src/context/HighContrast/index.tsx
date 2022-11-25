import React, { useContext, createContext, useReducer } from 'react'
import { colors } from '../../assets/styles/variables'
import HighContrastInterface from '../../models/interfaces/HighContrastInterface'
import initialValues from './initialValues'
import reducer from './reducer'
import { ActionTypes } from './types'

type Context = {
  state: HighContrastInterface
  dispatch: React.Dispatch<ActionTypes>
}

type ContextProps = {
  children?: React.ReactNode
}

export const HighContrastContext = createContext<Context>({} as Context)

export const HighContrastProvider = ({ children }: ContextProps) => {
  const [state, dispatch] = useReducer(reducer, initialValues)

  if (state) {
    colors.black = '#000000'
    colors.veryDarkBrown = '#777'
    colors.darkGray = colors.brown = '777'
    colors.gray = colors.lightBrown = '#ccc'
    colors.lightGray = '#ccc'
    colors.transparentBrown = '#ccc'
    colors.veryLightBrown = '#FFFF'
    colors.veryLightGray = '#FFFF'
    colors.white = '#FFFF'
  }

  console.log('a')

  const value = {
    state,
    dispatch,
  }

  return <HighContrastContext.Provider value={value}>{children}</HighContrastContext.Provider>
}

export const useHighContrast = () => {
  const context = useContext(HighContrastContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a HighContrastProvider')
  }
  return context
}
