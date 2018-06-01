// @flow
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import type { ComponentType } from 'react'
import type { Store } from 'redux'

type Props = any
type Context = {
  store: Store<any, any>
}
export const connect = (
  WrappedComponent: ComponentType<any>
): ComponentType<any> =>
  class HigherOrderComponent extends Component<Props> {
    static contextTypes = {
      store: PropTypes.object
    }

    store: Store<any, any>

    constructor(props: Props, context: Context) {
      super(props, context)
      if (context.store === undefined) {
        throw new Error(
          'Redux Vanilla: connect() was used without <Provider />. you have to define <Provider /> Parent Component. higher than connect() Child Component'
        )
      }
      this.store = context.store
    }

    render() {
      const store = this.store
      const state = store.getState()
      const dispatch = store.dispatch

      return (
        <WrappedComponent
          store={store}
          state={state}
          dispatch={dispatch}
          {...this.props}
        />
      )
    }
  }
