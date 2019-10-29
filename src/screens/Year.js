import React from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { observer, inject } from 'mobx-react';
import ListItemNoIcon from '../components/ListItemNoIcon';
import globalStyles from '../styles/Style';

const URL_YEARS = 'https://www.carqueryapi.com/api/0.3/?&cmd=getYears';

@inject('store')
@observer
export default class Year extends React.Component {
  state = { isLoading: true };

  /**
   * Screen navigation options
   */
  static navigationOptions = {
    title: 'Year',
  };

  componentDidMount() {
    console.log('YearScreen - componentDidMount');
    this.getBoundaryYears();
  }

  /**
   * Fetch boundary years
   */
  getBoundaryYears = async () => {
    try {
      let response = await fetch(URL_YEARS);
      let data = await response.json();
      let statusCode = response.status;
      if (statusCode != 200) {
        console.log('ERROR: statusCode is ' + statusCode);
      }
      this.props.store.maxYear = data.Years.max_year;
      this.props.store.minYear = data.Years.min_year;
      this.setState({ isLoading: false });
    } catch (error) {
      alert(error);
    }
  };

  /**
   * Go back
   */
  goBack = item => {
    console.log('Year selected is: ' + item.year);
    this.props.store.year = item.year;     
    console.log('Going back');
    this.props.store.model_name='';
    this.props.store.trim_id='';
    this.props.store.trim_name='';
    this.props.navigation.goBack();
  };

  keyExtractor = (item, index) => index.toString();

  /**
   * Render every item of the list
   */
  renderItem = ({ item }) => {
    return <ListItemNoIcon onPressItem={this.goBack} title={item.year} save={item} />;
  };

  /**
   * Generate years between two boundary
   */
  createYears = () => {
    let max = parseInt(this.props.store.maxYear);
    let min = parseInt(this.props.store.minYear);
    let years = [];
    for (max; max >= min; max--) {
      years.push({ year: max });
    }
    return years;
  };

  /**
   * List of the years
   */
  showYears = () => {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={this.createYears()}
        renderItem={this.renderItem}
      />
    );
  };

  /**
   * Show years
   */
  render() {
    if (this.state.isLoading) {
      return (
        <View style={[globalStyles.container, globalStyles.horizontal]}>
          <ActivityIndicator id="ai-indicator" size="large" color="green" />
        </View>
      );
    } else {
      return <View style={globalStyles.container}>{this.showYears()}</View>;
    }
  }
}
