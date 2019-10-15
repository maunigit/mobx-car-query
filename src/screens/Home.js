import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { observer, inject } from 'mobx-react';
import { Button, List } from 'react-native-paper';
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
    return (
      <View style={globalStyles.homeContainer}>
        <TouchableOpacity >
          <List.Item button onPress={() => this.props.navigation.navigate('Year')} 
            title={'Year'} description={'Select a year'}
            left={props => <List.Icon {...props} icon="calendar-range"/>}/>
        </TouchableOpacity>
        <TouchableOpacity >
          <List.Item button onPress={() => this.props.navigation.navigate('Make')}
            title={'Make'} description={'Select a make'}
            left={props => <List.Icon {...props} icon="car"/>}/>
        </TouchableOpacity>           
        <TouchableOpacity >
          <List.Item button onPress={() => this.props.navigation.navigate('Model')} 
            title={'Model'} description={'Avaiable models of a make'} disabled={true} 
            left={props => <List.Icon {...props} icon="car-side"/>}/>
        </TouchableOpacity>   
        <TouchableOpacity >
          <List.Item button onPress={() => this.props.navigation.navigate('Trim')} 
            title={'Trim'} description={'Avaiable trims of a model'} disabled={true} 
            left={props => <List.Icon {...props} icon="engine-outline"/>}/>
        </TouchableOpacity>
        <View style={globalStyles.button}>
          <Button
            color="orange"
            mode="contained"
            onPress={() => this.props.navigation.navigate('Detail')}>
            show details
          </Button>
        </View>        
      </View>    
    );
  }
}
