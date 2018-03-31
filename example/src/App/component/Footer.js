import React from 'react'
import styled from 'styled-components'

const Container = styled.p`
  font-size: large;
`

export const Footer = () => {
  return (
    <Container>
      To get started, edit <code>src/App.js</code> and save to reload.
    </Container>
  )
}
