import { createStackNavigator, createAppContainer ,createSwitchNavigator} from "react-navigation";
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import Login from './login'
import Home from './home'
import AddTodo from './AddTodo'
import AuthLoading from '../authloading'
import Profile from './profile'



const AppNavigator =  createBottomTabNavigator({
    Home:{
        screen:Home
    },
    AddTodo:{
        screen:AddTodo
    },
    Profile:{
        screen:Profile
    }
})




 switchStack = createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      App: AppNavigator ,
      Auth: Login,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  );

  


  


  export default createAppContainer(switchStack);