import React, { Component } from 'react';
import { View } from 'react-native';

import styles from './styles';

//centers children according to the screen width
class CenteredArea extends Component {
    static defaultProps = {
        marginTop: 0,
    }

    render() {
        const { children, marginTop } = this.props;
        return (
            <View style={[styles.centeredAreaContainerStyle,{ marginTop }]}>
                {children}
            </View>
        );
    }
}

export default CenteredArea;
