import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import InputText from '../../components/input/text-input';
import colors from '../../constants/colors';
import SafeAreaContainer from '../../containers/safe-area-container';
import { TextMedium, TextSmall } from '../../components/text';
import images from '../../assets/images';
import routes from '../../constants/routes';
import Button from '../../components/buttons';
import Loader from '../../components/loader';

const Home = ({ navigation }) => {

    const [username, setUserName] = useState('tkporter');
    const [error, setError] = useState(null);

    const onSubmit = () => {
        if (!username.length) setError('Please enter username')
        else navigation.navigate(routes.repos, { username })
    }

    return (
        <SafeAreaContainer>
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
    container: { flex: 1, backgroundColor: colors.black, paddingHorizontal: 20, justifyContent: 'center', alignItems: 'center' },
    logo: { height: 100, width: 100, backgroundColor: 'white', borderRadius: 50 }
})

export default Home;