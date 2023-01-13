import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import HomeScreen from './src/screens/HomeScreen'
import RestaurantScreen from './src/screens/RestaurantScreen'


const navigator = createStackNavigator({
  Home:HomeScreen,
  Restaurant:RestaurantScreen
},{
  initialRouteName:"Home",
  defaultNavigationOptions:{
    title:"Business Search"
  }
}

)

export default createAppContainer(navigator)