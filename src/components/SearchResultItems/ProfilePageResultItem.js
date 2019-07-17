import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import * as defaults from '../../helpers/DefaultValues';
import styles from './styles';

class ProfilePageResultItem extends Component {
  render() {
    const { age, adID, petBrand } = this.props;
    return (
      <TouchableOpacity>
        <View style={styles.profilePageResultItemContainerStyle}>
          <View style={styles.profilePageResultItemImageContainerStyle}>
            <Image
              source={{ uri: `${defaults.BASE_URL_AD}${adID}/images/0` }}
              style={styles.profilePageResultItemImageStyle}
            />
          </View>
          <Text style={styles.profilePageResultItemTextStyle}>
            {age} yaşında {petBrand}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default ProfilePageResultItem;
