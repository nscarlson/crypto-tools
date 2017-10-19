import { gql } from 'react-apollo'

query getTransaction = gql`
  query getTransaction (
    $address: String!
    $hash: String!
  ) {
    allTransactions (
      filter: {
        btcAddress: {
          address: $address
        }
        hash: $hash
      }
    ) {
      id
      hash
      time
      txindex
      inputs {
        id
        spent
        address
        txindex
        value
      }
      outputs {
        id
        spent
        address
        txindex
        value
      }
    }
`
