import { shallow } from 'enzyme'
import React from 'react'

import WebAppIcon from './WebAppIcon'

describe('<WebAppIcon />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<WebAppIcon />)
  })

  it('has the correct displayName', () => {
    expect(WebAppIcon.displayName).toBe('WebAppIcon')
  })

  it('renders correctly', () => {
    expect(wrapper.contains(
      <link href="/public/images/square-icon.png" rel="apple-touch-icon-precomposed" />
    )).toBe(true)
  })
})
