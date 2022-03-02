import React, { useMemo } from 'react';
import { Platform, StyleSheet, TouchableOpacity } from "react-native";
import { CodeIcon } from '../assets/svgs';
import colors from '../constants/colors';
import routes from '../constants/routes';
import Row from '../containers/row';
import moment from 'moment';
import { TextMedium, TextSmall } from "./text";

const RepositoryCard = ({ repo, navigation }) => useMemo(() => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(routes.readMe, {repo: repo.full_name})} style={styles.container}>
            <TextMedium style={{ color: colors.blue }} align='left'>{repo.name}</TextMedium>
            {repo.description ? <TextSmall containerStyle={{ marginTop: Platform.OS === 'ios' ? 5 : 0 }} style={{ color: colors.textGray }} align='left'>{repo.description}</TextSmall> : null}
            <Row style={{ marginTop: 10 }}>
                {repo.language ? <Row>
                    <CodeIcon height={15} width={15} />
                    <TextSmall style={{ color: colors.textGray, marginLeft: 5 }}>{repo.language}</TextSmall>
                </Row> : null}
                <TextSmall containerStyle={{ marginLeft: repo.language ? 10 : 0 }} align='left' style={{ color: colors.textGray }}>{`Updated on ${moment(repo.updated_at).format('DD MMM YYYY')}`}</TextSmall>
            </Row>
        </TouchableOpacity>
    );
}, [repo, navigation])

const styles = StyleSheet.create({
    container: { borderWidth: 1, borderColor: colors.gray, borderRadius: 6, marginBottom: 10, paddingHorizontal: 15, paddingVertical: 10 }
})

export default RepositoryCard;