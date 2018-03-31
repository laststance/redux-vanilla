import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from './connect'
import { Provider } from './Provider'
import TestUtils from 'react-dom/test-utils'
import { _createStore, type } from './testutils'
require('../jestSetup')

describe('connect()', () => {
  it('defined as a function', () => {
    expect(typeof connect).toBe('function')
  })

  it('throw error when without Provider Parent Component', () => {
    class Child extends Component {
      render() {
        return <div />
      }
    }
    const ConnectedChild = connect(Child)

    expect(() => {
      TestUtils.renderIntoDocument(<ConnectedChild />)
    }).toThrow(
      'Redux Vanilla: connect() was used without <Provider />. you have to define <Provider /> Parent Component. higher than connect() Child Component'
    )
  })

  it('can get store from context', () => {
    const store = _createStore()
    class Child extends Component {
      render() {
        return <div />
      }
    }
    const ConnectedChild = connect(Child)
    const instance = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedChild />
      </Provider>
    )
    const higherOrderComponent = TestUtils.findRenderedComponentWithType(
      instance,
      ConnectedChild
    )
    expect(higherOrderComponent.context.store).toBe(store)
  })

  it('pass store as props to connected Component', () => {
    const store = _createStore()
    class Child extends Component {
      render() {
        expect(this.props.store).toBe(store)
        return <div />
      }
    }

    const ConnectedChild = connect(Child)
    TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedChild />
      </Provider>
    )
  })

  it('pass state as props to connected Component', () => {
    const store = _createStore()
    class Child extends Component {
      render() {
        expect(this.props.state).toBe(store.getState())
        return <div />
      }
    }

    const ConnectedChild = connect(Child)
    TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedChild />
      </Provider>
    )
  })

  it('pass dispatch as props to connected Component', () => {
    const store = _createStore()
    class Child extends Component {
      render() {
        expect(this.props.dispatch).toBe(store.dispatch)
        return <div />
      }
    }

    const ConnectedChild = connect(Child)
    TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedChild />
      </Provider>
    )
  })

  it('work when deep child node', () => {
    const store = _createStore()
    const One = () => <div />
    const Two = () => <div />
    const Three = props => {
      expect(props.store).toBe(store)
      return <div />
    }
    TestUtils.renderIntoDocument(
      <Provider store={store}>
        <One>
          <Two>
            <Three />
          </Two>
        </One>
      </Provider>
    )
  })

  it('work when passing SFC', () => {
    const store = _createStore()
    const Child = props => <h1>{props.store.getState().count} count</h1>

    const ConnectedChild = connect(Child)
    expect(() => {
      TestUtils.renderIntoDocument(
        <Provider store={store}>
          <ConnectedChild />
        </Provider>
      )
    }).not.toThrow()

    const container = document.createElement('div')
    ReactDOM.render(
      <Provider store={store}>
        <ConnectedChild />
      </Provider>,
      container
    )
    expect(container.firstChild.innerHTML).toBe('0 count')
    store.dispatch({ type: type.INCREMENT })
    expect(container.firstChild.innerHTML).toBe('1 count')
    store.dispatch({ type: type.INCREMENT })
    expect(container.firstChild.innerHTML).toBe('2 count')
  })
})
