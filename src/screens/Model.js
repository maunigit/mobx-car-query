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

  //Screen navigation
  static navigationOptions = {
    title: 'Model',
  };

  componentDidMount() {
    console.log('ModelScreen - componentDidMount');
    this.getModels();
  }

  //Fetch models
  getModels = async () => {
    try {
      let URL_MODELS =
        'https://www.carqueryapi.com/api/0.3/?&cmd=getModels&make=' +
        this.props.store.make +
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

  goBack = model => {
    console.log('Model_name selected is: ' + model);
    this.props.store.model = model;
    console.log('Going back');
    this.props.store.trim_model_id='';
    this.props.navigation.goBack();
  };

  keyExtractor = (item, index) => index.toString();

  //Render every item of the list
  renderItem = ({ item }) => {
    return <ListItemNoIcon onPressItem={this.goBack} title={item.model_name} />;
  };

  //List of models
  showModels = () => {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={this.props.store.models}
        renderItem={this.renderItem}
      />
    );
  };

  //Show models
  render() {
    if (this.state.isLoading) {
      return (
        <View style={[globalStyles.container, globalStyles.horizontal]}>
          <ActivityIndicator animating={true} size="large" color="green" />
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
