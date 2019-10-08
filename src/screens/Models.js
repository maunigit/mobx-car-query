import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { observer, inject } from 'mobx-react';
import { Text } from 'react-native-paper';
import ListItemYearsModels from '../components/ListItemYearsModels';

@inject('store')
@observer
export default class Models extends React.Component {
  //Screen navigation
  static navigationOptions = {
    title: 'Models',
  };

  async componentDidMount() {
    console.log('ModelsScreen - componentDidMount');
    await this.getModels();
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
      //Store models
      this.props.store.models = data.Models;
      console.log(JSON.stringify(data.Models));
    } catch (error) {
      alert(error);
    }
  };

  //Press on a model
  goToDetails = model => {
    console.log('Model_name selected is: ' + model);
    this.props.store.model = model;
    this.props.navigation.navigate('Details');
  };

  keyExtractor = (item, index) => index.toString();

  //Render every item of the list
  renderItem = ({ item }) => {
    return (<ListItemYearsModels onPressItem={this.goToDetails} title={item.model_name}/>);
  };

  //List of models
  showModels = () => {
    if (!this.props.store.models.length == 0) {
      return (
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.store.models}
          renderItem={this.renderItem}
        />
      );
    } else {
      return (<View style={styles.paragraph}>
      <Text>Sorry, no model is present in this year.</Text>
      <Text>Please choose another year.</Text>
      </View>);
    }
  };

  //Show models
  render() {
    return <View style={styles.mainContainer}>{this.showModels()}</View>;
  }
}

//Style
const styles = StyleSheet.create({
  mainContainer: { flex: 1, justifyContent: 'center' },
  paragraph: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
