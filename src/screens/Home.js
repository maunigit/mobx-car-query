import React from 'react';
import { View, StyleSheet } from 'react-native';
import { observer, inject } from 'mobx-react';
import { Button } from 'react-native-paper';

@inject('store')
@observer
export default class Home extends React.Component {
  //Screen navigation
  static navigationOptions = {
    title: 'Home',
  };

  //Show button to view Makes
  render() {
    return (
      <View style={styles.mainContainer}>
        <Button
          color="green"
          mode="contained"
          onPress={() => this.props.navigation.navigate('Makes')}>
          View Car
        </Button>
      </View>
    );
  }
}

//Style
const styles = StyleSheet.create({
  mainContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
