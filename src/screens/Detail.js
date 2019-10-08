import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { observer, inject } from 'mobx-react';
import { DataTable } from 'react-native-paper';

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
      return (
        <DataTable>
        <ScrollView>
          <DataTable.Row>
            <DataTable.Cell>Country of Origin:</DataTable.Cell>
            <DataTable.Cell numeric>USA</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Sold in US:</DataTable.Cell>
            <DataTable.Cell numeric>No</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Body Style:</DataTable.Cell>
            <DataTable.Cell numeric>Hatchback</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Engine Displacement (cubic inches):</DataTable.Cell>
            <DataTable.Cell numeric>97</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Fuel Economy City(l/100km):</DataTable.Cell>
            <DataTable.Cell numeric>Not Available</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Engine Fuel Type:</DataTable.Cell>
            <DataTable.Cell numeric>Gasoline - Premium</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>G</DataTable.Cell>
            <DataTable.Cell numeric>237</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>H</DataTable.Cell>
            <DataTable.Cell numeric>237</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>I</DataTable.Cell>
            <DataTable.Cell numeric>237</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>L</DataTable.Cell>
            <DataTable.Cell numeric>237</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>M</DataTable.Cell>
            <DataTable.Cell numeric>237</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>N</DataTable.Cell>
            <DataTable.Cell numeric>237</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>O</DataTable.Cell>
            <DataTable.Cell numeric>237</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>P</DataTable.Cell>
            <DataTable.Cell numeric>237</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Q</DataTable.Cell>
            <DataTable.Cell numeric>237</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>R</DataTable.Cell>
            <DataTable.Cell numeric>237</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>S</DataTable.Cell>
            <DataTable.Cell numeric>237</DataTable.Cell>
          </DataTable.Row>
        </ScrollView>
      </DataTable>
      );
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
