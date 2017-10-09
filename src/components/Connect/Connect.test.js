import { mount } from 'enzyme'
import React from 'react'
import { withRouter } from 'react-router'

import { createStore } from 'services/redux/store'

import Connect from './Connect'

jest.mock('react-router')

// eslint-disable-next-line react/display-name
withRouter.mockImplementation((C) => (props) => (
  <C location={{}} {...props} />
))

describe('<Connect />', () => {
  let Component, props, store, WrappedComponent, wrapper

  beforeEach(() => {
    WrappedComponent = () => null

    WrappedComponent.displayName = 'WrappedComponent'

    Component = Connect()(WrappedComponent)

    store = createStore()

    props = {
      match: {
        params: {
          currency: 'test',
        },
      },
    }

    wrapper = mount(
      <Component {...props} store={store} />
    )
  })

  it('has the correct displayName', () => {
    expect(Component.displayName).toBe('WrappedComponentConnectPureComponentWithRouter')
  })

  it('renders correctly', () => {
    expect(wrapper.find(WrappedComponent).length).toBe(1)
  })
})
