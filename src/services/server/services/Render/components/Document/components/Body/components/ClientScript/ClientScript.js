import { string } from 'prop-types'
import React from 'react'

const ClientScript = ({ src }) => (
  <script defer src={src} type="text/javascript" />
)

ClientScript.displayName = 'ClientScript'

ClientScript.propTypes = {
  src: string.isRequired,
}

export default ClientScript
