import React from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { observer, inject } from 'mobx-react';
import { Text } from 'react-native-paper';
import ListItemNoIcon from '../components/ListItemNoIcon';

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
      this.props.store.trims = data.Trims;
      console.log(JSON.stringify(data.Trims));
      this.setState({ isLoading: false });
    } catch (error) {
      alert(error);
    }
  };

  //Press on a trim
  goToDetail = trim => {
    console.log('Trim selected is: ' + trim.model_trim);
    console.log('This trim has model_id: ' + trim.model_id);
    this.props.store.trim_model_id = trim.model_id;
    this.props.navigation.navigate('Detail');
  };

  keyExtractor = (item, index) => index.toString();

  //Render every item of the list
  renderItem = ({ item }) => {
    return <ListItemNoIcon onPressItem={() => this.goToDetail(item)} title={item.model_trim} />;
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
        <View style={[styles.mainContainer, styles.horizontal]}>
          <ActivityIndicator size="large" color="green" />
        </View>
      );
    } else if (this.props.store.trims.length == 0) {
      return (
        <View style={styles.paragraph}>
          <Text>Sorry, no trim is present.</Text>
          <Text>Please choose another model.</Text>
        </View>
      );
    } else {
      return <View style={styles.mainContainer}>{this.showTrims()}</View>;
    }
  }
}

//Style
const styles = StyleSheet.create({
  mainContainer: { flex: 1, justifyContent: 'center' },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },  
  paragraph: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
