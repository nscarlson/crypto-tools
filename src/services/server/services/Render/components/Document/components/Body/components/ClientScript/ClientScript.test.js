import { shallow } from 'enzyme'
import React from 'react'

import ClientScript from './ClientScript'

describe('<ClientScript />', () => {
  let props, wrapper

  beforeEach(() => {
    props = {
      src: 'src',
    }

    wrapper = shallow(<ClientScript {...props} />)
  })

  it('renders a script tag to load the app', () => {
    expect(wrapper.contains(
      <script defer src={props.src} type="text/javascript" />
    )).toBe(true)
  })
})
