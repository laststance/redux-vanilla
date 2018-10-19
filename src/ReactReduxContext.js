// @flow
import React from 'react'

export type Context = any

const ReactReduxContext: React$Context<Context> = React.createContext()

export default ReactReduxContext
