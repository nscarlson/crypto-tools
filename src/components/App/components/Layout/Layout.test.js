import Adapter from 'enzyme-adapter-react-15'
import { shallow } from 'enzyme'
import React from 'react'
import RGL, { WidthProvider } from 'react-grid-layout'

import Layout from './Layout'
import Explore from 'scenes/Explore'
import Price from './components/Grid/components/Price'

const ReactGridLayout = WidthProvider(RGL)

const layout = [
  { i: 'price', x: 0, y: 0, w: 12, h: 2, static: true },
  { i: 'menu', x: 0, y: 1, w: 2, h: 10, static: true },
  { i: 'explore', x: 2, y: 2, w: 12, h: 20 },
]

describe('<Layout />', () => {
  let props, wrapper

  beforeEach(() => {
    props = {
      children: <h1>{Math.random()}</h1>,
    }

    wrapper = shallow(<Layout {...props} />)
  })

  it('has the correct displayName', () => {
    expect(Layout.displayName).toBe('Layout')
  })

  it('renders correctly', () => {
    expect(wrapper.contains(
      <div className="layout">
        <ReactGridLayout layout={layout} cols={12} rowHeight={15} width={1200}>
          <div key="price">
            <Price />
          </div>
          <div key="explore">
            <Explore />
          </div>
        </ReactGridLayout>
      </div>
    )).toBe(true)
  })
})
