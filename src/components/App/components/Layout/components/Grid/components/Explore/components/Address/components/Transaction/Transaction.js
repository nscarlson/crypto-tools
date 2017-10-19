import { string } from 'prop-types'
import { graphql } from 'react-apollo'
import React, { Component } from 'react'

import { getTransaction } from 'services/queries/Transaction'

class Transaction extends Component {
  static displayName = 'Transaction'

  static propTypes = {
    hash: string,
  }

  render = () => {
    const placeholder = ''

    return <div>{this.props.hash}</div>
  }
}

export default graphql(getTransaction, { options: ({ hash }) => ({ variables: { hash } }) })(Transaction)
