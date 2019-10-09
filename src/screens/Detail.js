import React from 'react';
import { View, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { observer, inject } from 'mobx-react';
import { DataTable } from 'react-native-paper';

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
        this.props.store.trim_model_id;
      console.log('URL_DETAILS è: ' + URL_DETAILS);
      let response = await fetch(URL_DETAILS);
      let data = await response.json();
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

  //Generate descriptions
  createDescriptions = () => {
    let descr = {
      'model_id':'skip-model_id',
      'model_make_id':'skip-model_make_id',
      'model_name':'Model name',
      'model_trim':'Trim',
      'model_year':'Year',
      'model_body':'Body Style',
      'model_engine_position':'Engine Location',
      'model_engine_cc':'Engine Displacement (cc)',
      'model_engine_cyl':'Engine Cylinders',
      'model_engine_type':'Engine Type',
      'model_engine_valves_per_cyl':'Engine Valves Per Cylinder',
      'model_engine_power_ps':'Engine Max Power (PS)',
      'model_engine_power_rpm':'Engine Max Power RPM',
      'model_engine_torque_nm':'Engine Max Torque (Nm)',
      'model_engine_torque_rpm':'Engine Max Torque RPM',
      'model_engine_bore_mm':'Engine Bore (mm)',
      'model_engine_stroke_mm':'Engine Stroke (mm)',
      'model_engine_compression':'Engine Compression Ratio',
      'model_engine_fuel':'Engine Fuel Type',
      'model_top_speed_kph':'Top Speed (KPH)',
      'model_0_to_100_kph':'0-100 kph',
      'model_drive':'Drive',
      //:'Transmission Type',
      'model_seats':'Seats',
      'model_doors':'Doors',
      'model_weight_kg':'Weight (kg)',
      'model_length_mm':'Length (mm)',
      'model_width_mm':'Width (mm)',
      'model_height_mm':'Height (mm)',
      'model_wheelbase_mm':'Wheelbase (mm)',
      'model_lkm_mixed':'Fuel Economy Mixed(l/100km)',
      'model_fuel_cap_l':'Fuel Capacity(l)',
      'model_sold_in_us':'Sold in US',
      'model_make_display':'skip-model_make_display',
      'model_engine_l':'Engine Displacement (l)',
      'model_engine_ci':'Engine Displacement (cubic inches)',
      'model_engine_bore_in':'Engine Bore (in)',
      'model_engine_stroke_in':'Engine Stroke (in)',
      'model_engine_valves':'Engine Valves',
      'model_engine_power_hp':'Engine Max Power (HP)',
      'model_engine_power_kw':'Engine Max Power (kW)',
      'model_engine_torque_lbft':'Engine Max Torque (Lb-Ft)',
      'model_engine_torque_kgm':'Engine Max Torque (kgf-m)',
      'model_top_speed_mph':'Top Speed (MPH)',
      'model_weight_lbs':'Weight (lbs)',
      'model_length_in':'Length (in)',
      'model_width_in':'Width (in)',
      'model_height_in':'Height (in)',
      'model_height_in':'Wheelbase (in)',
      'model_mpg_mixed':'Fuel Economy Mixed(mpg)',
      'model_fuel_cap_g':'Fuel Capacity(g)',
      'make_display':'Make',
      'make_country':'Country of Origin',
      'ExtColors':'Exterior Colors',
      'IntColors':'Interior Colors'
    };
    return descr;
  };

  //List of details
  showDetails = () => {
    let rows = [];
    let keys = Object.keys(this.props.store.details);
    let descriptions = this.createDescriptions();
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let value = this.props.store.details[key];
      if (value!=null) {
        console.log('K: ' + key + ' V: ' + value);      
        //metti il check se elem è da saltare
        if (true) {
          let keyDesc = descriptions[i];
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
        <View style={[styles.mainContainer, styles.horizontal]}>
          <ActivityIndicator animating={true} size="large" color="green" />
        </View>
      );
    } else {
      return <View style={styles.mainContainer}>{this.showDetails()}</View>;
    }
  }
}

//Style
const styles = StyleSheet.create({
  mainContainer: { flex: 1, justifyContent: 'center' },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
