import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { MainNavigator } from './src/helpers/PageStructure';
import * as colors from './src/helpers/ColorPalette';
import { store, persistor } from './src/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={styles.container}>
            <StatusBar hidden />
            <MainNavigator />
          </View>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  }
});
