import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import firstpage from "../screens/firstpage";


const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  }, 
  firstpage: {
      screen : firstpage
  },
  
  
},
{
    headerMode: 'none', 
    navigationOptions: {
    headerVisible: false,
  }});

export default createAppContainer(AppNavigator);