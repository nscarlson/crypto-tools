import { init } from './client'

jest.mock('react-dom')
jest.mock('components/App')

describe('client', () => {
  describe('init()', () => {
    let hydrate

    beforeEach(() => {
      hydrate = require('react-dom').hydrate

      hydrate.mockImplementation((element, container) => {})

      jest.spyOn(document, 'getElementById').mockImplementation(() => null)
    })

    it('hydrates the app', () => {
      init()

      expect(hydrate).toHaveBeenCalledWith(expect.anything(), null)
      expect(document.getElementById).toHaveBeenCalledWith('app')
    })
  })
})
