// @flow
import React from 'react'
import { Store } from 'redux'

export type Context = {
  store: Store,
  storeState: any
}

const defaultValue: Context = { store: ({}: Store), storeState: {} }

const ReactReduxContext: React$Context<Context> = React.createContext(
  defaultValue
)

export default ReactReduxContext
