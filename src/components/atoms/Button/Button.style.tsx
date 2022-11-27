import styled, { css } from 'styled-components'
import { sizes, colors, fontSizes, fontWeights } from '../../../assets/styles/variables'
import { useColor } from '../../../context/Color'

export interface ButtonInterface {
  circle?: boolean
}
const toggleColor = () => {
  const { state } = useColor()
  return state
}

const Button = styled.button<ButtonInterface>`
  border: none;
  padding: ${sizes.size14} ${sizes.size20};
  min-height: ${sizes.size48};
  background: ${toggleColor().colorSchema.};
  border-radius: ${sizes.size15};

  ${({ circle }: ButtonInterface) =>
    circle &&
    css`
      min-height: auto;
      padding: ${sizes.size10};
      border-radius: 50%;
    `};

  label {
    color: ${colors.white};
    text-transform: uppercase;
    font-weight: ${fontWeights.size700};
    font-size: ${fontSizes.fontSize18};
  }
`

export default Button
