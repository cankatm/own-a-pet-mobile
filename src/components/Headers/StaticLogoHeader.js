import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

class StaticLogoHeader extends Component {
  render() {
    return (
      <View style={styles.staticLogoHeaderContainerStyle}>
        <Text style={styles.staticLogoHeaderTitleStyle}>Own A Pet</Text>
      </View>
    );
  }
}

export default StaticLogoHeader;
