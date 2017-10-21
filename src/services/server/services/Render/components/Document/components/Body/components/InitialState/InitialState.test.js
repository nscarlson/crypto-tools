import { shallow } from 'enzyme'
import React from 'react'

import InitialState from './InitialState'

describe('<InitialState />', () => {
  let wrapper
  let props

  beforeEach(() => {
    props = {
      initialState: {
        test: Math.random(),
      },
    }

    wrapper = shallow(<InitialState {...props} />)
  })

  it('renders the initial state', () => {
    expect(wrapper.contains(
      <script
        dangerouslySetInnerHTML={{
          __html: `window.__INITIAL_STATE__ = ${JSON.stringify(props.initialState)}`,
        }}
        id="initial-state"
      />
    )).toBe(true)
  })
})
