import { gql } from 'react-apollo'

const createBtcAddress = gql`
  mutation createAddress(
    $address: String!
    $balance: Float!
    $hash160: String!
    $totalsent: Int!
    $totalreceived: Int!
    $Transactions: [Transaction!]
  ) {
    createPrice (
      address: $address
      balance: $balance
      hash160: $hash160
      totalsent: $totalsent
      totalreceived: $totalreceived
      transactions: $transactions
    ) {
      id
      address
      balance
      hash160
      totalsent
      totalreceived
      transactions {
        inputs {
          spent
          address
          txindex
          value
        }
        outputs {
          spent
          address
          txindex
          value
        }
      }
    }
  }
`
export { createBtcAddress }
