import React from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { observer, inject } from 'mobx-react';
import ListItemIcon from '../components/ListItemIcon';

const URL_MAKES = 'https://www.carqueryapi.com/api/0.3/?cmd=getMakes&year=-1';

@inject('store')
@observer
export default class Make extends React.Component {
  state = { isLoading: true };

  //Screen navigation
  static navigationOptions = {
    title: 'Make',
  };

  componentDidMount() {
    console.log('MakeScreen - componentDidMount');
    this.getMakes();
  }

  //Fetch Makes
  getMakes = async () => {
    try {
      let response = await fetch(URL_MAKES);
      let data = await response.json();
      this.props.store.makes = data.Makes;
      console.log(JSON.stringify(data.Makes));
      this.setState({ isLoading: false });
    } catch (error) {
      alert(error);
    }
  };

  //Press on a Make
  goToYear = make => {
    console.log('Make_id selected is: ' + make);
    this.props.store.make = make;
    this.props.navigation.navigate('Year');
  };

  keyExtractor = (item, index) => index.toString();

  //Render every item of the list
  renderItem = ({ item }) => {
    return (
      <ListItemIcon onPressItem={this.goToYear} title={item.make_display} icon={item.make_id} />
    );
  };

  //List of Makes
  showMakes = () => {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={this.props.store.makes}
        renderItem={this.renderItem}
      />
    );
  };

  //Show Makes
  render() {
    if (this.state.isLoading) {
      return (
        <View style={[styles.mainContainer, styles.horizontal]}>
          <ActivityIndicator size="large" color="green" />
        </View>
      );
    } else {
      return <View style={styles.mainContainer}>{this.showMakes()}</View>;
    }
  }
}

//Style
const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
