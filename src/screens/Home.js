import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { observer, inject } from 'mobx-react';
import { Button, List } from 'react-native-paper';
import globalStyles from '../styles/Style';

@inject('store')
@observer
export default class Home extends React.Component {
  state = { 
    makeTitleStyle: globalStyles.titleEnable,
    yearTitleStyle: globalStyles.titleEnable,
    modelTitleStyle: globalStyles.titleDisable,
    trimTitleStyle: globalStyles.titleDisable,
    makeDescriptionStyle: globalStyles.descriptionEnable,
    yearDescriptionStyle: globalStyles.descriptionEnable,
    modelDescriptionStyle: globalStyles.descriptionDisable,
    trimDescriptionStyle: globalStyles.descriptionDisable
  };
 
  //Screen navigation
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

  disableModel = () => {
    if(this.props.store.make_id!=''&&this.props.store.year>0){
      //this.setState({ modelTitleStyle: globalStyles.titleEnable });
      //this.setState({ modelDescriptionStyle: globalStyles.descriptionEnable });
      return false;
    }
    return true;
  }

  disableTrim = () => {
    if(this.props.store.model_name!=''){
      return false;
    }
    return true;
  }

  disableDetail = () => {
    if(this.props.store.trim_id!=''){
      return false;
    }
    return true;
  }

  reset = () =>{
    console.log('Press reset');
    this.props.store.make_id='';
    this.props.store.make_display='';
    this.props.store.year=0;
    this.props.store.model_name='';
    this.props.store.trim_id='';
    this.props.store.trim_name='';
  }

  checkDescriptionMake = () =>{
    if(this.props.store.make_display!=''){
      return this.props.store.make_display;
    }
    return 'Select a make';
  }

  checkDescriptionYear = () =>{
    if(this.props.store.year>0){
      return this.props.store.year;
    }
    return 'Select a year';
  }

  checkDescriptionModel = () =>{
    if(this.props.store.model_name!=''){
      return this.props.store.model_name;
    }
    return 'Avaiable models of a make';
  }

  checkDescriptionTrim = () =>{
    if(this.props.store.trim_name!=''){
      return this.props.store.trim_name;
    }
    return 'Avaiable trims of a model';
  }

  //Show filters
  render() {
    return (
      <View style={globalStyles.homeContainer}>
        <TouchableOpacity >
          <List.Item button onPress={() => this.props.navigation.navigate('Make')}
            title={'Make'} description={this.checkDescriptionMake()}
            left={props => <List.Icon color={'black'} icon="car"/>} 
            titleStyle={this.state.makeTitleStyle} descriptionStyle={this.state.makeDescriptionStyle} />
        </TouchableOpacity> 
        <TouchableOpacity >
          <List.Item button onPress={() => this.props.navigation.navigate('Year')} 
            title={'Year'} description={this.checkDescriptionYear()}
            left={props => <List.Icon color={'black'} icon="calendar-range"/>} 
            titleStyle={this.state.yearTitleStyle} descriptionStyle={this.state.yearDescriptionStyle}/>
        </TouchableOpacity>                  
        <TouchableOpacity >
          <List.Item button onPress={() => this.props.navigation.navigate('Model')} 
            title={'Model'} description={this.checkDescriptionModel()} disabled={this.disableModel()} 
            left={props => <List.Icon color={'gray'} icon="car-side"/>} 
            titleStyle={this.state.modelTitleStyle} descriptionStyle={this.state.modelDescriptionStyle} />
        </TouchableOpacity>   
        <TouchableOpacity >
          <List.Item button onPress={() => this.props.navigation.navigate('Trim')} 
            title={'Trim'} description={this.checkDescriptionTrim()} disabled={this.disableTrim()} 
            left={props => <List.Icon color={'gray'} icon="engine-outline"/>} 
            titleStyle={this.state.trimTitleStyle} descriptionStyle={this.state.trimDescriptionStyle}/>
        </TouchableOpacity>
        <View style={globalStyles.button}>
          <Button
            color="orange"
            mode="contained"
            icon="check"
            disabled={this.disableDetail()}
            onPress={() => this.props.navigation.navigate('Detail')}>
            show details
          </Button>
          <Button
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
