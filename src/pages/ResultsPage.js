import React, { Component } from 'react';
import { Text, View, Dimensions, FlatList } from 'react-native';

import { getAllAds } from '../helpers/api/ads';
import styles from './styles';
import { PetResultItem } from '../components/SearchResultItems';
import {
  StaticLogoHeader,
  BackHeader,
  HomeHeader
} from '../components/Headers';

class ResultsPage extends Component {
  state = {
    ads: [],
    pageIsReady: false
  };

  componentDidMount() {
    this.getAllAdsFromAPI();
  }

  getAllAdsFromAPI = async () => {
    try {
      let ads = await getAllAds();
      this.setState({ ads, pageIsReady: true });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { ads } = this.state;

    return (
      <View style={styles.resultsPageContainerStyle}>
        <BackHeader />
        <HomeHeader />
        <FlatList
          data={ads}
          ListHeaderComponent={<StaticLogoHeader />}
          renderItem={({ item, index }) => (
            <PetResultItem index={index} ad={item} />
          )}
          keyExtractor={item => item._id}
        />
      </View>
    );
  }
}

export default ResultsPage;
