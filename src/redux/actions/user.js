import dispatchTypes from '../constants';

export const setUser = (user) => dispatch => dispatch({ type: dispatchTypes.setUser, payload: user })

export const toggleTheme = () => dispatch => dispatch({ type: dispatchTypes.toggleTheme })