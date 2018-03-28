import React, { Component } from 'react'
import TestUtils from 'react-dom/test-utils'
import { Provider, connect } from './index'
import { _createStore, type } from './testutils'
require('../jestSetup')

describe('Integration Test', () => {
  it('success render ConnectComponent without error', () => {
    const store = _createStore()
    class Child extends Component<any> {
      render() {
        return <div />
      }
    }
    const ConnectedChild = connect(Child)
    const App = (
      <Provider store={store}>
        <ConnectedChild />
      </Provider>
    )

    expect(() => {
      TestUtils.renderIntoDocument(App)
    }).not.toThrow()
  })

  it('should connected ChildComponent recive Redux store from props', () => {
    const store = _createStore()
    class Child extends Component<any> {
      render() {
        return <div />
      }
    }
    const ConnectedChild = connect(Child)
    const App = (
      <Provider store={store}>
        <ConnectedChild />
      </Provider>
    )

    const instance = TestUtils.renderIntoDocument(App)
    const child = TestUtils.findRenderedComponentWithType(instance, Child)

    expect(child.props.store).toBe(store)
  })

  it('should ChildComponent detect action dispatch through props', () => {
    const store = _createStore()
    class Child extends Component<any> {
      render() {
        return <div />
      }
    }
    const ConnectedChild = connect(Child)
    const App = (
      <Provider store={store}>
        <ConnectedChild />
      </Provider>
    )

    const instance = TestUtils.renderIntoDocument(App)
    const child = TestUtils.findRenderedComponentWithType(instance, Child)

    expect(child.props.store.getState().count).toBe(0)
    store.dispatch({ type: type.INCREMENT })

    expect(child.props.store.getState().count).toBe(1)
    store.dispatch({ type: type.INCREMENT })

    expect(child.props.store.getState().count).toBe(2)
  })
})
