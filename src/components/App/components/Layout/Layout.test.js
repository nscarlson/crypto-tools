import { shallow } from 'enzyme'
import React from 'react'
import toJson from 'enzyme-to-json'

import Layout from './Layout'

describe('<Layout />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Layout />)
  })

  it('has the correct displayName', () => {
    expect(Layout.displayName).toBe('Layout')
  })

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
