import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../Components/Home/Home';
import SignUpScreen from '../../Components/SignUp/SignUpScreen';
import SignIn from '../../Components/SignIn/SignIn';
import MainScreen from '../../Components/MainScreen/MainScreen';

const Stack = createNativeStackNavigator();

const Routes = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator  >
        <Stack.Screen  options={{headerShown: false}}  name="Home" component={HomeScreen} />
        <Stack.Screen options={{headerShown: false}} name="SignUp" component={SignUpScreen} />
        <Stack.Screen options={{headerShown: false}} name="SignIn" component={SignIn} />
        <Stack.Screen options={{headerShown: false}} name="MainScreen" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;



