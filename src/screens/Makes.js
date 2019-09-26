import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { observer, inject } from 'mobx-react';

import MyListItem from '../components/MyListItem';

@inject('store')
@observer
export default class Makes extends React.Component {
  //Screen navigation
  static navigationOptions = {
    title: 'Makes',
  };

  //Asynch fetch of cars
  fetchAsyncYear = async url => {
    try {
      let response = await fetch(url);
      let data = await response.json();
      //Store Years
      this.props.store.maxYear = data.Years.max_year;
      this.props.store.minYear = data.Years.min_year;
      //Print Years object
      console.log('MAX YEAR: ' + JSON.stringify(data.Years.max_year));
      console.log('MIN YEAR: ' + JSON.stringify(data.Years.min_year));
    } catch (error) {
      alert(error);
    }
  };

  //Define the url to fetch
  setFetchYear = async () => {
    var urlCarYear = 'https://www.carqueryapi.com/api/0.3/?&cmd=getYears';
    await this.fetchAsyncYear(urlCarYear);
  };

  //Fetch car and navigate
  fetchYearAndNavigate = async () => {
    await this.setFetchYear();
    this.props.navigation.navigate('Years');
  };

  //Store make of the car
  selectedMake = make => {
    console.log('SelectedMake...');
    this.props.store.make = make;
    this.fetchYearAndNavigate();    
  };

  keyExtractor = (item, index) => index.toString();

  //Press on car make
  _onPressItem = id => {
    this.selectedMake(id);
  };

  //Render every item of the list
  renderItem = ({ item }) => {
    return (
      <MyListItem onPressItem={this._onPressItem} title={item.make_display} icon={item.make_id} />
    );
  };

  //List of the cars
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

  //Show cars list
  render() {
    console.log('MAKES RENDERING...');
    return <View style={styles.mainContainer}>{this.showCarData()}</View>;
  }
}

//Style
const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    flex: 1,
  },
});
