import { object, string } from 'prop-types'
import React, { Component } from 'react'

class Transaction extends Component {
  static displayName = 'Transaction'

  static propTypes = {
    hash: string,
    transaction: object,
  }

  render = () => {
    console.log(this.props.transaction)
    return (
      <div>
        {this.props.transaction.hash}
      </div>
    )
  }
}

export default Transaction
