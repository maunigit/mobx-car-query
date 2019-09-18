import React from "react";
import { Image, StyleSheet } from "react-native";
import { List, TouchableRipple } from 'react-native-paper';
import { ICONS_CAR } from "../constantsCars";

//To optimize cars list performance
export default class MyListItem extends React.PureComponent {
  //Cars png
  getIconCars = (iconName) => {
    let icon = ICONS_CAR[iconName];
    //Default car icon if we haven't the corresponding png
    if (!icon) {
      iconName = "circle_grey";
    }
    return ICONS_CAR[iconName];
  };

  //Press on car make
  _onPress = () => {
    this.props.onPressItem(this.props.icon);
  };

  //Show cars list
  render() {
    let iconCar = this.getIconCars(this.props.icon);
    return (
      <TouchableRipple>
        <List.Item button onPress={this._onPress}
          title={this.props.title}
          left={props => <Image source={iconCar} style={styles.images} />}
        />
      </TouchableRipple>
    );
  }
}

//Style
const styles = StyleSheet.create({
  images: { width: 30, height: 30 }
});
