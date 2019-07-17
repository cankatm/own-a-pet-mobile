import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  Alert,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  AsyncStorage
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import { uploadAvatar } from '../helpers/api/user';
import * as colors from '../helpers/ColorPalette';
import styles from './styles';
import { PetResultItem } from '../components/SearchResultItems';
import {
  StaticTitleHeader,
  BackHeader,
  HomeHeader
} from '../components/Headers';

import bodyImage from '../../assets/images/body.png';
import tickIcon from '../../assets/icons/tick_icon.png';

class SignAvatarPage extends Component {
  state = {
    image: null,
    user: null,
    imageUploading: false
  };

  async componentDidMount() {
    let user = await AsyncStorage.getItem('user');
    if (user) {
      this.setState({ user: JSON.parse(user) });
    }
  }

  componentWillUnmount() {}

  renderSpinner = () => {
    const { imageUploading } = this.state;

    if (imageUploading) {
      return <ActivityIndicator size='small' color={colors.white} />;
    }
    return (
      <Image
        source={tickIcon}
        style={{ width: 32, height: 32 }}
        resizeMode='contain'
      />
    );
  };

  handleImageButtonPress = async () => {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    let image = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      base64: true
    });

    if (!image.cancelled) {
      this.setState({ image });
      console.log(image);
      console.log(image);
    }
  };

  handleContinueButton = () => {
    const { image } = this.state;

    if (image) {
      this.handleAlert('Profil Resmi', "Profil resminiz hazırsa 'Devam'");
    } else {
      this.handleAlert(
        'Profil Resmi',
        "Profil resmi yüklemek zorunda değilsiniz, profil resmi olmadan 'Devam' edin"
      );
    }
  };

  handleImageUploadToServer = async () => {
    const { user, image } = this.state;
    const { navigation } = this.props;

    this.setState({ imageUploading: true });
    if (user) {
      try {
        await uploadAvatar(user.token, image);
        this.setState({ imageUploading: false });
        console.log('resim yüklendi');
        navigation.navigate('MyProfilePage');
      } catch (error) {
        this.setState({ imageUploading: false });
        console.log('resim yüklenemedi hata: ', error.message);
      }
    } else {
      console.log('user bulunamadı');
    }
  };

  handleAlert = (title, message) => {
    const { image } = this.state;

    Alert.alert(title, message, [
      {
        text: 'İptal',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      },
      {
        text: 'Devam',
        onPress: () => {
          image ? this.handleImageUploadToServer() : null;
        }
      }
    ]);
  };

  render() {
    const { image, imageUploading } = this.state;
    return (
      <View style={styles.signAvatarPageContainerStyle}>
        <BackHeader />
        <HomeHeader />
        <StaticTitleHeader headerTitle='Profil Resmi' />

        <View style={styles.signAvatarPageImageAndWritingContainerStyle}>
          {image && (
            <View style={styles.signAvatarPageXContainerStyle}>
              <TouchableOpacity
                disabled={imageUploading}
                onPress={() => this.setState({ image: null })}
              >
                <View style={styles.signAvatarPageXInnerContainerStyle}>
                  <Text style={styles.signAvatarPageXTextStyle}>X</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}

          <TouchableOpacity
            disabled={imageUploading}
            onPress={() => this.handleImageButtonPress()}
          >
            <View style={styles.signAvatarPageImageContainerStyle}>
              {image ? (
                <Image
                  source={image}
                  style={styles.signAvatarPageImageStyle}
                  resizeMode='cover'
                />
              ) : (
                <Text style={styles.signAvatarPagePlusTextStyle}>+</Text>
              )}
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.signAvatarPageBodyImageContainerStyle}>
          <Image
            source={bodyImage}
            style={styles.signAvatarPageBodyImageStyle}
          />
        </View>
        <View style={styles.signAvatarPageButtonContainerStyle}>
          <TouchableOpacity
            disabled={imageUploading}
            onPress={() => this.handleContinueButton()}
          >
            <View style={styles.signAvatarPageButtonInnerContainerStyle}>
              {this.renderSpinner()}
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SignAvatarPage;
