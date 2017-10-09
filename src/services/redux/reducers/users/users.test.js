import users from './users'

describe('users reducer', () => {
  it('returns an empty object by default', () => {
    expect(users(undefined, { type: 'FAKE_ACTION' })).toEqual({})
  })

  it('handles the LOAD_SESSION_SUCCESS action', () => {
    const action = {
      payload: {},
      type: 'LOAD_SESSION_SUCCESS',
    }

    expect(users(undefined, action)).toBe(action.payload)
  })
})
