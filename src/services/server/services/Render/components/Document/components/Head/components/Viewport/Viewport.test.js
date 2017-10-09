import { shallow } from 'enzyme'
import React from 'react'

import Viewport from './Viewport'

describe('<Viewport />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Viewport />)
  })

  it('has the correct displayName', () => {
    expect(Viewport.displayName).toBe('Viewport')
  })

  it('renders correctly', () => {
    expect(wrapper.contains(
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    )).toBe(true)
  })
})
