import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  AsyncStorage
} from 'react-native';

import styles from './styles';
import * as colors from '../helpers/ColorPalette';
import * as defaults from '../helpers/DefaultValues';

import bgImage from '../../assets/images/home-page-own-a-pet.jpg';
import pawIcon from '../../assets/icons/paw_icon.png';
import penIcon from '../../assets/icons/pen_icon.png';

class HomePage extends Component {
  state = {
    isLoggedIn: false
  };

  async componentWillMount() {
    // TODO: test amaçlı siliniyor
    // await AsyncStorage.removeItem('user');
    let user = await AsyncStorage.getItem('user');
    if (user) {
      this.setState({ isLoggedIn: true });
    }
  }

  render() {
    const { isLoggedIn } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.homePageContainerStyle}>
        <ImageBackground
          source={bgImage}
          style={styles.homePageImageBackgroundStyle}
          resizeMode='contain'
        >
          <View style={styles.homePageTopInfoContainerStyle}>
            <View style={styles.homePageInfoInnerContainerStyle}>
              <Text style={styles.homePageWritingTextStyle}>
                İlanlara bakmak için
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('ResultsPage')}
              >
                <View style={styles.homePageButtonContainerStyle}>
                  <Image
                    source={pawIcon}
                    style={{ width: 24, height: 24 }}
                    resizeMode='contain'
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.homePageBottomInfoContainerStyle}>
            <View
              style={[
                styles.homePageInfoInnerContainerStyle,
                { alignItems: 'flex-start' }
              ]}
            >
              <Text style={styles.homePageWritingTextStyle}>
                İlan vermek için
              </Text>
              <TouchableOpacity
                onPress={() => {
                  isLoggedIn
                    ? navigation.navigate('MyProfilePage')
                    : navigation.navigate('LoginPage');
                }}
              >
                <View style={styles.homePageButtonContainerStyle}>
                  <Image
                    source={penIcon}
                    style={{ width: 24, height: 24 }}
                    resizeMode='contain'
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default HomePage;
