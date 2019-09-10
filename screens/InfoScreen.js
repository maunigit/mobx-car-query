import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { observer, inject } from 'mobx-react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

@inject('store')
@observer
export default class ModelsScreen extends React.Component {

  static navigationOptions = {
    title: 'Info',
  };

  showDetails = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={styles.paragraph}>
          Model: {this.props.store.model} Country: {this.props.store.country}
        </Text>
      </View>
    );
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        {this.showDetails()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});
