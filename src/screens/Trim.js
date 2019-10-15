import React from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { observer, inject } from 'mobx-react';
import { Text } from 'react-native-paper';
import ListItemNoIcon from '../components/ListItemNoIcon';
import globalStyles from '../styles/Style';

@inject('store')
@observer
export default class Trim extends React.Component {
  state = { isLoading: true };

  //Screen navigation
  static navigationOptions = {
    title: 'Trim',
  };

  componentDidMount() {
    console.log('TrimScreen - componentDidMount');
    this.getTrims();
  }

  //Fetch trims
  getTrims = async () => {
    try {
      let URL_TRIMS =
        'https://www.carqueryapi.com/api/0.3/?&cmd=getTrims&make=' +
        this.props.store.make +
        '&year=' +
        this.props.store.year +
        '&model=' +
        this.props.store.model;
      console.log('URL_TRIMS è: ' + URL_TRIMS);
      let response = await fetch(URL_TRIMS);
      let data = await response.json();
      let statusCode = response.status;
      if (statusCode != 200) {
        console.log('ERROR: statusCode is ' + statusCode);
      }
      this.props.store.trims = data.Trims;
      console.log(JSON.stringify(data.Trims));
      this.setState({ isLoading: false });
    } catch (error) {
      alert(error);
    }
  };

  goBack = trim => {
    console.log('Trim selected is: ' + trim.model_trim);
    console.log('This trim has model_id: ' + trim.model_id);
    this.props.store.trim_model_id = trim.model_id;
    console.log('Going back');
    this.props.navigation.goBack();
  };

  keyExtractor = (item, index) => index.toString();

  //Render every item of the list
  renderItem = ({ item }) => {
    if (item.model_trim == '') {
      item.model_trim = 'Default';
    }
    return <ListItemNoIcon onPressItem={() => this.goBack(item)} title={item.model_trim} />;
  };

  //List of trims
  showTrims = () => {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={this.props.store.trims}
        renderItem={this.renderItem}
      />
    );
  };

  //Show trims
  render() {
    if (this.state.isLoading) {
      return (
        <View style={[globalStyles.container, globalStyles.horizontal]}>
          <ActivityIndicator size="large" color="green" />
        </View>
      );
    } else if (this.props.store.trims.length == 0) {
      return (
        <View style={globalStyles.paragraphText}>
          <Text>Sorry, no trim is present.</Text>
          <Text>Please choose another model.</Text>
        </View>
      );
    } else {
      return <View style={globalStyles.container}>{this.showTrims()}</View>;
    }
  }
}
