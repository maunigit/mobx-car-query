import React from 'react';
import { Button, View, Text } from 'react-native';
import { observer, inject } from 'mobx-react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

@inject('store')
@observer
export default class HomeScreen extends React.Component {
  
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Home',
  };

  //asynch version of the fetch
  fetchAsyncCarApi = async url => {
    try {
      let response = await fetch(url);
      let data = await response.json();
      this.props.store.data = data.Makes;
      //print Makes object
      console.log(JSON.stringify(data.Makes));
    } catch (error) {
      alert(error);
    }
  };

  fetchCarAndNavigate = async () => {
    await this.fetchCar();
    this.props.navigation.navigate('Models');
  };

  fetchCar = async () => {
    var urlCarQuery =
      'https://www.carqueryapi.com/api/0.3/?&cmd=getModels&make=ford&year=2010&body=SUV';
    var urlCarMakes = 'https://www.carqueryapi.com/api/0.3/?&cmd=getMakes';
    await this.fetchAsyncCarApi(urlCarMakes);
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="View Car"
          color="green"
          onPress={this.fetchCarAndNavigate}
        />
      </View>
    );
  }
}
