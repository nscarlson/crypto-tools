import axios from 'axios'
import { object, string } from 'prop-types'
import { graphql } from 'react-apollo'
import React, { Component } from 'react'

import { getAddress } from 'services/queries/Address'
import TransactionContainer from './components/transaction/TransactionContainer'

class Address extends Component {
  static displayName = 'Address'

  static propTypes = {
    address: string,
    data: object,
  }

  addressData = null

  componentDidMount = () => {
    this.fetchAddress(this.props.address)
  }

  componentWillReceiveProps = (nextProps) => {
    this.fetchAddress(nextProps.address)
  }

  createAddress = () => {
    this.props.createBtcAddressMutation({
      variables: {
        address: '',
        balance: '',
        hash160: '',
        totalReceived: '',
        totalsent: '',
      },
    })
  }

  fetchAddress = async (address) => {
    let result = null
    try {
      result = axios({
        responseType: 'json',
        url: `/api/blockchain/rawaddr/${address}`,
        withCredentials: true,

      }).data

      console.log('result')
      console.log(result)
    } catch (err) {
      console.err(err)
    }
  }

  render = () => {
    if (this.props.data.loading) {
      return (<span>Loading...</span>)
    }

    const address = this.props.address
    const addressData = this.props.data.allBtcAddresses[0]

    console.log('address is: ')
    console.log(address)

    console.log('address data:')
    console.log(addressData)

    return (
      <div>
        {this.props.address}

        <TransactionContainer transactions={addressData.transactions} />
        {addressData.transactions.map((transaction) => (
          <div
            className="transaction"
            key={transaction.id}
          >
            {transaction.inputs[0].address}
          </div>
        ))}

      </div>

    )
  }
}

export default graphql(getAddress, { options: ({ address }) => ({ variables: { address } }) })(Address)
