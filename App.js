import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'mobx-react';
import Store from './src/stores/Store';
import HomeScreen from './src/screens/HomeScreen';
import ModelsScreen from './src/screens/ModelsScreen';
import InfoScreen from './src/screens/InfoScreen';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Models: ModelsScreen,
    Info: InfoScreen,
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <View style={styles.container}>
          <AppContainer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
