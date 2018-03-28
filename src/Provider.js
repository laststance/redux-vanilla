// @flow
import { Component, Children } from 'react'
import PropTypes from 'prop-types'
import type { Element } from 'react'
import type { Store } from 'redux'

type Props = {
  store: Store<any, any>,
  children: Element<any>
}

export class Provider extends Component<Props> {
  static childContextTypes = {
    store: PropTypes.shape({
      subscribe: PropTypes.func.isRequired,
      dispatch: PropTypes.func.isRequired,
      getState: PropTypes.func.isRequired
    }),
    listener: PropTypes.bool
  }

  state = {
    listener: false
  }

  getChildContext() {
    return {
      store: this.props.store
    }
  }

  constructor(props) {
    super(props)
    if (this.isNotStoreRecived(props)) {
      throw new Error(
        'Redux Vanilla: <Provider /> is not given `store` props. you have to pass Redux store as a props. i.e. <Provider store={store}><App /></Provider>'
      )
    }

    const observer = () => this.setState({ listener: !this.state.listener })
    props.store.subscribe(observer)
  }

  isNotStoreRecived(props) {
    const store = props.store
    if (store === undefined) return true
    if (typeof store !== 'object') return true
    const storeShape = ['dispatch', 'subscribe', 'getState', 'replaceReducer']
    const actualKeys = Object.keys(store)
    if (!storeShape.every(v => actualKeys.includes(v))) return true

    return false
  }

  render() {
    return Children.only(this.props.children)
  }
}
