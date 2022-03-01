import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const Repos = ({ route }) => {

    const { repos } = route.params;

    console.log(repos.length)

    return (
        <SafeAreaView style={styles.container}>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.black }
})

export default Repos;