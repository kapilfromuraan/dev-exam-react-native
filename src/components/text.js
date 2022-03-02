import React from 'react';
import { Platform, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import colors from '../constants/colors';
import fonts from '../constants/fonts';

export const TextLarge = ({ containerStyle, children, style, onPress, align, fullWidth }) => {

    const { theme } = useSelector(state => state.userDetails);

    return <TouchableOpacity style={[fullWidth ? { width: '100%' } : null, containerStyle]} disabled={!onPress} onPress={onPress}><Text style={[{ fontSize: 28, color: theme.text, marginTop: Platform.OS === 'android' ? 3 : 0, fontFamily: fonts.medium, textAlign: align || 'center' }, style]}>{children}</Text></TouchableOpacity>
}

export const TextMedium = ({ containerStyle, children, style, onPress, align, fullWidth }) => {

    const { theme } = useSelector(state => state.userDetails);

    return <TouchableOpacity style={[fullWidth ? { width: '100%' } : null, containerStyle]} disabled={!onPress} onPress={onPress}><Text style={[{ fontSize: 16, color: theme.text, marginTop: Platform.OS === 'android' ? 3 : 0, fontFamily: fonts.medium, textAlign: align || 'center' }, style]}>{children}</Text></TouchableOpacity>
}

export const TextSmall = ({ containerStyle, children, style, onPress, align, fullWidth }) => {

    const { theme } = useSelector(state => state.userDetails);

    return <TouchableOpacity style={[fullWidth ? { width: '100%' } : null, containerStyle]} disabled={!onPress} onPress={onPress}><Text style={[{ fontSize: 12, color: theme.text, marginTop: Platform.OS === 'android' ? 3 : 0, fontFamily: fonts.regular, textAlign: align || 'center' }, style]}>{children}</Text></TouchableOpacity>
}