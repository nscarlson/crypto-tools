import { shallow } from 'enzyme'
import React from 'react'

import GoogleAnalytics from './GoogleAnalytics'

describe('<GoogleAnalytics />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<GoogleAnalytics />)
  })

  it('has the correct displayName', () => {
    expect(GoogleAnalytics.displayName).toBe('GoogleAnalytics')
  })

  it('renders a script tag', () => {
    expect(wrapper.find('script').length).toBe(1)
  })
})
