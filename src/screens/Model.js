import React from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { observer, inject } from 'mobx-react';
import { Text } from 'react-native-paper';
import ListItemNoIcon from '../components/ListItemNoIcon';
import globalStyles from '../styles/Style';

@inject('store')
@observer
export default class Model extends React.Component {
  state = { isLoading: true };

  /**
   * Screen navigation options
   */
  static navigationOptions = {
    title: 'Model',
  };

  componentDidMount() {
    console.log('ModelScreen - componentDidMount');
    this.getModels();
  }

  /**
   * Fetch models
   */
  getModels = async () => {
    try {
      let URL_MODELS =
        'https://www.carqueryapi.com/api/0.3/?&cmd=getModels&make=' +
        this.props.store.make_id +
        '&year=' +
        this.props.store.year;
      console.log('URL_MODELS è: ' + URL_MODELS);
      let response = await fetch(URL_MODELS);
      let data = await response.json();
      let statusCode = response.status;
      if (statusCode != 200) {
        console.log('ERROR: statusCode is ' + statusCode);
      }
      this.props.store.models = data.Models;
      console.log(JSON.stringify(data.Models));
      this.setState({ isLoading: false });
    } catch (error) {
      alert(error);
    }
  };

  /**
   * Go back
   */
  goBack = item => {
    console.log('Model_name selected is: ' + item.model_name);
    this.props.store.model_name = item.model_name;
    console.log('Going back');
    this.props.store.trim_id='';
    this.props.store.trim_name='';
    this.props.navigation.goBack();
  };

  keyExtractor = (item, index) => index.toString();

  /**
   * Render every item of the list
   */
  renderItem = ({ item }) => {
    return <ListItemNoIcon onPressItem={this.goBack} title={item.model_name} save={item} />;
  };

  /**
   * List of models
   */
  showModels = () => {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={this.props.store.models}
        renderItem={this.renderItem}
      />
    );
  };

  /**
   * Show models
   */
  render() {
    if (this.state.isLoading) {
      return (
        <View style={[globalStyles.container, globalStyles.horizontal]}>
          <ActivityIndicator id="ai-indicator" animating={true} size="large" color="green" />
        </View>
      );
    } else if (this.props.store.models.length == 0) {
      return (
        <View style={globalStyles.paragraphText}>
          <Text>Sorry, no model is present in this year.</Text>
          <Text>Please choose another year.</Text>
        </View>
      );
    } else {
      return <View style={globalStyles.container}>{this.showModels()}</View>;
    }
  }
}
