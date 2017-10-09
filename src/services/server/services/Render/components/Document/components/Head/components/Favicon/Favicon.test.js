import { shallow } from 'enzyme'
import React from 'react'

import Favicon from './Favicon'

describe('<Favicon />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Favicon />)
  })

  it('has the correct displayName', () => {
    expect(Favicon.displayName).toBe('Favicon')
  })

  it('renders correctly', () => {
    expect(wrapper.contains(
      <link href="/public/favicon.ico" rel="shortcut icon" />
    )).toBe(true)
  })
})
