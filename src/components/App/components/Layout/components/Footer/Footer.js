import { node } from 'prop-types'
import React from 'react'

const Footer = ({ children }) => (
  <div>&copy;{ (new Date()).getFullYear() } Nathan Carlson</div>
)

Footer.displayName = 'Footer'

Footer.propTypes = {
  children: node,
}

export default Footer
