import React from 'react'
import styled from 'styled-components'

export const Footer = () => {
  const Container = styled.p`
    font-size: large;
  `
  return (
    <Container>
      To get started, edit <code>src/App.js</code> and save to reload.
    </Container>
  )
}
