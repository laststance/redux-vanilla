// @flow
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import type { ComponentType } from 'react'
import type { Store } from 'redux'

export const connect = (WrappedComponent: ComponentType<any>) =>
  class HOC extends Component<any> {
    static contextTypes = {
      store: PropTypes.object
    }

    render() {
      const store: Store<any, any> = this.context.store
      return <WrappedComponent store={store} {...this.props} />
    }
  }
