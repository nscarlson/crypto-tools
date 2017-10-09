import { shallow } from 'enzyme'
import React from 'react'

import WebAppCapable from './WebAppCapable'

describe('<WebAppCapable />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<WebAppCapable />)
  })

  it('has the correct displayName', () => {
    expect(WebAppCapable.displayName).toBe('WebAppCapable')
  })

  it('renders correctly', () => {
    expect(wrapper.contains(
      <meta content="yes" name="apple-mobile-web-app-capable" />
    )).toBe(true)
  })
})
