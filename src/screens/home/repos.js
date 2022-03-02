import React, { useEffect, useState } from 'react';
import { FlatList, Image, Platform, StyleSheet, View } from 'react-native';
import Row from '../../containers/row';
import colors from '../../constants/colors';
import { TextLarge, TextMedium, TextSmall } from '../../components/text';
import SafeAreaContainer from '../../containers/safe-area-container';
import Loader from '../../components/loader';
import { PeopleIcon, PeopleLightIcon } from '../../assets/svgs';
import fonts from '../../constants/fonts';
import RepositoryCard from '../../components/repo-card';
import Header from '../../components/header';
import { useSelector } from 'react-redux';

const Repos = ({ navigation, route }) => {

    const { username } = route.params;
    const [owner, setOwner] = useState(null);
    const { theme } = useSelector(state => state.userDetails);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const [loadingMore, setLoadingMore] = useState(false);
    const [repos, setRepos] = useState([]);

    const fetchRepositories = () => fetch(`https://api.github.com/users/${username}/repos?per_page=10&page=${page}`)

    const getMoreRepos = () => {
        fetchRepositories()
            .then(res => { setPage(page + 1); return res.json() })
            .then(moreRepos => {
                if (moreRepos.length) {
                    setRepos([...repos, ...moreRepos])
                } else setHasMore(false)
                setLoadingMore(false);
            })
    }

    useEffect(() => {
        setLoading(true);
        fetch(`https://api.github.com/users/${username}`)
            .then(res => res.json())
            .then(user => {
                if (user.login) {
                    setOwner(user);
                    return fetchRepositories()
                } else setOwner(null);
            })
            .then(res => { setPage(page + 1); return res.json() })
            .then(repos => {
                if (Array.isArray(repos)) setRepos(repos);
                else setRepos([])
                setLoading(false);
            })
            .catch(err => { setLoading(false) })
    }, [])

    const Profile = () => (
        <Row>
            <Image source={{ uri: owner.avatar_url }} style={{ height: 80, width: 80, borderRadius: 50 }} />
            <View style={{ flex: 1, alignItems: 'flex-start', paddingLeft: 20 }}>
                <TextMedium align='left'>{owner.name ? `${owner.name} (${owner.login})` : owner.login}</TextMedium>
                <Row style={{ marginVertical: Platform.OS === 'android' ? 0 : 10 }}>
                    {theme.title === 'light' ? <PeopleLightIcon height={20} width={20} /> : <PeopleIcon height={20} width={20} />}
                    <TextSmall style={{ fontFamily: fonts.semiBold }} containerStyle={{ marginLeft: 10 }}>{owner.following}</TextSmall>
                    <TextSmall containerStyle={{ marginLeft: 5 }}>Following</TextSmall>
                    <TextSmall style={{ fontFamily: fonts.semiBold }} containerStyle={{ marginLeft: 10 }}>{owner.followers}</TextSmall>
                    <TextSmall containerStyle={{ marginLeft: 5 }}>Followers</TextSmall>
                </Row>
            </View>
        </Row>
    )

    return (
        <SafeAreaContainer>
            <Header heading={username} />
            <View style={styles.container}>
                {loading ? <Loader /> :
                    owner ?
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            onEndReached={() => { if (hasMore) setLoadingMore(true); getMoreRepos() }}
                            ListFooterComponent={loadingMore ? <Loader /> : null}
                            ListHeaderComponent={<><Profile /><TextLarge containerStyle={{ marginVertical: 20 }} align='left'>Repositories</TextLarge></>}
                            data={repos}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => <RepositoryCard navigation={navigation} repo={item} />}
                            ListEmptyComponent={<TextMedium>No Repositories added</TextMedium>}
                        />
                        : <TextMedium containerStyle={{ marginVertical: 40 }}>User not found with this username</TextMedium>
                }
            </View>
        </SafeAreaContainer>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, paddingHorizontal: 20, paddingTop: 10 }
})

export default Repos;