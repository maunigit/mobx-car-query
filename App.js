import React from "react";
import { View, StyleSheet } from "react-native";
import { createAppContainer } from "@react-navigation/native";
import { createStackNavigator } from "react-navigation-stack";
import { Provider } from "mobx-react";
import Store from "./src/stores/Store";
import HomeScreen from "./src/screens/HomeScreen";
import ModelsScreen from "./src/screens/ModelsScreen";
import InfoScreen from "./src/screens/InfoScreen";

//Navigation roots
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Models: ModelsScreen,
    Info: InfoScreen
  },
  {
    initialRouteName: "Home",
    //Screen header config
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "black"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const AppContainer = createAppContainer(RootStack);

//Navigable app
export default class App extends React.Component {
  render() {
    return (
      //For use the store
      <Provider store={Store}>
        <View style={styles.container}>
          <AppContainer />
        </View>
      </Provider>
    );
  }
}

//Style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  }
});
