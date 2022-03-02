import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { decode } from 'base-64';
import Loader from '../../components/loader';
import Header from '../../components/header';
import layout from '../../constants/layout';
import HTML from 'react-native-render-html';
import { Converter } from 'showdown';
import SafeAreaContainer from '../../containers/safe-area-container';
import colors from '../../constants/colors';
import { useSelector } from 'react-redux';
import { TextMedium } from '../../components/text';

const ReadMe = ({ route }) => {

    const { repo } = route.params;
    const {theme} = useSelector(state => state.userDetails);
    const [readMe, setReadMe] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`https://api.github.com/repos/${repo}/readme`)
            .then(res => res.json())
            .then(respones => {
                let mdContent = decode(respones?.content || '');
                let converter = new Converter();
                setReadMe(converter.makeHtml(mdContent));
                setLoading(false)
            })
            .catch(err => {setLoading(false)})
    }, [])

    return (
        <SafeAreaContainer>
            <Header heading='README.md' />
            <View style={{ paddingHorizontal: 15, paddingTop: 10 }}>
                {loading ? <Loader /> :
                    <ScrollView>
                        <HTML
                            contentWidth={layout.window.width}
                            source={{ html: readMe }}
                            tagsStyles={{
                                body: { color: theme.text },
                                a: { color: colors.blue }
                            }}
                        />
                    </ScrollView>
                }
                {readMe === '' && !loading ? <TextMedium>No reaadme content available</TextMedium> : null}
            </View>
        </SafeAreaContainer>
    );
}

export default ReadMe;