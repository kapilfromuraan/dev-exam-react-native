import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';
import { ChevronBackIcon } from '../assets/svgs';
import Row from '../containers/row';
import { TextMedium } from './text';

const Header = ({ heading, small }) => {

    const { goBack } = useNavigation();

    return (
        <Row style={styles.container}>
            <TouchableOpacity onPress={() => goBack()}><ChevronBackIcon height={25} width={25} /></TouchableOpacity>
            <TextMedium containerStyle={{ marginLeft: 10 }} >{heading}</TextMedium>
        </Row>
    );
}

const styles = StyleSheet.create({
    container: { paddingHorizontal: 15, paddingVertical: Platform.OS === 'ios' ? 10 : 5 }
})

export default Header;