import React from "react";
import { Image, TouchableOpacity, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
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
      <TouchableOpacity>
        <ListItem button onPress={this._onPress}
          title={this.props.title}
          leftAvatar={
            <Image source={iconCar} style={styles.images} />
          }
          bottomDivider
          chevron
        />
      </TouchableOpacity>
    );
  }
}

//Style
const styles = StyleSheet.create({
  images: { width: 30, height: 30 }
});
