import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';

const CAR_WIDTH = 100;
const MARGIN_VALUE = 16;

const { width, height } = Dimensions.get('window');

class LoginPage extends Component {
  render() {
    return (
      <View style={styles.loginPageContainerStyle}>
        <Text>Login</Text>
      </View>
    );
  }
}

export default LoginPage;
