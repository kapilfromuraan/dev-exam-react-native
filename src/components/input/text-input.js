import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';

const InputText = ({ placeholder, onChange, value }) => {
    return (
        <View style={styles.container}>
            <TextInput
                onChangeText={onChange}
                value={value}
                autoCapitalize='none'
                placeholder={placeholder}
                placeholderTextColor={colors.white}
                numberOfLines={1}
                style={styles.input}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { backgroundColor: colors.transparentWhite, marginVertical: 10, alignSelf: 'stretch', borderRadius: 6 },
    input: { color: colors.white, paddingVertical: 0, fontSize: 16, color: colors.white, height: 45, paddingHorizontal: 20, fontFamily: fonts.regular, paddingTop: 5 }
})

export default InputText;