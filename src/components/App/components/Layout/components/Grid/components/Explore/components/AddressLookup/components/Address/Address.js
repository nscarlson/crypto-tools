import axios from 'axios'
import { func, object, string } from 'prop-types'
import { graphql } from 'react-apollo'
import React, { Component } from 'react'

import { createBtcAddress } from 'services/mutations/address'
import { getBtcAddress } from 'services/queries/address'

// import TransactionContainer from './components/transaction/TransactionContainer'

class Address extends Component {
  static displayName = 'Address'

  static propTypes = {
    address: string,
    getBtcAddressQuery: object,
    createBtcAddressMutation: object,
    data: object,
  }

  addressData = null

  componentDidMount = () => {
    this.fetchAddress(this.props.address)
  }

  // componentWillReceiveProps = (nextProps) => {
  //   if (nextProps.address) {
  //     this.fetchAddress(nextProps.address)
  //     console.log('fetching address in Address')
  //   }
  // }

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
    if (this.props.getBtcAddressQuery.loading) {
      return (<span>Loading...</span>)
    } else {
      const address = this.props.address
      const addressData = this.props.getBtcAddressQuery || []

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

export default graphql(createBtcAddress, { options: ({ address }) => ({ variables: { address } }) })(
  graphql(getBtcAddress, { name: 'getBtcAddressQuery' }, { options: ({ address }) => ({ variables: { address } }) })(Address)
)
