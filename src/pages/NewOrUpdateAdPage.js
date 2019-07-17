import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  AsyncStorage,
  ActivityIndicator
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import { addNewAd, addNewAdImage } from '../helpers/api/ads';
import { CenteredArea } from '../components/CenteredAreas';
import {
  BackHeader,
  HomeHeader,
  StaticTitleHeader
} from '../components/Headers';
import * as colors from '../helpers/ColorPalette';
import * as defaults from '../helpers/DefaultValues';
import styles from './styles';

const petTypeOptions = [{ key: 0, text: 'Köpek' }, { key: 1, text: 'Kedi' }];
const petGenderOptions = [{ key: 0, text: 'Erkek' }, { key: 1, text: 'Dişi' }];

// TODO: API call için bir setTimeout koyulabilir
// TODO: Image yüklenirken bir hata olursa default image göster

class NewOrUpdateAdPage extends Component {
  state = {
    title: 'Yuva Arıyor', // 'BLA' k
    content:
      '2 yaşındaki kızımız yuva arıyor. Ankara dışına sahiplendirme yapılmayacaktır.', //'bla bla bla' k
    age: '2', // 3 k
    city: 'Ankara', // 'Ankara' k
    district: 'Çankaya', // 'Çankaya' k
    petType: 0, // 0 k
    petBrand: 'Bebiş', // 'Bulldog'
    petGender: 1, // 0 k
    phone: '3232233232', // '05437372845' k
    images: [null, null, null],
    token: '',
    isLoading: false,
    isPageReady: false
  };

  async componentDidMount() {
    try {
      let userInStorage = await AsyncStorage.getItem('user');
      let parsedUserInStorage = JSON.parse(userInStorage);

      this.setState({ token: parsedUserInStorage.token, isPageReady: true });
    } catch (error) {
      // TODO: bir hata çıktığında anasayfaya yönlendirilebilir
      this.setState({ isPageReady: true });
      console.log(error);
    }
  }

  // TODO: redux-thunk'a taşınacak
  handleSendButton = async () => {
    this.setState({ isLoading: true });
    const { navigation } = this.props;
    const {
      title,
      content,
      age,
      city,
      district,
      petType,
      petBrand,
      petGender,
      phone,
      token,
      isLoading
    } = this.state;
    try {
      let ad = await addNewAd(
        title,
        content,
        age,
        city,
        district,
        petType,
        petBrand,
        petGender,
        phone,
        token
      );
      this.handleImagesUpload(ad._id, token);
    } catch (error) {
      //TODO: hatada başka sayfaya yönlendirilebilir
      console.log(error);
      this.setState({ isLoading: false });
    }
  };

  handleImagesUpload = async (id, token) => {
    const { images } = this.state;
    const { navigation } = this.props;

    let filteredImages = images.filter(image => {
      return image != null;
    });

    try {
      for await (let [index, image] of filteredImages.entries()) {
        if (image) {
          await addNewAdImage(id, token, image, index);
        }
      }
      navigation.navigate('MyProfilePage');
      this.setState({ isLoading: false });
    } catch (error) {
      // TODO: hatayı belirten bir uyarı koyulabilir (resimler yüklenirken bir sorun çıktı gibi)
      console.log(error);
      this.setState({ isLoading: false });
    }
  };

  handleImageButtonPress = async index => {
    const { images } = this.state;
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    let tempImages = [...images];
    let image = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      base64: true
    });

    if (!image.cancelled) {
      tempImages[index] = image;
      this.setState({ images: tempImages });
    }
  };

  handleImageDelete = index => {
    const { images } = this.state;
    let tempImages = [...images];
    tempImages[index] = null;
    this.setState({ images: tempImages });
  };

  renderImageAreas = () => {
    const { images } = this.state;
    return (
      <CenteredArea>
        <View style={styles.newAdPageTextInputAreaStyle}>
          {images.map((imageArea, index) => {
            return (
              <TouchableOpacity
                onPress={() => this.handleImageButtonPress(index)}
                key={index}
              >
                <View style={styles.newAdPageImageContainerStyle}>
                  {images[index] && (
                    <View
                      style={styles.newAdPageDeleteImageButtonContainerStyle}
                    >
                      <TouchableOpacity
                        onPress={() => this.handleImageDelete(index)}
                      >
                        <View
                          style={
                            styles.newAdPageDeleteImageButtonInnerContainerStyle
                          }
                        >
                          <Text>x</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  )}
                  {imageArea ? (
                    <Image
                      source={images[index]}
                      style={styles.newAdPageImageStyle}
                    />
                  ) : (
                    <Text>Resim</Text>
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </CenteredArea>
    );
  };

  renderTextInputArea = (
    title,
    valueOfTI,
    placeholder,
    maxLength,
    isSecureText,
    multiline
  ) => {
    return (
      <CenteredArea>
        <View style={styles.newAdPageTextInputAreaStyle}>
          <Text style={styles.newAdPageLabelTextStyle}>{title}: </Text>
          <TextInput
            style={[styles.newAdPageTextInputStyle, { textAlign: 'left' }]}
            onChangeText={value => this.setState({ [valueOfTI]: value })}
            value={this.state[valueOfTI]}
            selectionColor={colors.orange_oap}
            secureTextEntry={isSecureText}
            maxLength={maxLength}
            multiline={multiline}
            blurOnSubmit
            placeholder={placeholder}
          />
        </View>
      </CenteredArea>
    );
  };

  renderRadioButtons = (label, valueOfTI, options) => {
    return (
      <CenteredArea>
        <View style={styles.newAdPageTextInputAreaStyle}>
          <Text style={styles.newAdPageLabelTextStyle}>{label}: </Text>
          <View
            style={{
              flexDirection: 'row',
              width: defaults.WIDTH * 0.5,
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            {options.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => this.setState({ [valueOfTI]: item.key })}
                  key={index}
                >
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text>{item.text}</Text>
                    <View style={styles.newAdPageRadioButtonButtonStyle}>
                      {item.key === this.state[valueOfTI] && (
                        <View
                          style={styles.newAdPageRadioButtonSelectedStyle}
                        />
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </CenteredArea>
    );
  };

  render() {
    const { isLoading, isPageReady } = this.state;
    if (!isPageReady) {
      return <View style={{ flex: 1, backgroundColor: 'red' }} />;
    }
    return (
      <View style={styles.newAdPageContainerStyle}>
        <BackHeader />
        <HomeHeader />
        <ScrollView>
          <StaticTitleHeader headerTitle='Yeni İlan' />
          {this.renderTextInputArea(
            'Başlık',
            'title',
            'Yavrumuza yuva arıyoruz',
            24
          )}
          {this.renderTextInputArea(
            'Açıklama',
            'content',
            '3 yaşındaki kızımıza sıcak bir yuva arıyoruz. Ankara dışına sahiplendirme yapılmayacaktır.',
            240,
            false,
            true
          )}
          {this.renderTextInputArea('Telefon', 'phone', '5232322323', 10)}
          {this.renderTextInputArea('Şehir', 'city', 'Ankara', 18)}
          {this.renderTextInputArea('İlçe', 'district', 'Çankaya', 32)}
          {this.renderRadioButtons('Türü', 'petType', petTypeOptions)}
          {this.renderTextInputArea('Cinsi', 'petBrand', 'Bulldog', 32)}
          {this.renderTextInputArea('Yaşı', 'age', '3', 2)}
          {this.renderRadioButtons('Cinsiyet', 'petGender', petGenderOptions)}
          {this.renderImageAreas()}

          <CenteredArea>
            <View style={styles.newAdPageSendButtonContainerStyle}>
              <TouchableOpacity onPress={() => this.handleSendButton()}>
                <View style={styles.newAdPageSendButtonStyle}>
                  {isLoading ? (
                    <ActivityIndicator color={colors.white} size='small' />
                  ) : (
                    <Text>Gönder</Text>
                  )}
                </View>
              </TouchableOpacity>
            </View>
          </CenteredArea>
        </ScrollView>
      </View>
    );
  }
}

export default NewOrUpdateAdPage;
