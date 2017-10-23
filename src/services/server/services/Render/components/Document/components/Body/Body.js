import fs from 'fs'
import { string } from 'prop-types'
import React from 'react'

import ClientScript from './components/ClientScript'

let assets

const Body = ({ children }) => {
  if (!assets) {
    assets = JSON.parse(fs.readFileSync('webpack-assets.json'))
  }

  const { client, manifest, vendor } = assets

  return (
    <body>
      <div dangerouslySetInnerHTML={{ __html: children }} id="app" />
      <ClientScript src={manifest.js} />
      <ClientScript src={vendor.js} />
      <ClientScript src={client.js} />
    </body>
  )
}

Body.displayName = 'Body'

Body.propTypes = {
  children: string.isRequired,
}

export default Body
