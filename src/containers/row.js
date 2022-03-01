import React from 'react';
import { TouchableOpacity } from 'react-native';

const Row = ({ style, onPress, children }) => (
    <TouchableOpacity onPress={onPress} disabled={!onPress} style={[{ flexDirection: 'row', alignItems: 'center' }, style]}>
        {children}
    </TouchableOpacity>
);

export default Row;