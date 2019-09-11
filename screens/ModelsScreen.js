import React from 'react';
import { View } from 'react-native';
import { observer, inject } from 'mobx-react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

@inject('store')
@observer
export default class ModelsScreen extends React.Component {
  
  static navigationOptions = {
    title: 'Models',
  };

  selectedModel = (model, country) => {
    this.props.store.model = model;
    this.props.store.country = country;
    this.props.navigation.navigate('Info');
  };

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => (
    <ListItem
      button
      onPress={() => {
        this.selectedModel(item.make_id, item.make_country);
      }}
      title={item.make_display}
      bottomDivider
      chevron
    />
  );

  showCarData = () => {
    if (this.props.store.data) {
      return (
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.store.data}
          renderItem={this.renderItem}
        />
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        {this.showCarData()}
      </View>
    );
  }
}
