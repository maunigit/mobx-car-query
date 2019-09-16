import React from "react";
import { View, StyleSheet, Image} from "react-native";
import { observer, inject } from "mobx-react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { ICONS_CAR } from "../constantsCars";

@inject("store")
@observer
export default class ModelsScreen extends React.Component {
  //Screen navigation
  static navigationOptions = {
    title: "Models"
  };

  //Store model of the car
  selectedModel = (model, country) => {
    console.log('selectedModel...');
    this.props.store.model = model;
    this.props.store.country = country;
    this.props.navigation.navigate("Info");
  };

  keyExtractor = (item, index) => index.toString();

  //Render every item of the list
  renderItem = ({ item }) => {
    let iconCar = this.getIconCars(item.make_id);
    //Debug
    if(false) {
    return(
    <ListItem
      button
      onPress={() => {
        this.selectedModel(item.make_id, item.make_country);
      }}
      title={item.make_display}
      leftAvatar={{ source: iconCar }}
      bottomDivider
      chevron
    />
    );
  }else{
    return(
      <Image style={{width: 50, height: 50}} source={this.iconCar} /> 
    );
  }    
  };

  //Cars png
  getIconCars = (iconName) => {
    let icon= ICONS_CAR[iconName];
    //Default car icon if we haven't the corresponding png
    if(!icon){
      iconName='circle_grey';
    }
    return ICONS_CAR[iconName];
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
    console.log('rendering...');
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
