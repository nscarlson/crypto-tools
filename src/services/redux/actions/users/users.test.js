import * as users from './users'

describe('users actions', () => {
  it('exports the actions', () => {
    expect(Object.keys(users)).toEqual(expect.arrayContaining([
      'getCurrentSession',
      'loadSessionFail',
      'loadSessionSuccess',
    ]))
  })

  it('getCurrentSession fetches', async () => {
    const session = {}

    window.fetch = jest.fn(async () => ({
      json: async () => session,
    }))

    const dispatch = jest.fn()

    await users.getCurrentSession()(dispatch)

    expect(fetch).toHaveBeenCalledWith(`http://api/users/me`, {
      credentials: 'include',
    })

    expect(dispatch).toHaveBeenCalledWith(users.loadSessionSuccess(session))
  })

  it('getCurrentSession handles errors', async () => {
    window.fetch = jest.fn(async () => {
      throw new Error()
    })

    const dispatch = jest.fn()

    await users.getCurrentSession()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(users.loadSessionFail())
  })

  it('loadSessionSuccess returns correctly', () => {
    expect(users.loadSessionSuccess({})).toEqual({
      session: {},
      type: 'LOAD_SESSION_SUCCESS',
    })
  })

  it('loadSessionFail returns correctly', () => {
    expect(users.loadSessionFail()).toEqual({
      type: 'LOAD_SESSION_FAIL',
    })
  })
})
