import { createStackNavigator, createAppContainer } from 'react-navigation';

import { LoginPage, ResultsPage, ResultDetailPage } from '../pages';

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
    ResultsPage: { screen: ResultsPage },
    ResultDetailPage: { screen: ResultDetailPage },
    LoginPage: { screen: LoginPage }
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
