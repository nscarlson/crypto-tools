import { shallow } from 'enzyme'
import fs from 'fs'
import React from 'react'

import ClientScript from './components/ClientScript'
import InitialState from './components/InitialState'

import Body from './Body'

jest.mock('fs')

describe('<Body />', () => {
  let file, props, wrapper

  beforeEach(() => {
    file = {
      client: {
        js: 'client',
      },
      manifest: {
        js: 'manifest',
      },
      vendor: {
        js: 'vendor',
      },
    }

    fs.readFileSync = jest.fn(() => JSON.stringify(file))

    props = {
      children: 'test',
      initialState: {},
    }

    wrapper = shallow(<Body {...props} />)
  })

  it('renders the content', () => {
    expect(wrapper.contains(
      <body>
        <div id="app" />
        <ClientScript src={file.manifest.js} />
        <ClientScript src={file.vendor.js} />
        <ClientScript src={file.client.js} />
      </body>
    )).toBe(true)
  })

  it('only loads the assets once', () => {
    wrapper = shallow(<Body {...props} />)

    expect(fs.readFileSync).not.toHaveBeenCalled()
  })
})
