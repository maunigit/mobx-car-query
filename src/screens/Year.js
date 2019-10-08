import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { observer, inject } from 'mobx-react';
import ListItemNoIcon from '../components/ListItemNoIcon';

const URL_YEARS = 'https://www.carqueryapi.com/api/0.3/?&cmd=getYears';

@inject('store')
@observer
export default class Year extends React.Component {
  //Screen navigation
  static navigationOptions = {
    title: 'Year',
  };

  async componentDidMount() {
    console.log('YearScreen - componentDidMount');
    await this.getBoundaryYears();
  }

  //Fetch boundary years
  getBoundaryYears = async () => {
    try {
      let response = await fetch(URL_YEARS);
      let data = await response.json();
      //Store years
      this.props.store.maxYear = data.Years.max_year;
      this.props.store.minYear = data.Years.min_year;
    } catch (error) {
      alert(error);
    }
  };

  //Press on a year
  goToModel = year => {
    console.log('Year selected is: ' + year);
    this.props.store.year = year;
    this.props.navigation.navigate('Model');
  };

  keyExtractor = (item, index) => index.toString();

  //Render every item of the list
  renderItem = ({ item }) => {
    return (<ListItemNoIcon onPressItem={this.goToModel} title={item.year}/>);
  };

  //Generate years between two boundary
  createYears = () => {
    let max = parseInt(this.props.store.maxYear);
    let min = parseInt(this.props.store.minYear);
    let years = [];
    for (max; max >= min; max--) {
      years.push({ year: max });
    }
    return years;
  };

  //List of the years
  showYears = () => {
    let years = this.createYears();
    if (this.props.store.maxYear) {
      return (
        <FlatList keyExtractor={this.keyExtractor} data={years} renderItem={this.renderItem} />
      );
    } else {
      return null;
    }
  };

  //Show years
  render() {
    return <View style={styles.mainContainer}>{this.showYears()}</View>;
  }
}

//Style
const styles = StyleSheet.create({
  mainContainer: { flex: 1, justifyContent: 'center' },
});
