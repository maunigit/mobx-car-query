import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { observer, inject } from 'mobx-react';
import { Button, List } from 'react-native-paper';
import globalStyles from '../styles/Style';

@inject('store')
@observer
export default class Home extends React.Component { 
  /**
   * Screen navigation options
   */
  static navigationOptions = {
    title: 'Home',
    headerRight: (
      <Button
        color='white'
        icon="dots-vertical"
        onPress={() => alert('CarQ version 0.0.1')}>
      </Button>
    )
  };

  /**
   * Disable/Enable Model
   */
  disableModel = () => {
    if(this.props.store.make_id!=''&&this.props.store.year>0){
      return false;
    }
    return true;
  }

  /**
   * Disable/Enable Trim
   */
  disableTrim = () => {
    if(this.props.store.model_name!=''){
      return false;
    }
    return true;
  }

  /**
   * Disable/Enable Detail
   */
  disableDetail = () => {
    if(this.props.store.trim_id!=''){
      return false;
    }
    return true;
  }

  /**
   * Reset all informations stored
   */
  reset = () =>{
    console.log('Press reset');
    this.props.store.make_id='';
    this.props.store.make_display='';
    this.props.store.year=0;
    this.props.store.model_name='';
    this.props.store.trim_id='';
    this.props.store.trim_name='';
  }

  /**
   * Check description of Make
   */
  checkDescriptionMake = () =>{
    if(this.props.store.make_display!=''){
      return this.props.store.make_display;
    }
    return 'Select a make';
  }

  /**
   * Check description of Year
   */
  checkDescriptionYear = () =>{
    if(this.props.store.year>0){
      return this.props.store.year;
    }
    return 'Select a year';
  }

  /**
   * Check description of Model
   */
  checkDescriptionModel = () =>{
    if(this.props.store.model_name!=''){
      return this.props.store.model_name;
    }
    return 'Avaiable models of a make';
  }

  /**
   * Check description of Trim
   */
  checkDescriptionTrim = () =>{
    if(this.props.store.trim_name!=''){
      return this.props.store.trim_name;
    }
    return 'Avaiable trims of a model';
  }

  /**
   * Check color of the title
   */
  checkColorTitle = () =>{
    if(this.props.store.make_id!=''&&this.props.store.year>0){
      return globalStyles.titleEnable;
    }
    return globalStyles.titleDisable;
  }

  /**
   * Check color of trim title
   */
  checkColorTitleTrim = () =>{
    if(this.props.store.model_name!=''){
      return globalStyles.titleEnable;
    }
    return globalStyles.titleDisable;
  }

  /**
   * Check color of the description
   */
  checkColorDescription = () =>{
    if(this.props.store.make_id!=''&&this.props.store.year>0){
      return globalStyles.descriptionEnable;
    }
    return globalStyles.descriptionDisable;
  }

  /**
   * Check color of trim description
   */
  checkColorDescriptionTrim = () =>{
    if(this.props.store.model_name!=''){
      return globalStyles.descriptionEnable;
    }
    return globalStyles.descriptionDisable;
  }

  /**
   * Check color of the icon
   */
  checkColorIcon = () =>{
    if(this.props.store.make_id!=''&&this.props.store.year>0){
      return 'black';
    }
    return 'gray';
  }

  /**
   * Check color of trim icon
   */
  checkColorIconTrim = () =>{
    if(this.props.store.model_name!=''){
      return 'black';
    }
    return 'gray';
  }

  /**
   * Show filters and buttons
   */
  render() {
    return (
      <View style={globalStyles.homeContainer}>
        <TouchableOpacity >
          <List.Item accessibilityLabel='make' button onPress={() => this.props.navigation.navigate('Make')}
            title={'Make'} description={this.checkDescriptionMake()}
            left={props => <List.Icon color={'black'} icon="car"/>} 
            titleStyle={globalStyles.titleEnable} descriptionStyle={globalStyles.descriptionEnable} />
        </TouchableOpacity> 
        <TouchableOpacity >
          <List.Item accessibilityLabel='year' button onPress={() => this.props.navigation.navigate('Year')} 
            title={'Year'} description={this.checkDescriptionYear()}
            left={props => <List.Icon color={'black'} icon="calendar-range"/>} 
            titleStyle={globalStyles.titleEnable} descriptionStyle={globalStyles.descriptionEnable}/>
        </TouchableOpacity>                  
        <TouchableOpacity >
          <List.Item accessibilityLabel='model' button onPress={() => this.props.navigation.navigate('Model')} 
            title={'Model'} description={this.checkDescriptionModel()} disabled={this.disableModel()} 
            left={props => <List.Icon color={this.checkColorIcon()} icon="car-side"/>} 
            titleStyle={this.checkColorTitle()} descriptionStyle={this.checkColorDescription()} />
        </TouchableOpacity>   
        <TouchableOpacity >
          <List.Item accessibilityLabel='trim' button onPress={() => this.props.navigation.navigate('Trim')} 
            title={'Trim'} description={this.checkDescriptionTrim()} disabled={this.disableTrim()} 
            left={props => <List.Icon color={this.checkColorIconTrim()} icon="engine-outline"/>} 
            titleStyle={this.checkColorTitleTrim()} descriptionStyle={this.checkColorDescriptionTrim()}/>
        </TouchableOpacity>
        <View style={globalStyles.button}>
          <Button
            accessibilityLabel="details"
            color="orange"
            mode="contained"
            icon="check"
            disabled={this.disableDetail()}
            onPress={() => this.props.navigation.navigate('Detail')}>
            show details
          </Button>
          <Button
            accessibilityLabel="reset"
            color="lightgray"
            mode="contained"
            icon="close"
            onPress={() => this.reset()}>
            reset
          </Button>
        </View>        
      </View>    
    );
  }
}
