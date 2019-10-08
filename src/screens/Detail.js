import React from 'react';
import { View, StyleSheet } from 'react-native';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
export default class Detail extends React.Component {
  //Screen navigation
  static navigationOptions = {
    title: 'Detail',
  };

  async componentDidMount() {
    console.log('DetailScreen - componentDidMount');
    await this.getDetails();
  }

  //Fetch details
  getDetails = async () => {
    try {
      let URL_DETAILS = 'https://www.carqueryapi.com/api/0.3/?&cmd=getModel&model=' +
        this.props.store.trim_model_id;
      console.log('URL_DETAILS è: ' + URL_DETAILS);
      let response = await fetch(URL_DETAILS);
      let data = await response.json();
      //Store details
      this.props.store.details = data;
      console.log(JSON.stringify(data));
    } catch (error) {
      alert(error);
    }
  };

  //List of details
  showDetails = () => {
    if (this.props.store.details) {
      return null;
    } else {
      return null;
    }
  };

  //Show details
  render() {
    return <View style={styles.mainContainer}>{this.showDetails()}</View>;
  }
}

//Style
const styles = StyleSheet.create({
  mainContainer: { flex: 1, justifyContent: 'center' },
});
