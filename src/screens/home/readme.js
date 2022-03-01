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

const ReadMe = ({ route }) => {

    const { repo } = route.params;
    const [readMe, setReadMe] = useState(null);
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
            .catch(err => console.log('error'))
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
                                body: { color: 'white' },
                                a: { color: colors.blue }
                            }}
                        />
                    </ScrollView>
                }
            </View>
        </SafeAreaContainer>
    );
}

export default ReadMe;