import { createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import Makes from '../screens/Makes';
import Years from '../screens/Years';
import Models from '../screens/Models';
import Details from '../screens/Details';

//Navigation roots
const AppNavigator = createStackNavigator(
  {
    Home,
    Makes,
    Years,
    Models,
    Details,
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
