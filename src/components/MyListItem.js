import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { List, TouchableRipple } from 'react-native-paper';
import { ICONS_MAKES } from '../constantsCars';

//Optimize list performance
export default class MyListItem extends React.PureComponent {
  //Makes png
  getIconMakes = iconName => {
    let icon = ICONS_MAKES[iconName];
    //Default Make icon if we haven't the corresponding png
    if (!icon) {
      iconName = 'circle_grey';
    }
    return ICONS_MAKES[iconName];
  };

  //Press on Make
  _onPress = () => {
    this.props.onPressItem(this.props.icon);
  };

  //Show Makes list
  render() {
    let iconMake = this.getIconMakes(this.props.icon);
    return (
      <TouchableRipple>
        <List.Item
          button
          onPress={this._onPress}
          title={this.props.title}
          left={props => <Image source={iconMake} style={styles.images} />}
        />
      </TouchableRipple>
    );
  }
}

//Style
const styles = StyleSheet.create({
  images: { width: 30, height: 30 },
});
