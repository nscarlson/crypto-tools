import { object, string } from 'prop-types'
import React, { Component } from 'react'

class Transaction extends Component {
  static displayName = 'Transaction'

  static propTypes = {
    hash: string,
    transaction: object,
  }

  render = () => {
    console.log('transaction:')
    console.log(this.props.transaction)

    const inputs = this.props.transaction.inputs.map((input) => {
      console.log('input:')
      console.log(input)

      return (
        <div>
          <div className="inputs">{input.address}{`${input.value / 100000000} BTC`}</div>
        </div>
      )
    })

    const outputs = this.props.transaction.outputs.map((output) => {
      console.log('output:')
      console.log(output)

      return (
        <div>
          <div className="inputs">{output.address}{`${output.value / 100000000} BTC`}</div>
        </div>
      )
    })

    return (
      <div>
        {this.props.transaction.hash}
        <span><br />inputs<br /></span>
        <div>{inputs}</div>

        ->

        <span><br />outputs<br /></span>
        <div>{outputs}</div>
      </div>
    )
  }
}

export default Transaction
