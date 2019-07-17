import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  AsyncStorage,
  TouchableOpacity,
  FlatList,
  ScrollView
} from 'react-native';

import { getMyProfile } from '../helpers/api/user';
import { getMyAds } from '../helpers/api/ads';
import { CenteredArea } from '../components/CenteredAreas';
import { ProfilePageResultItem } from '../components/SearchResultItems';
import {
  BackHeader,
  HomeHeader,
  StaticTitleHeader
} from '../components/Headers';
import * as colors from '../helpers/ColorPalette';
import * as defaults from '../helpers/DefaultValues';
import styles from './styles';

import plusIcon from '../../assets/icons/plus_icon.png';
import settingsIcon from '../../assets/icons/settings_icon.png';

class MyProfilePage extends Component {
  state = {
    isPageReady: false,
    user: null,
    ads: []
  };

  async componentDidMount() {
    try {
      let userInStorage = await AsyncStorage.getItem('user');
      let parsedUserInStorage = JSON.parse(userInStorage);
      let token = parsedUserInStorage.token;

      this.handleAPICalls(token);
    } catch (error) {
      this.setState({ isPageReady: true });
    }
  }

  handleAPICalls = async token => {
    this.setState({ isPageReady: false });
    try {
      let user = await getMyProfile(token);
      let ads = await getMyAds(token);
      this.setState({ user, ads, isPageReady: true });
    } catch (error) {
      this.setState({ isPageReady: true });
    }
  };

  render() {
    const { user, ads, isPageReady } = this.state;
    const { navigation } = this.props;
    if (!isPageReady) {
      return <View style={{ flex: 1, backgroundColor: 'red' }} />;
    }
    return (
      <View style={styles.myProfilePageContainerStyle}>
        <HomeHeader />
        <ScrollView>
          <StaticTitleHeader headerTitle='Profilim' />
          <CenteredArea>
            <View style={styles.myProfilePageProfileImageContainerStyle}>
              <Image
                style={styles.myProfilePageProfileImageStyle}
                source={{
                  uri: `${defaults.BASE_URL_USER}${user ? user._id : ''}/avatar`
                }}
                resizeMode='cover'
              />
            </View>
          </CenteredArea>

          <CenteredArea marginTop={16}>
            <Text style={{ fontSize: 32 }}>{user ? user.name : ''}</Text>
          </CenteredArea>
          <CenteredArea marginTop={8}>
            <View style={styles.myProfilePageVerificationContainerStyle}>
              <Text style={{ fontSize: 14 }}>Onaylı Kullanıcı:</Text>
              <View style={styles.myProfilePageVerificationImageStyle}>
                <Text style={{ fontSize: 12 }}>
                  {user && user.verified ? ':)' : ':('}
                </Text>
              </View>
            </View>
          </CenteredArea>

          <CenteredArea marginTop={24}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('NewOrUpdateAdPage')}
              >
                <View style={styles.myProfilePageButtonContainerStyle}>
                  <Image
                    source={plusIcon}
                    style={styles.myProfilePageIconImageStyle}
                    resizeMode='contain'
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.myProfilePageButtonContainerStyle}>
                  <Image
                    source={settingsIcon}
                    style={styles.myProfilePageIconImageStyle}
                    resizeMode='contain'
                  />
                </View>
              </TouchableOpacity>
            </View>
          </CenteredArea>

          <CenteredArea marginTop={32}>
            <Text style={{ fontSize: 22, textDecorationLine: 'underline' }}>
              İlanlarınız
            </Text>
          </CenteredArea>

          <CenteredArea>
            <FlatList
              data={ads}
              renderItem={({ item, index }) => (
                <ProfilePageResultItem
                  age={item.age}
                  adID={item._id}
                  petBrand={item.petBrand}
                />
              )}
              keyExtractor={item => item._id}
              ListFooterComponent={
                ads.length < 1 ? (
                  <Text>Henüz bir ilan vermediniz</Text>
                ) : (
                  <View style={{ height: 32 }} />
                )
              }
            />
          </CenteredArea>
        </ScrollView>
      </View>
    );
  }
}

export default MyProfilePage;
