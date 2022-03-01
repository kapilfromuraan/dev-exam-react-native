import React from 'react';
import { Keyboard, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../constants/colors';
import { TextMedium } from '../text';

const Button = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={() => { Keyboard.dismiss(); onPress() }} style={styles.container}>
            <TextMedium style={{ color: colors.white }}>{title}</TextMedium>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: { backgroundColor: colors.green, height: 45, justifyContent: 'center', borderRadius: 6, alignSelf: 'stretch', alignItems: 'center', marginVertical: 10 }
})

export default Button;