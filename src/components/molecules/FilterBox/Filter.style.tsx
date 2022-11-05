import styled from 'styled-components'

import { colors } from '../../../assets/variables'

const { lightBrown } = colors


const Filter = styled.div`
  background-color: ${lightBrown};
  color: white;
  border-radius: 0.9rem;
  width: 15.5rem;
  padding: 0.4rem;
  margin-bottom: 1rem;
  display: flex;


  button {
    margin-left: 0.5rem;
  }
`

export default Filter
