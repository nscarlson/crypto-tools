import { shallow } from 'enzyme'
import React from 'react'

import WebAppStatusBar from './WebAppStatusBar'

describe('<WebAppStatusBar />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<WebAppStatusBar />)
  })

  it('has the correct displayName', () => {
    expect(WebAppStatusBar.displayName).toBe('WebAppStatusBar')
  })

  it('renders correctly', () => {
    expect(wrapper.contains(
      <meta content="default" name="apple-mobile-web-app-status-bar-style" />
    )).toBe(true)
  })
})
