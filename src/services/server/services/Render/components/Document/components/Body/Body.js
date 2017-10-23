import fs from 'fs'
import React from 'react'

import ClientScript from './components/ClientScript'

let assets

const Body = () => {
  if (!assets) {
    assets = JSON.parse(fs.readFileSync('webpack-assets.json'))
  }

  const { client, manifest, vendor } = assets

  return (
    <body>
      <div id="app" />
      <ClientScript src={manifest.js} />
      <ClientScript src={vendor.js} />
      <ClientScript src={client.js} />
    </body>
  )
}

Body.displayName = 'Body'

export default Body
