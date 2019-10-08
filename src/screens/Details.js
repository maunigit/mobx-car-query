import React from 'react';
import { View, StyleSheet } from 'react-native';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
export default class Details extends React.Component {
  //Screen navigation
  static navigationOptions = {
    title: 'Details',
  };

  async componentDidMount() {
    console.log('DetailsScreen - componentDidMount');
    await this.getDetails();
  }

  //Fetch details
  getDetails = async () => {
    try {
      let URL_DETAILS =
        'https://www.carqueryapi.com/api/0.3/?&cmd=getModel&make=' +
        this.props.store.make +
        '&year=' +
        this.props.store.year +
        '&model=' +
        this.props.store.model;
      console.log('URL_MODELS è: ' + URL_DETAILS);
      let response = await fetch(URL_DETAILS);
      let data = await response.json();
      //Store detail
      this.props.store.details = data;
      console.log(JSON.stringify(data));
    } catch (error) {
      alert(error);
    }
  };

  //List details of a car model
  showDetails = () => {
      return null;
  };

  //Show details
  render() {
    return <View style={styles.mainContainer}></View>;
  }
}

//Style
const styles = StyleSheet.create({
  mainContainer: { flex: 1, justifyContent: 'center' },
});
