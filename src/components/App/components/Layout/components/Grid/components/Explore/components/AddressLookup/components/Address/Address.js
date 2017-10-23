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

      this.setState({ addressData: result })
    } catch (err) {
      console.error(err)
    }
  }

  render = () => {
    const { address } = this.props

    if (this.state.addressData) {
      const txs = this.state.addressData.txs

      txs.map((tx) => {
        tx.inputs.map((input) => {

        })

        tx.out.map((out) => {

        })
      })

      const transactions = txs.map((tx) => (
        <div className="transaction" key={tx.hash}>
          <div className="tx-hash">{tx.hash}</div>

          <div className="tx-flex">
            <div className="inputs">{tx.inputs.map((input) => (
              <div className={input.prev_out.addr === address ? 'out' : ''}>
                {input.prev_out.addr} {input.prev_out.value / 100000000} BTC
              </div>))}
            </div>
            ->
            <div className="outputs">{tx.out.map((out) => (
              <div className={out.addr === address ? 'in' : ''}>
                {out.addr}
                <div className="price">{out.value / 100000000} BTC</div>
              </div>))}
            </div>
          </div>
        </div>
      ))

      return (
        <div>
          {transactions}
        </div>

      )
    } else {
      return <div>loading...</div>
    }
  }
}

export default Address
