// @flow
import React, { Children, Component } from 'react'
import type { Store } from 'redux'
import type { Context } from './ReactReduxContext'
import ReactReduxContext from './ReactReduxContext'

type Props = {
  store: Store<any, any>,
  children: React$Node
}
export class Provider extends Component<Props, Context> {
  state = {
    store: {},
    storeState: {}
  }

  constructor(props: Props) {
    super(props)
    if (this.isNotStoreRecived(props)) {
      throw new Error(
        'Redux Vanilla: <Provider /> is not given `store` props. you have to pass Redux store as a props. i.e. <Provider store={store}><App /></Provider>'
      )
    }

    const observer = () => this.setState({ storeState: props.store.getState() })
    props.store.subscribe(observer)

    this.state = { store: props.store, storeState: props.store.getState() }
  }

  isNotStoreRecived(props: Props): boolean {
    const store = props.store
    if (store === undefined) return true
    if (typeof store !== 'object') return true
    const storeShape = ['dispatch', 'subscribe', 'getState', 'replaceReducer']
    const actualKeys = Object.keys(store)
    if (!storeShape.every(v => actualKeys.includes(v))) return true

    return false
  }

  render() {
    return (
      <ReactReduxContext.Provider value={this.state}>
        {Children.only(this.props.children)}
      </ReactReduxContext.Provider>
    )
  }
}
