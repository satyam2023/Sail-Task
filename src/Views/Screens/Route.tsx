import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../Components/Home/Home';
import SignUpScreen from '../../Components/SignUp/SignUpScreen';

const Stack = createNativeStackNavigator();

const Routes = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator  >
        <Stack.Screen  options={{headerShown: false}}  name="Home" component={HomeScreen} />
        <Stack.Screen options={{headerShown: false}} name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;



