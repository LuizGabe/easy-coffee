import React from 'react'
import { StyledComponentPropsWithRef } from 'styled-components'
import HighContrastButton from './HighContrastButton.style'
import ButtonComponentInterface from '../Button/Button.component'
import { useHighContrast } from '../../../context/HighContrast'

interface HighContrastButtonComponentInterface
  extends StyledComponentPropsWithRef<typeof ButtonComponentInterface> {
  children?: string
}

const HighContrastButtonComponent = ({ ...rest }: HighContrastButtonComponentInterface) => {
  const { state, dispatch } = useHighContrast()

  const toggleContrast = () => {
    console.log(state)
    dispatch({
      type: 'CHANGE_HIGH_CONTRAST',
    })
  }

  return (
    <HighContrastButton {...rest} onClick={() => toggleContrast()}>
      <label>A</label>
    </HighContrastButton>
  )
}

export default HighContrastButtonComponent
