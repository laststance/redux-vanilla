import React, { Component } from 'react'
import { connect } from 'redux-vanilla'
import { Container, Secton } from './layout'
import { Header, Footer } from './component'
import { UpVoteCount, DownVoteCount, UpVoteBtn, DownVoteBtn } from './element'

class App extends Component {
  render() {
    // 3. receive raw Redux store & state/dispatch shorthand. enjoy!
    const { store, state, dispatch } = this.props

    return (
      <Container>
        <Header />
        <Secton>
          <UpVoteCount>{state.upVote}</UpVoteCount>
          <DownVoteCount>{store.getState().downVote}</DownVoteCount>
        </Secton>
        <Secton>
          <UpVoteBtn onClick={() => dispatch({ type: 'UP_VOTE' })}>
            + UpVote
          </UpVoteBtn>
          <DownVoteBtn onClick={() => store.dispatch({ type: 'DOWN_VOTE' })}>
            + DownVote
          </DownVoteBtn>
        </Secton>
        <Footer />
      </Container>
    )
  }
}

// 2. connect to React Component
export default connect(App)
