import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import {
  withNavigation,
  NavigationActions,
  StackActions
} from 'react-navigation';

import styles from './styles';
import homeIcon from '../../../assets/icons/home_icon.png';

class HomeHeader extends Component {
  handleHomeButtonPress = () => {
    const { navigation } = this.props;

    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'HomePage' })]
    });

    navigation.dispatch(resetAction);
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.homeHeaderContainerStyle}>
        <TouchableOpacity onPress={() => this.handleHomeButtonPress()}>
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
