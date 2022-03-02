import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';

const InputText = ({ placeholder, onChange, value }) => {

    const { theme } = useSelector(state => state.userDetails);

    return (
        <View style={[styles.container, {backgroundColor: theme.inputBackground}]}>
            <TextInput
                onChangeText={onChange}
                value={value}
                autoCapitalize='none'
                placeholder={placeholder}
                placeholderTextColor={theme.text}
                numberOfLines={1}
                style={[styles.input, { color: theme.text }]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { marginVertical: 10, alignSelf: 'stretch', borderRadius: 6 },
    input: { color: colors.white, paddingVertical: 0, fontSize: 16, height: 45, paddingHorizontal: 20, fontFamily: fonts.regular, paddingTop: 5 }
})

export default InputText;