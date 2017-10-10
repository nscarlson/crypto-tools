import { shallow } from 'enzyme'
import React from 'react'
import { Switch } from 'react-router-dom'

import Footer from './components/Footer'
import Header from './components/Header'
import Layout from './Layout'

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
        {props.children}
        <Footer />
      </div>
    )).toBe(true)
  })
})
