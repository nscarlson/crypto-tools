import { string } from 'prop-types'
import React from 'react'
import Highlightjs from 'react-highlight'

const Highlight = (props) => (
  <Highlightjs>
    {props.text}
  </Highlightjs>
)

Highlight.displayName = 'Highlight'

Highlight.propTypes = {
  text: string,
}

export default Highlight
