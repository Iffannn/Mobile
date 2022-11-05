import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogoScreen from './screen/LogoScreen'
import LoginScreen from './screen/LoginScreen';
import Profile from './screen/Profile';
import Home from './screen/Home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen
           name="LogoScreen"
           component={LogoScreen}
           options={{headerShown:false}}
         />
         <Stack.Screen
           name="LoginScreen"
           component={LoginScreen}
           options={{headerShown:false}}
         />
         <Stack.Screen
           name="Home"
           component={Home}
           options={{headerShown:false}}
         />
      
      </Stack.Navigator>
    </NavigationContainer>
   
  )
}

export default App