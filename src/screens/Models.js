import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { observer, inject } from 'mobx-react';
import { List, TouchableRipple } from 'react-native-paper';

@inject('store')
@observer
export default class Models extends React.Component {
  //Screen navigation
  static navigationOptions = {
    title: 'Models',
  };

  //TODO set make e year
  static URL_MODELS = 'https://www.carqueryapi.com/api/0.3/?&cmd=getModels&make=ford&year=2005';

  async componentDidMount() {
    console.log('ModelsScreen - componentDidMount');
    await this.getModels();
  }

  //Fetch models
  getModels = async () => {
    try {
      let response = await fetch(Models.URL_MODELS);
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
        <List.Item button onPress={this._onPressItem} title={item.model_name} />
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
      return null;
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
