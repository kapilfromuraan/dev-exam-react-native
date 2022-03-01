import React from 'react';
import { Platform, SafeAreaView, StatusBar } from "react-native";
import colors from '../constants/colors';

const SafeAreaContainer = ({ children }) => <SafeAreaView style={{ flex: 1, backgroundColor: colors.black, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>{children}</SafeAreaView>

export default SafeAreaContainer;