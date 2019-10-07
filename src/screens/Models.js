import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { observer, inject } from 'mobx-react';
import { List, TouchableRipple, Text } from 'react-native-paper';

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
      //Print models object
      console.log(JSON.stringify(data.Models));
    } catch (error) {
      alert(error);
    }
  };

  keyExtractor = (item, index) => index.toString();

  //Render every item of the list
  renderItem = ({ item }) => {
    return (
      <TouchableRipple>
        <List.Item button title={item.model_name} />
      </TouchableRipple>
    );
  };

  //List of models
  showModels = () => {
    if (this.props.store.models) {
      return (
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.store.models}
          renderItem={this.renderItem}
        />
      );
    } else {
      return (
        <View style={styles.mainContainer}>
          <Text>Sorry, no model is present in this year. Please choose another year.</Text>
        </View>
      );
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
});
