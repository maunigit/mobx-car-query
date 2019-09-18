import React from 'react';
import { View, StyleSheet } from 'react-native';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
export default class ModelsScreen extends React.Component {
  //Screen navigation
  static navigationOptions = {
    title: 'Models',
  };

  //Models of the car
  showDetails = () => {
    return <View style={styles.mainContainer} />;
  };

  //Show car models
  render() {
    return <View style={styles.mainContainer}>{this.showDetails()}</View>;
  }
}

//Style
const styles = StyleSheet.create({
  mainContainer: { flex: 1, justifyContent: 'center' },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});
