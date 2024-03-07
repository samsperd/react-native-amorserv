import { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../HomeScreens/Home';
import Resources from '../HomeScreens/Resources';
import About from '../HomeScreens/About';
import Profile from '../HomeScreens/Profile';
import { useAuth } from '../../context/AuthContext';
import { IoIosApps, IoMdHome, IoMdPaper, IoMdPerson } from "react-icons/io";
import Login from '../AuthScreens/Login';
import Signup from '../AuthScreens/Signup';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Routes = () => {
  const { authenticated } = useAuth()


  return (
    <NavigationContainer>
      {
        !authenticated ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Login' component={Login}></Stack.Screen>
            <Stack.Screen name='Signup' component={Signup}></Stack.Screen>
          </Stack.Navigator>

        ): (
          <Tab.Navigator screenOptions={{ headerShown: false }}>

            <Tab.Screen name="Home" component={Home}  options={{ tabBarIcon: ({ color, size }) => (
                <IoMdHome color={color} size={size} />
              )}} />
            <Tab.Screen name="Resources" component={Resources}  options={{ tabBarIcon: ({ color, size }) => (
                <IoIosApps color={color} size={size} />
              )}} />
            <Tab.Screen name="About" component={About}  options={{ tabBarIcon: ({ color, size }) => (
                <IoMdPaper color={color} size={size} />
              )}} />
            <Tab.Screen name="Profile" component={Profile}  options={{ tabBarIcon: ({ color, size }) => (
                <IoMdPerson color={color} size={size} />
              )}} />
          </Tab.Navigator>

        )
      }



</NavigationContainer>

  )
}

export default Routes