import { shallow } from 'enzyme'
import React from 'react'
import toJson from 'enzyme-to-json'

import Layout from './Layout'
import BestRates from './components/Grid/components/BestRates'
import Explore from './components/Grid/components/Explore'
import Price from './components/Grid/components/Price'

jest.mock('react-grid-layout')

describe('<Layout />', () => {
  let ReactGridLayout, wrapper

  beforeEach(() => {
    ReactGridLayout = require('react-grid-layout')
    ReactGridLayout.WidthProvider.mockImplementation((RGL) => {})

    wrapper = shallow(<Layout />)
  })

  it('has the correct displayName', () => {
    expect(Layout.displayName).toBe('Layout')
  })

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
