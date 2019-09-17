import React from "react";
import { View, StyleSheet } from "react-native";
import { observer, inject } from "mobx-react";
import { FlatList } from "react-native";
import MyListItem from "../components/MyListItem";

@inject("store")
@observer
export default class ModelsScreen extends React.Component {
  //Screen navigation
  static navigationOptions = {
    title: "Models"
  };

  //Store model of the car
  selectedModel = (model) => {
    console.log('SelectedModel...');
    this.props.store.model = model;
    this.props.navigation.navigate("Info");
  };

  keyExtractor = (item, index) => index.toString();

  //Press on car model
  _onPressItem = (id) => {
      this.selectedModel(id);
  }

  //Render every item of the list
  renderItem = ({ item }) => {
    return(
    <MyListItem onPressItem={this._onPressItem} title={item.make_display}
      icon={item.make_id}
    />
    ); 
  };

  //List of the cars
  showCarData = () => {
    if (this.props.store.data) {
      return (
          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.props.store.data}
            renderItem={this.renderItem}
          />
      );
    } else {
      return null;
    }
  };

  //Show cars list
  render() {
    console.log('RENDERING...');
    return (<View style={styles.mainContainer}>{this.showCarData()}</View>);
  }
}

//Style
const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
    flex: 1
  }
});
