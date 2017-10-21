import { gql } from 'react-apollo'

const getBtcTransaction = gql`
  query getBtcTransaction (
    $address: String!
    $hash: String!
  ) {
    Transaction (
      hash: $hash
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

export default getBtcTransaction
