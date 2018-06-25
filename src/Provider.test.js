import React from 'react'
import { Provider } from './Provider'
import TestUtils from 'react-dom/test-utils'
import { _createStore } from './testutils'
require('../jestSetup')

describe('Provider', () => {
  it('defined as a ES6 class', () => {
    expect(Provider.name).toBe('Provider')
    expect(Provider.__proto__.name).toBe('Component')
  })

  it('throw error when Provider does not recive store as props', () => {
    expect(() => {
      TestUtils.renderIntoDocument(
        <Provider>
          <div />
        </Provider>
      )
    }).toThrow(
      'Redux Vanilla: <Provider /> is not given `store` props. you have to pass Redux store as a props. i.e. <Provider store={store}><App /></Provider>'
    )

    expect(() => {
      TestUtils.renderIntoDocument(
        <Provider store={undefined}>
          <div />
        </Provider>
      )
    }).toThrow(
      'Redux Vanilla: <Provider /> is not given `store` props. you have to pass Redux store as a props. i.e. <Provider store={store}><App /></Provider>'
    )

    expect(() => {
      TestUtils.renderIntoDocument(
        <Provider store={f => f}>
          <div />
        </Provider>
      )
    }).toThrow(
      'Redux Vanilla: <Provider /> is not given `store` props. you have to pass Redux store as a props. i.e. <Provider store={store}><App /></Provider>'
    )

    expect(() => {
      TestUtils.renderIntoDocument(
        <Provider store={{ foo: 'foo' }}>
          <div />
        </Provider>
      )
    }).toThrow(
      'Redux Vanilla: <Provider /> is not given `store` props. you have to pass Redux store as a props. i.e. <Provider store={store}><App /></Provider>'
    )

    expect(() => {
      TestUtils.renderIntoDocument(
        <Provider
          store={{
            dispatch: f => f,
            subscribe: f => f,
            getState: f => f,
            replaceReducer: f => f,
            someone: f => f // do not exhaustive, prevent false positive
          }}
        >
          <div />
        </Provider>
      )
    }).not.toThrow(
      'Redux Vanilla: <Provider /> is not given `store` props. you have to pass Redux store as a props. i.e. <Provider store={store}><App /></Provider>'
    )
  })

  it('throw error when child node is not supply', () => {
    const store = _createStore()
    expect(() => {
      TestUtils.renderIntoDocument(<Provider store={store} />)
    }).toThrow(
      /React.Children.only expected to receive a single React element child/
    )
  })

  it('accept single child node with Redux store', () => {
    const store = _createStore()
    expect(() => {
      TestUtils.renderIntoDocument(
        <Provider store={store}>
          <div />
        </Provider>
      )
    }).not.toThrow()
  })

  it('throw error when given multiple child node', () => {
    const store = _createStore()
    expect(() => {
      TestUtils.renderIntoDocument(
        <Provider store={store}>
          <div />
          <div />
        </Provider>
      )
    }).toThrow(
      /React.Children.only expected to receive a single React element child/
    )
  })

  it('subscribe observer() after construct', () => {
    const store = _createStore()
    const instance = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <div />
      </Provider>
    )
    const provider = TestUtils.findRenderedComponentWithType(instance, Provider)
    expect(provider.state.reduxState).toEqual({ count: 0 })

    store.dispatch({ type: 'INCREMENT' })
    expect(provider.state.reduxState).toEqual({ count: 1 })

    store.dispatch({ type: 'INCREMENT' })
    expect(provider.state.reduxState).toEqual({ count: 2 })
  })
})
