import React, { useState } from 'react';
import { Image, Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import InputText from '../../components/input/text-input';
import colors from '../../constants/colors';
import SafeAreaContainer from '../../containers/safe-area-container';
import { TextMedium, TextSmall } from '../../components/text';
import images from '../../assets/images';
import { toggleTheme } from '../../redux/actions/user';
import routes from '../../constants/routes';
import Button from '../../components/buttons';
import { SunIcon, MoonIcon } from '../../assets/svgs'
import { useDispatch, useSelector } from 'react-redux';

const Home = ({ navigation }) => {

    const [username, setUserName] = useState('');
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const { theme } = useSelector(state => state.userDetails);

    const onSubmit = () => {
        if (!username.length) setError('Please enter username')
        else navigation.navigate(routes.repos, { username })
    }

    return (
        <SafeAreaContainer>
            <TouchableOpacity style={styles.themeContainer} onPress={() => dispatch(toggleTheme())}>
                {theme.title === 'light' ? <SunIcon height={25} width={25} /> : <MoonIcon height={25} width={25} />}
            </TouchableOpacity>
            <View style={styles.container}>
                <Image source={images.logoDark} style={styles.logo} />
                <TextMedium>Search on Git Hub</TextMedium>
                <InputText placeholder='Enter Github Username' onChange={setUserName} value={username} />
                {error ? <TextSmall fullWidth align='left' style={{ color: colors.red }}>{error}</TextSmall> : null}
                <Button onPress={onSubmit} title='Search' />
            </View>
        </SafeAreaContainer>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, paddingHorizontal: 20, justifyContent: 'center', alignItems: 'center' },
    logo: { height: 100, width: 100, backgroundColor: 'white', borderRadius: 50 },
    themeContainer: { alignSelf: 'flex-end', paddingHorizontal: 20, paddingVertical: Platform.OS === 'ios' ? 10 : 5 }
})

export default Home;