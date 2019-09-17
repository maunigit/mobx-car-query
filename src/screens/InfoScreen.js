import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { observer, inject } from "mobx-react";

@inject("store")
@observer
export default class InfoScreen extends React.Component {
  //Screen navigation
  static navigationOptions = {
    title: "Info"
  };

  //Info of the car
  showDetails = () => {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.paragraph}>
          Model: {this.props.store.model} Country: {this.props.store.country}
        </Text>
      </View>
    );
  };

  //Show car info
  render() {
    return (
      <View style={styles.mainContainer}>
        {this.showDetails()}
      </View>
    );
  }
}

//Style
const styles = StyleSheet.create({
  mainContainer: { flex: 1, justifyContent: "center" },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: "center"
  }
});
