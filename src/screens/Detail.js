import React from 'react';
import { View, StyleSheet } from 'react-native';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
export default class Detail extends React.Component {
  //Screen navigation
  static navigationOptions = {
    title: 'Detail',
  };

  async componentDidMount() {
    console.log('DetailScreen - componentDidMount');
  }

  //Show details
  render() {
    return <View style={styles.mainContainer}></View>;
  }
}

//Style
const styles = StyleSheet.create({
  mainContainer: { flex: 1, justifyContent: 'center' },
});
