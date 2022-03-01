import dispatchTypes from '../constants';

let initialState = {
    user: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case dispatchTypes.setUser:
            return { ...state, user: action.payload }
        default:
            return state;
    }
}