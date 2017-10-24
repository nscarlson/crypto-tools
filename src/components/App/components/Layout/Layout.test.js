import { shallow } from 'enzyme'
import React from 'react'
import toJson from 'enzyme-to-json'

import Layout from './Layout'
import BestRates from './components/Grid/components/BestRates'
import Explore from './components/Grid/components/Explore'
import Price from './components/Grid/components/Price'

jest.mock('react-grid-layout')

describe('<Layout />', () => {
  let layout, props, ReactGridLayout, wrapper

  beforeEach(() => {
    props = {
      children: <h1>{Math.random()}</h1>,
    }
    ReactGridLayout = require('react-grid-layout')
    ReactGridLayout.WidthProvider.mockImplementation((RGL) => {})

    wrapper = shallow(<Layout {...props} />)
  })

  it('has the correct displayName', () => {
    expect(Layout.displayName).toBe('Layout')
  })

  it('renders correctly', () => {
    layout = [
      { i: 'price', x: 0, y: 0, w: 12, h: 12, static: true },
      { i: 'bestrates', x: 0, y: 12, w: 12, h: 26, static: true },
      { i: 'address1', x: 0, y: 38, w: 12, h: 20, static: true },
    ]

    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
