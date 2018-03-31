import * as React from 'react'
import * as Redux  from 'redux'

export interface ProviderProps {
  /**
   * The single Redux store in your application.
   */
  store?: Store<any>;
  children?: ReactNode;
}

/**
 * Makes the Redux store available to the connect() calls in the component hierarchy below.
 */
export class Provider extends React.Component<ProviderProps, {}> { }

export function connect(component: React.ComponetType<any>)