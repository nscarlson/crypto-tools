import React from 'react'

import Body from './components/Body'
import Head from './components/Head'

const Document = (props) => (
  <html lang="en-us">
    <Head />
    <Body {...props} />
  </html>
)

Document.displayName = 'Document'

export default Document
