import React from 'react'
import Helmet from 'react-helmet'

import ClientStyles from './components/ClientStyles'
import GoogleAnalytics from './components/GoogleAnalytics'
import Viewport from './components/Viewport'

const Head = () => {
  const { base, link, meta, script, title } = Helmet.rewind()

  return (
    <head>
      {base.toComponent()}
      {title.toComponent()}
      {meta.toComponent()}
      {link.toComponent()}
      {script.toComponent()}

      <GoogleAnalytics />
      <ClientStyles />
      <Viewport />
    </head>
  )
}

Head.displayName = 'Head'

export default Head
