import { init } from './client'

jest.mock('react-dom')
jest.mock('components/App')

describe('client', () => {
  describe('init()', () => {
    let render

    beforeEach(() => {
      render = require('react-dom').render

      render.mockImplementation((element, container) => {})

      jest.spyOn(document, 'getElementById').mockImplementation(() => null)
    })

    it('renders the app', () => {
      init()

      expect(render).toHaveBeenCalledWith(expect.anything(), null)
      expect(document.getElementById).toHaveBeenCalledWith('app')
    })
  })
})
