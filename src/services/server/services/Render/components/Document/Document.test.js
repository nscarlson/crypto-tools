import { shallow } from 'enzyme'
import React from 'react'

import Body from './components/Body'
import Head from './components/Head'

import Document from './Document'

describe('<Document />', () => {
  let props, wrapper

  beforeEach(() => {
    props = {
      children: 'Test',
      test: Math.random(),
    }

    wrapper = shallow(<Document {...props} />)
  })

  it('renders the content', () => {
    expect(wrapper.contains(
      <html lang="en-us">
        <Head />
        <Body {...props} />
      </html>
    )).toBe(true)
  })
})
