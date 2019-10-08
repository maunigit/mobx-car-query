import { createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import Make from '../screens/Make';
import Year from '../screens/Year';
import Model from '../screens/Model';
import Detail from '../screens/Detail';

//Navigation roots
const AppNavigator = createStackNavigator(
  {
    Home,
    Make,
    Year,
    Model,
    Detail,
  },
  {
    initialRouteName: 'Home',
    //Screen header config
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default createAppContainer(AppNavigator);
