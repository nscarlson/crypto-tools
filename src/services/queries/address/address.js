import { gql } from 'react-apollo'

const getBtcAddress = gql`
  query getAddress (
    $address: String!
  ) {
    allBtcAddresses(
      filter: {
        address: $address
      }
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
