import axios from 'axios'
import { string } from 'prop-types'
import { graphql } from 'react-apollo'
import React, { Component } from 'react'

import { getBtcAddress } from 'services/queries/address'
// import Transaction from './components/Transaction'

// import TransactionContainer from './components/transaction/TransactionContainer'

class Address extends Component {
  static displayName = 'Address'

  static propTypes = {
    address: string,
  }

  constructor (props) {
    super(props)
    this.state = {
      addressData: null,
    }
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('next props:')
    console.log(nextProps.address)
    this.fetchAddress(nextProps.address)
  }

  fetchAddress = async (address) => {
    let result = null
    try {
      result = (await axios({
        responseType: 'json',
        url: `/api/blockchain/rawaddr/${address}`,
        withCredentials: true,
      })).data

      console.log('data:')
      console.log(result)

      this.setState({ addressData: result })
    } catch (err) {
      console.error(err)
    }
  }

  render = () => {
    if (this.state.addressData) {
      const txs = this.state.addressData.txs

      const transactions = txs.map((tx) => {
        console.log('address')
        console.log(tx.hash)
        return (
          <div key={tx.hash}>
            {tx.hash}
            <div className="inputs">{tx.inputs.map((input) => (<div>{input.prev_out.addr}</div>))}</div>
            ->
            <div className="outputs">{tx.out.map((out) => (<div>{out.addr}</div>))}</div>
          </div>
        )
      })

      return (
        <div>
          {this.props.address}
          {transactions}
        </div>

      )
    } else {
      return <div>loading...</div>
    }
  }
}

export default graphql(getBtcAddress, { name: 'getBtcAddressQuery' }, { options: ({ address }) => ({ variables: { address } }) })(Address)
