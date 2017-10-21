import { shallow } from 'enzyme'
import fs from 'fs'
import React from 'react'

import ClientStyles from './ClientStyles'

jest.mock('fs')

describe('<ClientStyles />', () => {
  let file, wrapper

  beforeEach(() => {
    file = {
      client: {
        css: 'client',
      },
    }

    fs.readFileSync = jest.fn(() => JSON.stringify(file))

    wrapper = shallow(<ClientStyles />)
  })

  it('renders a link tag to load the app styles', () => {
    expect(wrapper.contains(
      <link href={file.client.css} rel="stylesheet" />
    )).toBe(true)
  })

  it('only loads the assets once', () => {
    wrapper = shallow(<ClientStyles />)

    expect(fs.readFileSync).not.toHaveBeenCalled()
  })
})
