/* eslint-disable react/display-name, react/prop-types */

import React, { Component } from 'react'

import resolveDependencies from './resolveDependencies'

describe('resolveDependencies', () => {
  it('resolves if there are no dependencies', async () => {
    const tree = (
      <div />
    )

    await expect(resolveDependencies(tree)).resolves.toEqual([undefined, undefined])
  })

  it('resolves a simple dependency', async () => {
    const mock = jest.fn()

    class C extends Component {
      getDependencies = () => Promise.resolve(mock())

      render = () => null
    }

    const tree = (
      <C />
    )

    await resolveDependencies(tree)

    expect(mock).toHaveBeenCalled()
  })

  it('resolves when a dependency is not a promise', async () => {
    class C extends Component {
      getDependencies = () => true

      render = () => null
    }

    const tree = (
      <C />
    )

    await resolveDependencies(tree)
  })

  it('resolves nested dependencies', async () => {
    const mockP = jest.fn()
    const mockC = jest.fn()

    class P extends Component {
      getDependencies = () => Promise.resolve(mockP())

      render = () => this.props.children
    }

    class C extends Component {
      getDependencies = () => Promise.resolve(mockC())

      render = () => null
    }

    const tree = (
      <P>
        <C />
      </P>
    )

    await resolveDependencies(tree)

    expect(mockP).toHaveBeenCalled()
    expect(mockC).toHaveBeenCalled()
  })

  it('handles errors in dependencies', async () => {
    class A extends Component {
      render = () => this.props.children
    }

    const B = ({ children }) => children

    const CError = new Error('C Error')

    class C extends Component {
      getDependencies = () => Promise.reject(CError)

      render = () => this.props.children
    }

    const DError = new Error('D Error')

    class D extends Component {
      getDependencies = () => Promise.reject(DError)

      render = () => this.props.children
    }

    const tree = (
      <A>
        <B>
          <C />
          <D />
        </B>
      </A>
    )

    try {
      await resolveDependencies(tree)
    } catch (err) {
      expect(err).toMatchObject({
        errors: [
          CError,
          DError,
        ],
        message: '2 errors were thrown while resolving dependencies.',
      })
    }
  })
})
