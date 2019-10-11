import React from 'react';
import { View } from 'react-native';
import { observer, inject } from 'mobx-react';
import { Button } from 'react-native-paper';
import globalStyles from '../styles/Style';

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
      <View style={globalStyles.homeContainer}>
        <Button
          color="green"
          mode="contained"
          onPress={() => this.props.navigation.navigate('Make')}>
          View Car
        </Button>
      </View>
    );
  }
}
