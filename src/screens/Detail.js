import React from 'react';
import { View, ActivityIndicator, ScrollView } from 'react-native';
import { observer, inject } from 'mobx-react';
import { Text } from 'react-native-paper';
import { DataTable } from 'react-native-paper';
import globalStyles from '../styles/Style';
import * as Localization from 'expo-localization';

@inject('store')
@observer
export default class Detail extends React.Component {
  state = { isLoading: true };

  //Screen navigation
  static navigationOptions = {
    title: 'Detail',
  };

  componentDidMount() {
    console.log('DetailScreen - componentDidMount');
    this.getDetails();
  }

  //Fetch details
  getDetails = async () => {
    try {
      let URL_DETAILS =
        'https://www.carqueryapi.com/api/0.3/?&cmd=getModel&model=' +
        this.props.store.trim_id;
      console.log('URL_DETAILS è: ' + URL_DETAILS);
      let response = await fetch(URL_DETAILS);
      let data = await response.json();
      let statusCode = response.status;
      if (statusCode != 200) {
        console.log('ERROR: statusCode is ' + statusCode);
      }
      let obj = null;
      if (data.length > 0) {
        obj = data[0];
      }
      this.props.store.details = obj;
      console.log('data: ' + JSON.stringify(data));
      this.setState({ isLoading: false });
    } catch (error) {
      alert(error);
    }
  };

  //see: https://en.wikipedia.org/wiki/Language_localisation
  //Generate descriptions
  createDescriptions = () => {
    let descr = {
      //International measures
      'make_country':'Country of Origin',
      'make_display':'Make',
      'model_name':'Model name',
      'model_trim':'Trim',
      'model_year':'Year',
      'model_body':'Body Style',
      'model_engine_position':'Engine Location',
      'model_engine_cc':'Engine Displacement (cc)',
      'model_engine_cyl':'Engine Cylinders',
      'model_engine_type':'Engine Type',
      'model_engine_valves_per_cyl':'Engine Valves Per Cylinder',
      'model_engine_valves':'Engine Valves',
      'model_engine_compression':'Engine Compression Ratio',
      'model_engine_fuel':'Engine Fuel Type',      
      'model_0_to_100_kph':'0-100 kph',
      'model_drive':'Drive',
      'model_transmission_type':'Transmission Type',
      'model_seats':'Seats',
      'model_doors':'Doors',
      'ExtColors':'Exterior Colors',
      'IntColors':'Interior Colors',
      //European measures
      'model_engine_bore_mm':'Engine Bore (mm)',
      'model_engine_stroke_mm':'Engine Stroke (mm)',
      'model_weight_kg':'Weight (kg)',
      'model_length_mm':'Length (mm)',
      'model_width_mm':'Width (mm)',
      'model_height_mm':'Height (mm)',
      'model_wheelbase_mm':'Wheelbase (mm)',
      'model_lkm_mixed':'Fuel Economy Mixed(l/100km)',
      'model_fuel_cap_l':'Fuel Capacity(l)',
      'model_lkm_hwy':'Fuel Economy HWY(l/100km):',
      'model_lkm_city':'Fuel Economy City(l/100km):',
      'model_engine_l':'Engine Displacement (l)',
      'model_engine_power_ps':'Engine Max Power (PS)',
      'model_engine_power_rpm':'Engine Max Power RPM',
      'model_engine_torque_nm':'Engine Max Torque (Nm)',
      'model_engine_torque_rpm':'Engine Max Torque RPM',
      'model_top_speed_kph':'Top Speed (KPH)', 
      //UK measures
      'model_engine_bore_in':'Engine Bore (in)',
      'model_engine_stroke_in':'Engine Stroke (in)',
      'model_weight_lbs':'Weight (lbs)',
      'model_length_in':'Length (in)',
      'model_width_in':'Width (in)',
      'model_height_in':'Height (in)',
      'model_wheelbase_in':'Wheelbase (in)',
      'model_mpg_mixed':'Fuel Economy Mixed(mpg)',
      'model_fuel_cap_g':'Fuel Capacity(g)',
      'model_mpg_hwy':'Fuel Economy HWY(mpg):',
      'model_mpg_city':'Fuel Economy City(mpg):', 
      'model_engine_ci':'Engine Displacement (cubic inches)',
      'model_engine_power_hp':'Engine Max Power (HP)',
      'model_engine_power_kw':'Engine Max Power (kW)',
      'model_engine_torque_lbft':'Engine Max Torque (Lb-Ft)',
      'model_engine_torque_kgm':'Engine Max Torque (kgf-m)',
      'model_top_speed_mph':'Top Speed (MPH)'
    };
    return descr;
  };

  //Check key of descriptions
  checkKeyDescriptions = (key, value) => {
    let cell=true;
    if(key=='model_id'||key=='model_make_id'||key=='model_sold_in_us'
      ||key=='model_make_display'||key=='make_display'||key=='make_country'){
      cell=false;   
    }else{
      if(key=='ExtColors'||key=='IntColors'){
        if(value.length==0){
          cell=false;
        }      
      }
    }
    return cell;
  }

  //Generate country and make cells
  createCountryAndMakeCells = (descriptions, cells) => {
    let i= -2;
    cells.push(
      <DataTable.Row key={i}>
        <DataTable.Cell key={'K' + i}>{descriptions['make_country']}</DataTable.Cell>
        <DataTable.Cell key={'V' + i} numeric>{this.props.store.details['make_country']}</DataTable.Cell>
      </DataTable.Row>
    );
    i++;
    cells.push(
      <DataTable.Row key={i}>
        <DataTable.Cell key={'K' + i}>{descriptions['make_display']}</DataTable.Cell>
        <DataTable.Cell key={'V' + i} numeric>{this.props.store.details['make_display']}</DataTable.Cell>
      </DataTable.Row>
    );
    return cells;
  }

  //List of details
  showDetails = () => {
    let locale = Localization.locale;
    console.log('Locale is: ' + locale);
    let tokens = locale.split('-');
    let country = tokens[0];
    console.log('Country is: ' + country);
    let rows = [];
    let keys = Object.keys(this.props.store.details);
    let descriptions = this.createDescriptions();
    rows = this.createCountryAndMakeCells(descriptions, rows);
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let value = this.props.store.details[key];
      if (value!=null && value!='Not Avai' && value!='Not Available') {
        console.log('K: ' + key + ' V: ' + value);
        let createCell = this.checkKeyDescriptions(key, value);
        if (createCell) {
          if (key=='model_trim' && value=='') {
            value = 'Default';
          }
          let keyDesc = descriptions[key];
          rows.push(
            <DataTable.Row key={i}>
              <DataTable.Cell key={'K' + i}>{keyDesc}</DataTable.Cell>
              <DataTable.Cell key={'V' + i} numeric>{value}</DataTable.Cell>
            </DataTable.Row>
          );
        }
      }      
    }
    return (
      <DataTable>
        <ScrollView>{rows}</ScrollView>
      </DataTable>
    );
  };

  //Show details
  render() {
    if (this.state.isLoading) {
      return (
        <View style={[globalStyles.container, globalStyles.horizontal]}>
          <ActivityIndicator animating={true} size="large" color="green" />
        </View>
      );
    } else if (this.props.store.details.length == 0) {
      return (
        <View style={globalStyles.paragraphText}>
          <Text>Sorry, no detail is present.</Text>
        </View>
      );
    } else {
      return <View style={globalStyles.container}>{this.showDetails()}</View>;
    }
  }
}
