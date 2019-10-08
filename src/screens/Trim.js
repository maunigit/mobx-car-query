import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { observer, inject } from 'mobx-react';
import ListItemNoIcon from '../components/ListItemNoIcon';

@inject('store')
@observer
export default class Trim extends React.Component {
  //Screen navigation
  static navigationOptions = {
    title: 'Trim',
  };

  async componentDidMount() {
    console.log('TrimScreen - componentDidMount');
    await this.getTrims();
  }

  //Fetch trims
  getTrims = async () => {
    try {
      let URL_TRIMS = 'https://www.carqueryapi.com/api/0.3/?&cmd=getTrims&make=' +
        this.props.store.make + '&year=' + this.props.store.year + 
        '&model=' + this.props.store.model;
      console.log('URL_TRIMS è: ' + URL_TRIMS);
      let response = await fetch(URL_TRIMS);
      let data = await response.json();
      //Store trims
      this.props.store.trims = data.Trims;
      console.log(JSON.stringify(data.Trims));
    } catch (error) {
      alert(error);
    }
  };

  //Press on a model
  goToDetail = trim => {
    console.log('Trim selected is: ' + trim);
    this.props.store.trim = trim;
    this.props.navigation.navigate('Detail');
  };

  keyExtractor = (item, index) => index.toString();

  //TODO: mi serve il model_id
  //Render every item of the list
  renderItem = ({ item }) => {
    return (<ListItemNoIcon onPressItem={this.goToDetail} title={item.model_trim}/>);
  };

  //List of trims
  showTrims = () => {
    if (this.props.store.trims) {
      return (
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.store.trims}
          renderItem={this.renderItem}
        />
      );
    } else {
      return null;
    }
  };

  //Show trims
  render() {
    return <View style={styles.mainContainer}>{this.showTrims()}</View>;
  }
}

//Style
const styles = StyleSheet.create({
  mainContainer: { flex: 1, justifyContent: 'center' },
});
