import React from 'react';
import { Image } from 'react-native';
import { List, TouchableRipple } from 'react-native-paper';
import { ICONS_MAKES } from '../constantsMakes';
import globalStyles from '../styles/Style';

/**
 * Optimize performance of list with icons
 */
export default class ListItemIcon extends React.PureComponent {
  /**
   * Retrive the icon in png of the Make 
   */
  getIconMakes = iconName => {
    let icon_png = ICONS_MAKES[iconName];
    //Default icon if we haven't the corresponding Make png
    if (!icon_png) {
      iconName = 'circle_grey';
    }
    return ICONS_MAKES[iconName];
  };

  /**
   * Press on a Make
   */
  _onPress = () => {
    this.props.onPressItem(this.props.save);
  };

  /**
   * Show Makes list
   */
  render() {
    let iconMake = this.getIconMakes(this.props.icon);
    return (
      <TouchableRipple>
        <List.Item accessibilityLabel={this.props.title} 
          button
          onPress={this._onPress}
          title={this.props.title}
          left={props => <Image source={iconMake} style={globalStyles.icon} />}
        />
      </TouchableRipple>
    );
  }
}
