import React from 'react';
import { List, TouchableRipple } from 'react-native-paper';

//Optimize list performance
export default class ListItemYears extends React.PureComponent {
  //Press on year
  _onPress = () => {
    this.props.onPressItem(this.props.title);
  };

  //Show years list
  render() {
    return (
      <TouchableRipple>
        <List.Item
          button
          onPress={this._onPress}
          title={this.props.title}
        />
      </TouchableRipple>
    );
  }
}
