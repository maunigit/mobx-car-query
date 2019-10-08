import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { observer, inject } from 'mobx-react';
import ListItemIcon from '../components/ListItemIcon';

const URL_MAKES = 'https://www.carqueryapi.com/api/0.3/?cmd=getMakes&year=-1';

@inject('store')
@observer
export default class Make extends React.Component {
  //Screen navigation
  static navigationOptions = {
    title: 'Make',
  };

  async componentDidMount() {
    console.log('MakeScreen - componentDidMount');
    await this.getMakes();
  }

  //Fetch Makes
  getMakes = async () => {
    try {
      let response = await fetch(URL_MAKES);
      let data = await response.json();
      //Store Makes
      this.props.store.makes = data.Makes;
      console.log(JSON.stringify(data.Makes));
    } catch (error) {
      alert(error);
    }
  };

  //Press on a Make
  goToYears = make => {
    console.log('Make_id selected is: ' + make);
    //Store Make
    this.props.store.make = make;
    this.props.navigation.navigate('Years');
  };

  keyExtractor = (item, index) => index.toString();

  //Render every item of the list
  renderItem = ({ item }) => {
    return (
      <ListItemIcon onPressItem={this.goToYears} title={item.make_display} icon={item.make_id} />
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
