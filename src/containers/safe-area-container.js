import React from 'react';
import { Platform, SafeAreaView, StatusBar } from "react-native";
import { useSelector } from 'react-redux';
import colors from '../constants/colors';

const SafeAreaContainer = ({ children }) => {

    const {theme} = useSelector(state => state.userDetails);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.background, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
            {children}
        </SafeAreaView>
    )
}

export default SafeAreaContainer;