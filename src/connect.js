// @flow
import React, { Component } from 'react'
import type { Store } from 'redux'
import ReactReduxContext from './ReactReduxContext'

type Context =
  | {
      store: Store,
      storeState: any
    }
  | typeof undefined

export const connect = (
  WrappedComponent: React$ComponentType<any>
): React$ComponentType<any> =>
  class HigherOrderComponent extends Component<{||}> {
    handleConsumer = (context: Context): React$Node => {
      if (context === undefined) {
        throw new Error(
          'Redux Vanilla: connect() was used without <Provider />. you have to define <Provider /> Parent Component. higher than connect() Child Component'
        )
      }

      const { store, storeState } = context

      return (
        <WrappedComponent
          store={store}
          state={storeState}
          dispatch={store.dispatch}
          {...this.props}
        />
      )
    }

    render() {
      return (
        <ReactReduxContext.Consumer>
          {this.handleConsumer}
        </ReactReduxContext.Consumer>
      )
    }
  }
