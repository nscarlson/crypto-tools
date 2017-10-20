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
          address
        }
        outputs {
          address
        }
      }
    }
  }
`

export { getBtcAddress }
