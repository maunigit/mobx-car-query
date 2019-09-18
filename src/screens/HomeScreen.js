import React from "react";
import { View, StyleSheet } from "react-native";
import { observer, inject } from "mobx-react";
import { Button } from 'react-native-paper';

@inject("store")
@observer
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  //Screen navigation
  static navigationOptions = {
    title: "Home"
  };

  //Asynch fetch of cars
  fetchAsyncCar = async url => {
    try {
      let response = await fetch(url);
      let data = await response.json();
      //Store Makes
      this.props.store.data = data.Makes;
      //Print Makes object
      console.log(JSON.stringify(data.Makes));
    } catch (error) {
      alert(error);
    }
  };

  //Define the url to fetch
  setFetchCar = async () => {
    var urlCarMakes = "https://www.carqueryapi.com/api/0.3/?&cmd=getMakes";
    await this.fetchAsyncCar(urlCarMakes);
  };

  //Fetch car and navigate
  fetchCarAndNavigate = async () => {
    await this.setFetchCar();
    this.props.navigation.navigate("Makes");
  };

  //Show button to view car makes
  render() {
    return (
      <View style={styles.mainContainer}>
        <Button color="green" mode="contained" onPress={this.fetchCarAndNavigate}>
            View Car
        </Button>
      </View>
    );
  }
}

//Style
const styles = StyleSheet.create({
  mainContainer: { flex: 1, alignItems: "center", justifyContent: "center" }
});