import { createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import Make from '../screens/Make';
import Year from '../screens/Year';
import Model from '../screens/Model';
import Trim from '../screens/Trim';
import Detail from '../screens/Detail';

//Navigation roots
const AppNavigator = createStackNavigator(
  {
    Home,
    Make,
    Year,
    Model,
    Trim,
    Detail,
  },
  {
    initialRouteName: 'Home',
    headerBackTitleVisible: 'true',
    headerMode: 'float',
    headerTransitionPreset: 'fade-in-place',
    mode: 'card',
    //Screen header config
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'indianred',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default createAppContainer(AppNavigator);
