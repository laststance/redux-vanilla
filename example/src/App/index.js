import React, { Component } from 'react'
import { connect } from 'redux-vanilla'
import { Container, Row } from './layout'
import { Header, Footer } from './component'
import { Text, Button } from './element'

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
