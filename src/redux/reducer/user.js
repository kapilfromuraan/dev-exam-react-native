import colors from '../../constants/colors';
import dispatchTypes from '../constants';

const dark = {
    title: 'dark',
    background: colors.black,
    text: colors.white,
    inputBackground: colors.transparentWhite,
}
const light = {
    title: 'light',
    background: colors.white,
    text: colors.black,
    inputBackground: colors.offWhite,
}

let initialState = {
    user: null,
    theme: light
}

export default (state = initialState, action) => {
    switch (action.type) {
        case dispatchTypes.setUser:
            return { ...state, user: action.payload }
        case dispatchTypes.toggleTheme:
            return { ...state, theme: state.theme.title === 'dark' ? light : dark }
        default:
            return state;
    }
}