import { createStore } from 'redux'

const initialState = { count: 0 }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
    default:
      return state
  }
}

export const _createStore = () => createStore(reducer, initialState)
