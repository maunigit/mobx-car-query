import React from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { observer, inject } from 'mobx-react';
import { Text } from 'react-native-paper';
import ListItemIcon from '../components/ListItemIcon';
import globalStyles from '../styles/Style';

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
      let statusCode = response.status;
      if (statusCode != 200) {
        console.log('ERROR: statusCode is ' + statusCode);
      }
      this.props.store.makes = data.Makes;
      console.log(JSON.stringify(data.Makes));
      this.setState({ isLoading: false });
    } catch (error) {
      alert(error);
    }
  };

  goBack = make => {
    console.log('Make_id selected is: ' + make.make_id);
    this.props.store.make_id = make.make_id;
    this.props.store.make_display = make.make_display;
    console.log('Going back');
    this.props.store.model_name='';
    this.props.store.trim_id='';
    this.props.store.trim_name='';
    this.props.navigation.goBack();
  }

  keyExtractor = (item, index) => index.toString();

  //Render every item of the list
  renderItem = ({ item }) => {
    return (
      <ListItemIcon onPressItem={this.goBack} title={item.make_display} icon={item.make_id} save={item}/>
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
        <View style={[globalStyles.container, globalStyles.horizontal]}>
          <ActivityIndicator size="large" color="green" />
        </View>
      );
    } else if (this.props.store.makes.length == 0) {
      return (
        <View style={globalStyles.paragraphText}>
          <Text>Sorry, no make is present.</Text>
        </View>
      );
    } else {
      return <View style={globalStyles.container}>{this.showMakes()}</View>;
    }
  }
}
