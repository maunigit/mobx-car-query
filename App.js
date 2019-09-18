import React from "react";
import { View, StyleSheet } from "react-native";
import { createAppContainer } from "@react-navigation/native";
import { createStackNavigator } from "react-navigation-stack";
import { Provider } from "mobx-react";
import { DefaultTheme, DarkTheme, Provider as PaperProvider } from 'react-native-paper';
import Store from "./src/stores/Store";
import Home from "./src/screens/Home";
import Makes from "./src/screens/Makes";
import Models from "./src/screens/Models";

//Theme of the app
const theme = {
  ...DefaultTheme,
  dark: true,
  roundness: 8,
  colors: {
      ...DefaultTheme.colors,
      primary: '#2F496E',
      accent: '#2988BC',
      error: '#ee0013',
      text: 'black',
      // surface: '#d7d8d6',    
      placeholder: '#FF5722',    
      notification: '#f2d7f2',
      disabled: '#B1AA7D',
      // backdrop: '#874630',
      background: '#6200ee',
  }
};



//Navigation roots
const RootStack = createStackNavigator(
  {
    Home: Home,
    Makes: Makes,
    Models: Models
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
        <PaperProvider theme={theme}>
          <View style={styles.container}>
            <AppContainer />
          </View>
        </PaperProvider>
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
