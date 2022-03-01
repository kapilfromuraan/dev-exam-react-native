import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, StyleSheet } from 'react-native';
import InputText from '../../components/input/text-input';
import colors from '../../constants/colors';
import { TextMedium, TextSmall } from '../../components/text';
import images from '../../assets/images';
import routes from '../../constants/routes';
import Button from '../../components/buttons';
import Loader from '../../components/loader';

const Home = ({ navigation }) => {

    const [username, setUserName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSubmit = () => {
        if (!username.length) setError('Please enter username')
        else {
            setError(null)
            setLoading(true);
            fetch(`https://api.github.com/users/${username}/repos`)
                .then(res => res.json())
                .then(repos => {
                    if (Array.isArray(repos)) {
                        setUserName('');
                        navigation.navigate(routes.repos, { repos })
                    } else {
                        setError('User not found with this username')
                    }
                    setLoading(false);
                })
                .catch(err => { setLoading(false) })
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image source={images.logoDark} style={styles.logo} />
            <TextMedium>Search on Git Hub</TextMedium>
            <InputText placeholder='Enter Github Username' onChange={setUserName} value={username} />
            {error ? <TextSmall align='left' style={{ color: colors.red }}>{error}</TextSmall> : null}
            {loading ? <Loader /> : <Button onPress={onSubmit} title='Search' />}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.black, paddingHorizontal: 20, justifyContent: 'center', alignItems: 'center' },
    logo: { height: 100, width: 100, backgroundColor: 'white', borderRadius: 50 }
})

export default Home;