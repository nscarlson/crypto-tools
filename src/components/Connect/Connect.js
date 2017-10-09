import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

const Connect = (...redux) => (WrappedComponent) => {
  let displayName = `${WrappedComponent.displayName}Connect`

  const Connect = connect(...redux)(WrappedComponent)

  Connect.displayName = displayName

  displayName = `${displayName}PureComponent`

  class ConnectPureComponent extends PureComponent {
    static displayName = displayName

    render = () => (
      <Connect {...this.props} />
    )
  }

  const ConnectPureComponentWithRouter = withRouter(ConnectPureComponent)

  ConnectPureComponentWithRouter.displayName = `${displayName}WithRouter`

  return ConnectPureComponentWithRouter
}

export default Connect
