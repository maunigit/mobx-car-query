import React from "react";
import { Button, View, StyleSheet } from "react-native";
import { observer, inject } from "mobx-react";

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
    this.props.navigation.navigate("Models");
  };

  //Show button to view car models
  render() {
    return (
      <View style={styles.mainContainer}>
        <Button
          title="View Car"
          color="green"
          onPress={this.fetchCarAndNavigate}
        />
      </View>
    );
  }
}

//Style
const styles = StyleSheet.create({
  mainContainer: { flex: 1, alignItems: "center", justifyContent: "center" }
});