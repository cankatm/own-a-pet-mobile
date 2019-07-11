import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { withNavigation } from 'react-navigation';

import styles from './styles';
import backIcon from '../../../assets/icons/back_icon.png';

class BackHeader extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.backHeaderContainerStyle}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.backHeaderInnerContainerStyle}>
            <Image
              source={backIcon}
              style={styles.backHeaderIconImageStyle}
              resizeMode='contain'
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(BackHeader);
