import React from 'react';
import { List, TouchableRipple } from 'react-native-paper';

//Optimize list performance
export default class ListItemNoIcon extends React.PureComponent {
  //Press on
  _onPress = () => {
    this.props.onPressItem(this.props.title);
  };

  //Show list
  render() {
    return (
      <TouchableRipple>
        <List.Item button onPress={this._onPress} title={this.props.title} />
      </TouchableRipple>
    );
  }
}
