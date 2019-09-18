import { createAppContainer } from "@react-navigation/native";
import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/Home";
import Makes from "../screens/Makes";
import Models from "../screens/Models";

//Navigation roots
const AppNavigator = createStackNavigator(
    {
        Home: Home,
        Makes: Makes,
        Models: Models
      },
      {
        initialRouteName: "Home",
        //Screen header config
        defaultNavigationOptions: {
          headerStyle: {
            backgroundColor: "black"
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold"
          }
        }
      }
)

export default createAppContainer(AppNavigator);