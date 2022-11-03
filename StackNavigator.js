import { Alert, AsyncStorage } from 'react-native'
import React , { useState } from 'react'
import HomePage from '../Screens/HomePage/HomePage';
import LocationSet from '../Screens/LocationSet/LocationSet';
import CarBooking from '../Screens/CarBooking/CarBooking';
import Registration from '../Screens/Registration/Registration';
import Login from '../Screens/Login/Login';
import { createStackNavigator } from '@react-navigation/stack';

const StackNavigator = (props) => {
  const stack = createStackNavigator();
  
  return (
    <stack.Navigator initialRouteName={`${ props.token ? 'Home' : 'Login' }`} screenOptions={{ headerShown : false }}>
        <stack.Screen initialParams={{ setLogout : props.setLogout }} name='Home' component={HomePage} />
        <stack.Screen  name='locationSet' component={LocationSet} />
        <stack.Screen  name='CarBooking' component={CarBooking} />
          
            
        <stack.Screen  name='Login'>
            {(props) => <Login {...props} setToken = {props.setToken} />}
        </stack.Screen>
        <stack.Screen  name='Registration' component={Registration} />
          
      
        
    </stack.Navigator>
  )
}

export default StackNavigator;