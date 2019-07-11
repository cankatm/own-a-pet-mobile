import React, { Component } from 'react';
import { Text, View, Image, FlatList } from 'react-native';
import Swiper from 'react-native-swiper';

import styles from './styles';
import * as colors from '../helpers/ColorPalette';
import * as defaults from '../helpers/DefaultValues';

class ResultsPage extends Component {
  state = {};

  handleImages = () => {
    let filteredImages = [];
    const { navigation } = this.props;
    const ad = navigation.getParam('ad', null);

    ad.images.map((img, index) => {
      if (!!img.image) {
        filteredImages.push(
          <View
            key={index}
            style={{ width: defaults.WIDTH, height: defaults.WIDTH }}
          >
            <Image
              style={{
                width: defaults.WIDTH,
                height: defaults.WIDTH,
                resizeMode: 'cover'
              }}
              source={{
                uri: `${defaults.BASE_URL_AD}${ad._id}/images/${index}`
              }}
            />
          </View>
        );
      }
    });

    return filteredImages;
  };

  render() {
    return (
      <View style={styles.resultDetailPageContainerStyle}>
        <View style={styles.resultDetailPageSwiperContainerStyle}>
          <Swiper
            loop={false}
            showsButtons={false}
            dotColor={colors.white}
            activeDotColor={colors.red}
            height={defaults.WIDTH}
          >
            {this.handleImages()}
          </Swiper>
        </View>
      </View>
    );
  }
}

export default ResultsPage;
// source={{ uri: Object.values(photo).join('') }}
