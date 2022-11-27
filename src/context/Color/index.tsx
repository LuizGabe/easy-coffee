import React, { useContext, createContext, useReducer } from 'react'
import ColorInterface from '../../models/interfaces/Color'
import initialValues from './initialValues'
import reducer from './reducer'
import { ActionTypes } from './types'

type Context = {
  state: ColorInterface
  dispatch: React.Dispatch<ActionTypes>
}

type ContextProps = {
  children?: React.ReactNode
}

export const ColorContext = createContext<Context>({} as Context)

export const ColorProvider = ({ children }: ContextProps) => {
  const [state, dispatch] = useReducer(reducer, initialValues)

  const value = {
    state,
    dispatch,
  }

  return <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
}

export const useColor = () => {
  const context = useContext(ColorContext)

  if (context === undefined) {
    throw new Error('useTheme must be used within a UseColorProvider')
  }

  return context
}
