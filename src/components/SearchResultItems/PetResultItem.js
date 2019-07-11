import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import styles from './styles';
import { CenteredArea } from '../CenteredAreas';
import * as colors from '../../helpers/ColorPalette';
import * as defaults from '../../helpers/DefaultValues';

import dog from '../../../assets/images/dog.png';
import cat from '../../../assets/images/cat.png';
import bird from '../../../assets/images/bird.png';

class PetResultItem extends Component {
  render() {
    const { ad, navigation } = this.props;

    return (
      <CenteredArea>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResultDetailPage', { ad })}
        >
          <View style={styles.petResultItemContainerStyle}>
            <Image
              style={styles.petResultItemImageStyle}
              source={{ uri: `${defaults.BASE_URL_AD}${ad._id}/images/0` }}
              resizeMode='cover'
            />
            <View style={styles.petResultItemInfoContainerStyle}>
              <Image
                style={styles.petResultItemPetImageStyle}
                source={dog}
                resizeMode='cover'
              />
              <View style={styles.petResultPetInfoContainerStyle}>
                <Text>{ad.petType}</Text>
                <Text style={{ marginTop: 8 }}>
                  {ad.district} / {ad.city}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </CenteredArea>
    );
  }
}

export default withNavigation(PetResultItem);
