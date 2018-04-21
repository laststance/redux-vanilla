import React, { Component } from 'react'
import { connect } from 'redux-vanilla'
import styled from 'styled-components'
import { Header } from './Header'
import { Footer } from './Footer'

export const Container = styled.div`
  text-align: center;
`
export const Row = styled.div`
  heigh: 60%;
  width: 30%;
  margin: 0 auto;
  display: flex;
  flexdirection: row;
  justifycontent: center;
`
export const Button = styled.button`
  flex-grow: 1;
  font-size: 20px;
`
export const Text = styled.h1`
  flex-grow: 1;
  color: ${props => (props.red && 'red') || (props.green && 'green') || ''};
`

class App extends Component {
  render() {
    // 3. receive raw Redux store & state/dispatch shorthand. enjoy!
    const { store, state, dispatch } = this.props

    return (
      <Container>
        <Header />
        <Row>
          <Text red>{state.upVote}</Text>
          <Text green>{store.getState().downVote}</Text>
        </Row>
        <Row>
          <Button onClick={() => dispatch({ type: 'UP_VOTE' })}>
            + UpVote
          </Button>
          <Button onClick={() => store.dispatch({ type: 'DOWN_VOTE' })}>
            + DownVote
          </Button>
        </Row>
        <Footer />
      </Container>
    )
  }
}

// 2. connect to React Component
export default connect(App)
