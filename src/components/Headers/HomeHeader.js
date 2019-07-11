import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { withNavigation } from 'react-navigation';

import styles from './styles';
import homeIcon from '../../../assets/icons/home_icon.png';

class HomeHeader extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.homeHeaderContainerStyle}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.homeHeaderInnerContainerStyle}>
            <Image
              source={homeIcon}
              style={styles.homeHeaderIconImageStyle}
              resizeMode='contain'
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(HomeHeader);
