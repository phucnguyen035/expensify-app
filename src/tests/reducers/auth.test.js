import authReducer from '../../reducers/auth';

describe('Auth Reducer', () => {
  test('should set user uid when log in', () => {
    const action = {
      type: 'LOGIN',
      uid: '123abc'
    };
    const state = authReducer({}, action);

    expect(state.uid).toBe(action.uid);
  });

  test('should clear user uid when log out', () => {
    const action = {
      type: 'LOGOUT'
    };

    const state = authReducer({ uid: '456def' }, action);

    expect(state).toEqual({});
  });
});
