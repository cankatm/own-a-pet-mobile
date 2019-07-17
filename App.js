import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { MainNavigator } from './src/helpers/PageStructure';
import * as colors from './src/helpers/ColorPalette';
import * as defaults from './src/helpers/DefaultValues';
import { store, persistor } from './src/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={styles.container}>
            <StatusBar barStyle='dark-content' />
            {Platform.OS === 'ios' && (
              <View
                style={{
                  width: defaults.WIDTH,
                  height: 20,
                  backgroundColor: colors.white
                }}
              />
            )}
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
