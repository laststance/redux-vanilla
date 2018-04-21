import styled from 'styled-components'

export const Button = styled.button`
  flex-grow: 1;
  font-size: 20px;
`

export const Text = styled.h1`
  flex-grow: 1;
  color: ${props => (props.red && 'red') || (props.green && 'green') || ''};
`
