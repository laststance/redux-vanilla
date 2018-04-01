import React from 'react'
import styled from 'styled-components'
import logo from './logo.svg'

export const Header = () => {
  const Container = styled.div`
    background-color: #222;
    height: 150px;
    padding: 20px;
    color: white;
  `
  const Img = styled.img`
    animation: App-logo-spin infinite 20s linear;
    height: 80px;
    @keyframes App-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `
  const H1 = styled.h1`
    fontsize: 1.5em;
  `

  return (
    <Container>
      <Img src={logo} alt="logo" />
      <H1>Welcome to React</H1>
    </Container>
  )
}

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
