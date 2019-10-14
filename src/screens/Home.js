import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { observer, inject } from 'mobx-react';
import { Button, List, TouchableRipple, Title } from 'react-native-paper';
import globalStyles from '../styles/Style';

@inject('store')
@observer
export default class Home extends React.Component {
  //Screen navigation
  static navigationOptions = {
    title: 'Home',
  };

  //Show filters
  render() {
    return (<View style={globalStyles.container}>
        <TouchableOpacity >
          <List.Item button onPress={() => this.props.navigation.navigate('Make')} title={'Make'} />
        </TouchableOpacity>
        <TouchableOpacity >
          <List.Item button onPress={() => this.props.navigation.navigate('Year')} title={'Year'} />
        </TouchableOpacity>   
        <TouchableOpacity >
          <List.Item button onPress={() => this.props.navigation.navigate('Model')} title={'Model'} />
        </TouchableOpacity>   
        <TouchableOpacity >
          <List.Item button onPress={() => this.props.navigation.navigate('Trim')} title={'Trim'} />
        </TouchableOpacity>
        <View style={globalStyles.homeContainer}>
        <Button
          color="orange"
          mode="contained"
          onPress={() => this.props.navigation.navigate('Detail')}>
          show details (app logic)
        </Button>
        <Button
          color="green"
          mode="contained"
          onPress={() => this.props.navigation.navigate('Make')}>
          show makes (web logic)
        </Button>
        </View>
    </View>);
  }
}
