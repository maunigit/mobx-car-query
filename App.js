import React from "react";
import { View, SafeAreaView } from "react-native";
import { Provider } from "mobx-react";
import { DefaultTheme, DarkTheme, Provider as PaperProvider } from 'react-native-paper';
import Store from "./src/stores/Store";
import AppNavigator from './src/navigation/AppNavigator';
import globalStyles from './src/styles/Style';

//Navigable app
export default class App extends React.Component {
  render() {
    return (
      //For use the store
      <Provider store={Store}>
        <PaperProvider theme={theme}>
          <SafeAreaView style={globalStyles.safeArea}>
            <View style={globalStyles.container}>
              <AppNavigator />
            </View>
          </SafeAreaView>
        </PaperProvider>
      </Provider>
    );
  }
}

//Theme of the app
const theme = {
  ...DefaultTheme,
  dark: false,
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