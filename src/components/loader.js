import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import colors from '../constants/colors';

const Loader = () => {
    return (
        <View style={{ alignItems:'center', marginVertical: 10}}>
            <ActivityIndicator size={40} color={colors.white} />
        </View>
    );
}

export default Loader;