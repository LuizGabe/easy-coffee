import styled, { css } from 'styled-components'
import { sizes, colors, fontSizes, fontWeights } from '../../../assets/styles/variables'
import { ButtonInterface } from '../Button/Button.style'

const HighContrastButton = styled.button<ButtonInterface>`
  border: none;
  padding: ${sizes.size14} ${sizes.size20};
  max-height: ${sizes.size48};
  background: ${colors.brown};
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

export default HighContrastButton
