import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { observer, inject } from 'mobx-react';
import ListItemMakes from '../components/ListItemMakes';

const URL_MAKES = 'https://www.carqueryapi.com/api/0.3/?cmd=getMakes&year=-1';

@inject('store')
@observer
export default class Makes extends React.Component {
  //Screen navigation
  static navigationOptions = {
    title: 'Makes',
  };

  async componentDidMount() {
    console.log('MakesScreen - componentDidMount');
    await this.getMakes();
  }

  //Fetch Makes
  getMakes = async () => {
    try {
      let response = await fetch(URL_MAKES);
      let data = await response.json();
      //Store Makes
      this.props.store.makes = data.Makes;
      //Print Makes object
      console.log(JSON.stringify(data.Makes));
    } catch (error) {
      alert(error);
    }
  };

  //Press on a Make
  goToYears = make => {
    console.log('Make selected is: ' + make);
    //Store Make
    this.props.store.make = make;
    this.props.navigation.navigate('Years');
  };

  keyExtractor = (item, index) => index.toString();

  //Render every item of the list
  renderItem = ({ item }) => {
    return (
      <ListItemMakes onPressItem={this.goToYears} title={item.make_display} icon={item.make_id} />
    );
  };

  //List of Makes
  showMakes = () => {
    if (this.props.store.makes) {
      return (
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.store.makes}
          renderItem={this.renderItem}
        />
      );
    } else {
      return null;
    }
  };

  //Show Makes
  render() {
    return <View style={styles.mainContainer}>{this.showMakes()}</View>;
  }
}

//Style
const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    flex: 1,
  },
});
