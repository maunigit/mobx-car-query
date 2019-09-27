import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { observer, inject } from 'mobx-react';
import { List, TouchableRipple } from 'react-native-paper';

@inject('store')
@observer
export default class Years extends React.Component {
  //Screen navigation
  static navigationOptions = {
    title: 'Years',
  };

  keyExtractor = (item, index) => index.toString();

  _onPressItem = () => {
    this.props.navigation.navigate('Models');
  };
  
  //Render every item of the list
  renderItem = ({item}) => {
    return (
      <TouchableRipple>
        <List.Item
          button
          onPress={this._onPressItem}
          title={item.year}
        />
      </TouchableRipple>
    );
  };

  getYears = () => {
    let max=parseInt(this.props.store.maxYear);
    let min=parseInt(this.props.store.minYear);
    let years=[];
    for(max; max>=min;max--){      
      years.push({year: max});
    }
    return (years);
  }

  //List of the years
  showYears = () => {
    let years = this.getYears();
    if (this.props.store.maxYear) {
      return (
        <FlatList
          keyExtractor={this.keyExtractor}
          data={years}
          renderItem={this.renderItem}
        />
      );
    } else {
      return null;
    }
  };

  //Show car Years
  render() {
    console.log('YEARS RENDERING...');
    return <View style={styles.mainContainer}>{this.showYears()}</View>;
  }
}

//Style
const styles = StyleSheet.create({
  mainContainer: { flex: 1, justifyContent: 'center' },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});
