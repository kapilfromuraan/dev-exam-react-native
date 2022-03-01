import dispatchTypes from '../constants';

export const setUser = (user) => dispatch => dispatch({type: dispatchTypes.setUser, payload: user })