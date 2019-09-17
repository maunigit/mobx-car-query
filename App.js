import React from "react";
import { View, StyleSheet } from "react-native";
import { createAppContainer } from "@react-navigation/native";
import { createStackNavigator } from "react-navigation-stack";
import { Provider } from "mobx-react";
import Store from "./src/stores/Store";
import HomeScreen from "./src/screens/HomeScreen";
import MakesScreen from "./src/screens/MakesScreen";
import ModelsScreen from "./src/screens/ModelsScreen";

//Navigation roots
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Makes: MakesScreen,
    Models: ModelsScreen
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
