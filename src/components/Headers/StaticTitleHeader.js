import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

class StaticTitleHeader extends Component {
  render() {
    const { headerTitle } = this.props;
    return (
      <View style={styles.staticLogoHeaderContainerStyle}>
        <Text style={styles.staticLogoHeaderTitleStyle}>
          {headerTitle || 'Own A Pet'}
        </Text>
      </View>
    );
  }
}

export default StaticTitleHeader;
