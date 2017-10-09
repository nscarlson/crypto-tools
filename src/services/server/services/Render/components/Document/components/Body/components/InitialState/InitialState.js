import { object } from 'prop-types'
import React from 'react'

const InitialState = ({ initialState }) => (
  <script
    dangerouslySetInnerHTML={{
      __html: `window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}`,
    }}
    id="initial-state"
  />
)

InitialState.displayName = 'InitialState'

InitialState.propTypes = {
  initialState: object.isRequired,
}

export default InitialState
