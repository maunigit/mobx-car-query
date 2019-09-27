import React from 'react';
import { View, StyleSheet } from 'react-native';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
export default class Models extends React.Component {
  //Screen navigation
  static navigationOptions = {
    title: 'Models',
  };

  //Show car models of the selected make
  render() {
    return <View style={styles.mainContainer}></View>;
  }
}

//Style
const styles = StyleSheet.create({
  mainContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
