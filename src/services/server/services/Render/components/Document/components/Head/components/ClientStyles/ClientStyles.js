import fs from 'fs'
import React from 'react'

let assets

const ClientStyles = () => {
  if (!assets) {
    assets = JSON.parse(fs.readFileSync('webpack-assets.json'))
  }

  const { client } = assets

  return (
    <link href={client.css} rel="stylesheet" />
  )
}

ClientStyles.displayName = 'ClientStyles'

export default ClientStyles
