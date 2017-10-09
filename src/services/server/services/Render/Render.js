import { Router } from 'express'
import React from 'react'
import { renderToStaticMarkup, renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'

import App from 'components/App'
import { createStore } from 'services/redux/store'

import Document from './components/Document'
import resolveDependencies from './services/resolveDependencies'

const Render = Router()

Render.use(async (req, res) => {
  // TODO implement a maintenance page based on env variable
  const context = {}
  const store = createStore()

  const components = (
    <StaticRouter context={context} location={req.url}>
      <App />
    </StaticRouter>
  )

  try {
    await resolveDependencies(components)
  } catch (err) {
    // TODO determine when a fatal error occurs and render an actual error page
    console.error(err)
  }

  const html = renderToStaticMarkup(
    <Document initialState={store.getState()}>
      {renderToString(components)}
    </Document>
  )

  if (context.url) {
    return res.redirect(context.url)
  }

  res.send(`<!DOCTYPE html>${html}`)
})

export default Render
