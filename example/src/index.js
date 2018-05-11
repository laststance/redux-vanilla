import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { createStore } from 'redux'
import { Provider } from 'redux-vanilla'

const initialState = {
  upVote: 0,
  downVote: 0
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'UP_VOTE':
      return { ...state, upVote: state.upVote + 1 }
    case 'DOWN_VOTE':
      return { ...state, downVote: state.downVote + 1 }
    default:
      return state
  }
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ !== undefined
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
)

// 1. SetUp Provider with Redux store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
