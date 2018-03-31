import React, { Component } from 'react'
import { connect } from 'redux-vanilla'
import logo from './logo.svg'
import './App.css'

const css = {
  flexContainer: {
    height: '60px',
    width: '30%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  flexItem: {
    upVoteCount: { color: 'green', flexGrow: 1 },
    downVoteCount: { color: 'red', flexGrow: 1 },
    upVoteBtn: { flexGrow: 1, fontSize: '20px' },
    downVoteBtn: { flexGrow: 1, fontSize: '20px' }
  }
}

class App extends Component {
  render() {
    const { store } = this.props
    const state = store.getState()

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <section style={css.flexContainer}>
          <h1 style={css.flexItem.upVoteCount}>{state.upVote}</h1>
          <h1 style={css.flexItem.downVoteCount}>{state.downVote}</h1>
        </section>
        <section style={css.flexContainer}>
          <button
            onClick={() => store.dispatch({ type: 'UP_VOTE' })}
            style={css.flexItem.upVoteBtn}
          >
            + UpVote
          </button>
          <button
            onClick={() => store.dispatch({ type: 'DOWN_VOTE' })}
            style={css.flexItem.downVoteBtn}
          >
            + DownVote
          </button>
        </section>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default connect(App)