import React from 'react'
import {StyledComponentPropsWithRef} from 'styled-components'
import Button from '../../atoms/Button'
import Paper from '../../atoms/Paper'
import Filter from './Filter.style'

interface FilterComponentInterface extends StyledComponentPropsWithRef<typeof Filter> {
  fluid?: boolean
  handleSubmit: () => void
}

const FilterComponent: React.FC<
  FilterComponentInterface
> = ({
  children,
  handleSubmit,
  ...rest
}) => (
  <Filter {...rest}>
    <Paper className='containerBox'>
      {children}
      <Button onSubmit={handleSubmit}>Buscar</Button>
    </Paper>
  </Filter>
)

export default FilterComponent
