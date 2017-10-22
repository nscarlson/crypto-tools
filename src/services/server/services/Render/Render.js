import { Router } from 'express'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import Document from './components/Document'

const Render = Router()

Render.use(async (req, res) => {
  const html = renderToStaticMarkup(
    <Document />
  )

  res.send(`<!DOCTYPE html>${html}`)
})

export default Render
