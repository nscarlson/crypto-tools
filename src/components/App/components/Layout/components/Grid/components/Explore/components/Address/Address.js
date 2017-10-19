import axios from 'axios'
import { func, object, string } from 'prop-types'
import { graphql } from 'react-apollo'
import React, { Component } from 'react'

import { createBtcAddress, getAddress } from 'services/queries/Address'
import TransactionContainer from './components/transaction/TransactionContainer'

class Address extends Component {
  static displayName = 'Address'

  static propTypes = {
    address: string,
    createBtcAddressMutation: func,
    data: object,
  }

  addressData = null

  componentDidMount = () => {
    this.fetchAddress(this.props.address)
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.address) {
      this.fetchAddress(nextProps.address)
    }
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
    } else {
      const address = this.props.address
      const addressData = this.props.data.allBtcAddresses[0]

      console.log('address is: ')
      console.log(address)

      console.log('address data:')
      console.log(addressData)

      return (
        <div>
          {this.props.address}

        </div>

      )
    }
  }
}

export default graphql(createBtcAddress, { name: 'createBtcAddressMutation' })(
  graphql(getAddress, { options: ({ address }) => ({ variables: { address } }) })(Address)
)
