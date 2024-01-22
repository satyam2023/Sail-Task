import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../Components/Home/Home';
import SignUpScreen from '../../Components/SignUp/SignUpScreen';
import SignIn from '../../Components/SignIn/SignIn';
import MainScreen from '../../Components/MainScreen/MainScreen';
import Visit from '../../Components/Visit/Visit';
import Enquiry from '../../Components/UserEnquiry Screen/Enquiry';
import IssueEnquiry from '../../Components/Issue Enquiry/IssueEnquiry';
import NearByCustomer from '../../Components/NearbyCustomer/NearByCustomer';
import NearbyCustomer from '../../Components/NearbyCustomer/NearByCustomer';
import Details from '../../Components/CustomerRegistration/Details';
import BottomDrawer from '../../Components/MainScreen/BottomDrawer/BottomDrawer';




const Stack = createNativeStackNavigator();

const Routes = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator  >
        <Stack.Screen  options={{headerShown: false}}  name="Home" component={HomeScreen} />
        <Stack.Screen options={{headerShown: false}} name="SignUp" component={SignUpScreen} />
        <Stack.Screen options={{headerShown: false}} name="SignIn" component={SignIn} />
        <Stack.Screen options={{headerShown: false}} name="MainScreen" component={MainScreen} />
        <Stack.Screen options={{headerShown: false}} name="Visit" component={Visit} />
        <Stack.Screen options={{headerShown: false}} name="Enquiry" component={Enquiry} />
        <Stack.Screen options={{headerShown: false}} name="IssueEnquiry" component={IssueEnquiry} />
        <Stack.Screen options={{headerShown: false}} name="NearByCustomer" component={NearbyCustomer} />
        <Stack.Screen options={{headerShown: false}} name="Details" component={Details} />
        <Stack.Screen options={{headerShown: false}} name="BottomDrawer" component={BottomDrawer} />
       
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

export default Routes;



