import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ChevronBackIcon, ChevronBackLightIcon, MoonIcon, SunIcon } from '../assets/svgs';
import Row from '../containers/row';
import { toggleTheme } from '../redux/actions/user';
import { TextMedium } from './text';

const Header = ({ heading, small }) => {

    const { goBack } = useNavigation();
    const { theme } = useSelector(state => state.userDetails);
    const dispatch = useDispatch();

    return (
        <Row style={styles.container}>
            <Row>
                <TouchableOpacity onPress={() => goBack()}>{theme.title === 'light' ? <ChevronBackLightIcon height={30} width={30} /> :<ChevronBackIcon height={30} width={30} />}</TouchableOpacity>
                <TextMedium style={{ fontSize: 20 }} containerStyle={{ marginLeft: 10 }} >{heading}</TextMedium>
            </Row>
            <TouchableOpacity onPress={() => dispatch(toggleTheme())}>
                {theme.title === 'light' ? <SunIcon height={25} width={25} /> : <MoonIcon height={25} width={25} />}
            </TouchableOpacity>
        </Row>
    );
}

const styles = StyleSheet.create({
    container: { paddingHorizontal: 15, paddingVertical: Platform.OS === 'ios' ? 10 : 5, justifyContent:'space-between' }
})

export default Header;