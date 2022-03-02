import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useSelector } from 'react-redux';
import colors from '../constants/colors';

const Loader = () => {

    const {theme} = useSelector(state => state.userDetails);

    return (
        <View style={{ alignItems:'center', marginVertical: 10}}>
            <ActivityIndicator size={40} color={theme.text} />
        </View>
    );
}

export default Loader;