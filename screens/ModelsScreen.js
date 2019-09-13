import React from 'react';
import { View } from 'react-native';
import { observer, inject } from 'mobx-react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

@inject('store') @observer
export default class ModelsScreen extends React.Component {
  
  static navigationOptions = {
    title: 'Models',
  };

  selectedModel = (model, country) => {
    this.props.store.model = model;
    this.props.store.country = country;
    this.props.navigation.navigate('Info');
  };

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => (
    <ListItem
      button
      onPress={() => {
        this.selectedModel(item.make_id, item.make_country);
      }}
      title={item.make_display}
      leftAvatar={{ source: require('../assets/images/png-cars/abarth.png')}}
      bottomDivider
      chevron
    />
  );

  /*checkPngCars = (id) =>{
    let pngFolderPath = '../assets/images/png-cars/';
    let imgFormat = '.png'
    let make_id= '';
    make_id=id;
    let pngCar= pngFolderPath+make_id+imgFormat;
    if (RNFS.exists(pngCar)){
      console.log(make_id + " EXIST");
      return pngCar;
    } else {
      console.log("make_id.png DOES NOT EXIST, WE SET A DEFAULT .PNG");
      return pngFolderPath+'carSymbolNotAvailable'+imgFormat;
      }
  }*/

  showCarData = () => {
    if (this.props.store.data) {
      return (
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.store.data}
          renderItem={this.renderItem}
        />
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        {this.showCarData()}
      </View>
    );
  }
}
