import { createStore } from 'redux'

const INCREMENT = 'INCREMENT'

export const type = {
  INCREMENT
}

const initialState = { count: 0 }

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 }
    default:
      return state
  }
}

export const _createStore = () => createStore(reducer, initialState)
