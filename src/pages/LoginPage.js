import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  AsyncStorage
} from 'react-native';

import { loginUser, createUser } from '../helpers/api/user';
import styles from './styles';
import * as colors from '../helpers/ColorPalette';
import * as defaults from '../helpers/DefaultValues';
import {
  StaticTitleHeader,
  BackHeader,
  HomeHeader
} from '../components/Headers';
import { CenteredArea } from '../components/CenteredAreas';
import tickIcon from '../../assets/icons/tick_icon.png';

class LoginPage extends Component {
  state = {
    fullname: '',
    email: 'cankatm@gmail.com',
    password: '12341234',
    passwordRepeat: '',
    isLoginPage: true,
    isLoading: false
  };

  handleSignButton = async () => {
    const { fullname, email, password, isLoginPage } = this.state;
    const { navigation } = this.props;
    this.setState({ isLoading: true });
    if (isLoginPage) {
      try {
        let user = await loginUser(email, password);
        console.log(user);
        await AsyncStorage.setItem('user', JSON.stringify(user));
        this.setState({ isLoading: false });
        navigation.navigate('MyProfilePage');
      } catch (error) {
        alert('Bir hata oluştu, bilgilerinizi kontrol edin.');
        this.setState({ isLoading: false });
      }
    } else {
      try {
        let user = await createUser(fullname, email, password);
        console.log(user);
        await AsyncStorage.setItem('user', JSON.stringify(user));
        this.setState({ isLoading: false });
        navigation.navigate('SignAvatarPage');
      } catch (error) {
        alert('Bir hata oluştu, bilgilerinizi kontrol edin.');
        this.setState({ isLoading: false });
      }
    }
  };

  renderIcon = () => {
    const { isLoading } = this.state;
    if (isLoading) {
      return <ActivityIndicator size='small' color={colors.white} />;
    }
    return (
      <Image
        source={tickIcon}
        style={{ width: 24, height: 24 }}
        resizeMode='contain'
      />
    );
  };

  renderButtonArea = (textOne, textTwo) => {
    const { isLoading } = this.state;
    return (
      <CenteredArea>
        <View style={styles.loginPageTextInputAreaStyle}>
          <TouchableOpacity
            onPress={() =>
              this.setState({ isLoginPage: !this.state.isLoginPage })
            }
          >
            <Text style={styles.loginPageSwitchTextStyle}>
              {textOne}{' '}
              <Text
                style={[
                  styles.loginPageSwitchTextStyle,
                  {
                    color: colors.orange_oap,
                    textDecorationLine: 'underline'
                  }
                ]}
              >
                {textTwo}
              </Text>
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.handleSignButton()}
            disabled={isLoading}
          >
            <View style={styles.loginPageButtonContainerStyle}>
              {this.renderIcon()}
            </View>
          </TouchableOpacity>
        </View>
      </CenteredArea>
    );
  };

  renderTextInputArea = (title, valueOfTI, isSecureText) => {
    return (
      <CenteredArea>
        <View style={styles.loginPageTextInputAreaStyle}>
          <Text style={styles.loginPageLabelTextStyle}>{title}: </Text>
          <TextInput
            style={styles.loginPageTextInputStyle}
            onChangeText={value => this.setState({ [valueOfTI]: value })}
            value={this.state[valueOfTI]}
            selectionColor={colors.orange_oap}
            secureTextEntry={isSecureText}
          />
        </View>
      </CenteredArea>
    );
  };

  renderPage = () => {
    const { isLoginPage } = this.state;
    if (isLoginPage) {
      return (
        <View style={styles.loginPageCenterAreaStyle}>
          {this.renderTextInputArea('Email', 'email')}
          {this.renderTextInputArea('Şifre', 'password', true)}
          {this.renderButtonArea('Üye değilseniz', 'kayıt olun')}
        </View>
      );
    }

    return (
      <View style={styles.loginPageCenterAreaStyle}>
        {this.renderTextInputArea('Adınız', 'fullname')}
        {this.renderTextInputArea('Email', 'email')}
        {this.renderTextInputArea('Şifre', 'password', true)}
        {this.renderTextInputArea('Şifre tekrarı', 'passwordRepeat', true)}
        {this.renderButtonArea('Üyeyseniz', 'giriş yapın')}
      </View>
    );
  };

  render() {
    const {
      fullname,
      email,
      password,
      passwordRepeat,
      isLoginPage
    } = this.state;

    return (
      <View style={styles.loginPageContainerStyle}>
        <BackHeader />
        <HomeHeader />
        <StaticTitleHeader
          headerTitle={isLoginPage ? 'Giriş Yap' : 'Kayıt Ol'}
        />

        {this.renderPage()}
      </View>
    );
  }
}

export default LoginPage;
