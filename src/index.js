// @flow
import React from 'react'
import { Provider } from './Provider'
import { connect } from './connect'

export const ReactReduxContext = React.createContext()

export { Provider, connect }
