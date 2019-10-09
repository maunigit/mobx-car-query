import React from 'react';
import { View, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { observer, inject } from 'mobx-react';
import { DataTable } from 'react-native-paper';

@inject('store')
@observer
export default class Detail extends React.Component {
  state = { isLoading: true };

  //Screen navigation
  static navigationOptions = {
    title: 'Detail',
  };

  componentDidMount() {
    console.log('DetailScreen - componentDidMount');
    this.getDetails();
  }

  //Fetch details
  getDetails = async () => {
    try {
      let URL_DETAILS =
        'https://www.carqueryapi.com/api/0.3/?&cmd=getModel&model=' +
        this.props.store.trim_model_id;
      console.log('URL_DETAILS è: ' + URL_DETAILS);
      let response = await fetch(URL_DETAILS);
      let data = await response.json();
      let obj = null;
      if (data.length > 0) {
        obj = data[0];
      }
      this.props.store.details = obj;
      console.log('data: ' + JSON.stringify(data));
      this.setState({ isLoading: false });
    } catch (error) {
      alert(error);
    }
  };

  //List of details
  showDetails = () => {
    let rows = [];
    let keys = Object.keys(this.props.store.details);
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let value = this.props.store.details[key];
      if (value!=null) {
        console.log('K: ' + key + ' V: ' + value);      
        //metti il check se elem è da saltare
        if (true) {
          // TODO: complete here...
          let keyDesc = key; // TODO: complete here...
          rows.push(
            <DataTable.Row key={i}>
              <DataTable.Cell key={'K' + i}>{keyDesc}</DataTable.Cell>
              <DataTable.Cell key={'V' + i} numeric>{value}</DataTable.Cell>
            </DataTable.Row>
          );
        }
      }      
    }
    return (
      <DataTable>
        <ScrollView>{rows}</ScrollView>
      </DataTable>
    );
  };

  //Show details
  render() {
    if (this.state.isLoading) {
      return (
        <View style={[styles.mainContainer, styles.horizontal]}>
          <ActivityIndicator animating={true} size="large" color="green" />
        </View>
      );
    } else {
      return <View style={styles.mainContainer}>{this.showDetails()}</View>;
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
});
