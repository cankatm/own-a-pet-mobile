import React, { Component } from 'react';
import { Text, View, Image, FlatList } from 'react-native';
import Swiper from 'react-native-swiper';

import styles from './styles';
import * as colors from '../helpers/ColorPalette';
import * as defaults from '../helpers/DefaultValues';
import { CenteredArea } from '../components/CenteredAreas';
import { BackHeader, HomeHeader } from '../components/Headers';
import { petTypeFormatter, cityFormatter } from '../helpers/Formatter';

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
    const { navigation } = this.props;
    const ad = navigation.getParam('ad', null);

    return (
      <View style={styles.resultDetailPageContainerStyle}>
        <BackHeader />
        <HomeHeader />
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

        <CenteredArea>
          <Text style={{ fontSize: 32, textAlign: 'center' }}>{ad.title}</Text>
        </CenteredArea>
        <Text>{ad.content}</Text>
        <Text>{ad.age}</Text>
        <Text>{ad.city}</Text>
        <Text>{ad.district}</Text>
        <Text>{petTypeFormatter(ad.petType)}</Text>
        <Text>{ad.petBrand}</Text>
        <Text>{ad.phone}</Text>
      </View>
    );
  }
}

export default ResultsPage;
// source={{ uri: Object.values(photo).join('') }}
