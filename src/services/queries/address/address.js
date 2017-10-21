import { gql } from 'react-apollo'

const getBtcAddress = gql`
  query getBtcAddress (
    $address: String!
  ) {
    BtcAddress (
      address: $address
    ) {
      id
      address
      balance
      transactions {
        id
        hash
        txindex
        inputs {
          id
          address
          spent
          txindex
          value
        }
        outputs {
          id
          address
          spent
          txindex
          value
        }
      }
    }
  }
`

export { getBtcAddress }
