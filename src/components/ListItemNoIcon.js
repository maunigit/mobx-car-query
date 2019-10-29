import React from 'react';
import { List, TouchableRipple } from 'react-native-paper';

/**
 * Optimize performance of list with no icons
 */
export default class ListItemNoIcon extends React.PureComponent {
  /**
   * Press on the button
   */
  _onPress = () => {
    this.props.onPressItem(this.props.save);
  };

  /**
   * Show list
   */
  render() {
    return (
      <TouchableRipple>
        <List.Item button onPress={this._onPress} title={this.props.title} />
      </TouchableRipple>
    );
  }
}
