import { shallow } from 'enzyme'
import React from 'react'
import Helmet from 'react-helmet'

import ClientStyles from './components/ClientStyles'
import GoogleAnalytics from './components/GoogleAnalytics'
import Viewport from './components/Viewport'

import Head from './Head'

jest.mock('react-helmet')
jest.mock('./components/ClientStyles', () => () => null)

describe('<Head />', () => {
  let props, wrapper

  beforeEach(() => {
    props = {
      children: 'test',
      initialState: {},
    }

    wrapper = shallow(<Head {...props} />)
  })

  it('renders the content', () => {
    const { base, link, meta, script, title } = Helmet.rewind()

    expect(wrapper.contains(
      <head>
        {base.toComponent()}
        {title.toComponent()}
        {meta.toComponent()}
        {link.toComponent()}
        {script.toComponent()}

        <GoogleAnalytics />
        <ClientStyles />
        <Viewport />
      </head>
    )).toBe(true)
  })
})
