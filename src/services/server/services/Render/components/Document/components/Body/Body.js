import fs from 'fs'
import { object, string } from 'prop-types'
import React from 'react'

import ClientScript from './components/ClientScript'
import InitialState from './components/InitialState'

let assets

const Body = ({ children, initialState }) => {
  if (!assets) {
    assets = JSON.parse(fs.readFileSync('webpack-assets.json'))
  }

  const { client, manifest, vendor } = assets

  return (
    <body>
      <div dangerouslySetInnerHTML={{ __html: children }} id="app" />
      <InitialState initialState={initialState} />
      <ClientScript src={manifest.js} />
      <ClientScript src={vendor.js} />
      <ClientScript src={client.js} />
    </body>
  )
}

Body.displayName = 'Body'

Body.propTypes = {
  children: string.isRequired,
  initialState: object,
}

export default Body
