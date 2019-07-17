import { createStackNavigator, createAppContainer } from 'react-navigation';

import {
  HomePage,
  LoginPage,
  SignAvatarPage,
  MyProfilePage,
  NewOrUpdateAdPage,
  ResultsPage,
  ResultDetailPage
} from '../pages';

//Animation
const FadeTransition = (index, position) => {
  const sceneRange = [index - 1, index];
  const outputOpacity = [0, 1];
  const transition = position.interpolate({
    inputRange: sceneRange,
    outputRange: outputOpacity
  });

  return {
    opacity: transition
  };
};

//Animation navigation config
const NavigationConfig = () => {
  return {
    screenInterpolator: sceneProps => {
      const position = sceneProps.position;
      const scene = sceneProps.scene;
      const index = scene.index;

      return FadeTransition(index, position);
    }
  };
};

const MainNavigatorWithoutContainer = createStackNavigator(
  {
    HomePage: { screen: HomePage },
    LoginPage: { screen: LoginPage },
    SignAvatarPage: { screen: SignAvatarPage },
    NewOrUpdateAdPage: { screen: NewOrUpdateAdPage },
    MyProfilePage: { screen: MyProfilePage },
    ResultsPage: { screen: ResultsPage },
    ResultDetailPage: { screen: ResultDetailPage }
  },
  {
    transitionConfig: NavigationConfig,
    headerMode: 'none',
    lazyLoad: true,
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);

export const MainNavigator = createAppContainer(MainNavigatorWithoutContainer);
