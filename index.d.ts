import * as React from 'react'
import * as Redux  from 'redux'

declare module ReduxVanilla {
  export interface ProviderProps {
    /**
     * The single Redux store in your application.
     */
    store?: Redux.Store<any>;
    children?: React.Node;
  }

  /**
   * Makes the Redux store available to the connect() calls in the component hierarchy below.
   */
  export class Provider extends React.Component<ProviderProps, {}> { }

  export  function connect(component: React.ComponetType<any>): React.ComponetType<any>
}

declare module "redux-vanilla" {
  export = ReduxVanilla
}