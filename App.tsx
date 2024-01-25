/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import HomeScreen from './src/Components/Home/Home';
import BottomDrawer from './src/Components/MainScreen/BottomDrawer/BottomDrawer';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Splash from './src/Components/SplashScreen/Splash';
import Routing from './src/Views/Screens/Route';
import SignUpScreen from './src/Components/SignUp/SignUpScreen';
//import 'react-native-crypto'
import Visit from './src/Components/Visit/Visit';
import MainScreen from './src/Components/MainScreen/MainScreen';
import NearbyCustomer from './src/Components/NearbyCustomer/NearByCustomer';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SignIn from './src/Components/SignIn/SignIn';
import Routes from './src/Views/Screens/Route';
import { Provider } from 'react-redux';
import store from './src/Redux/Store';
import Planned from './src/Components/Visit/PlannedVisit/Planned';
import Enquiry from './src/Components/UserEnquiry Screen/Enquiry';
import IssueEnquiry from './src/Components/Issue Enquiry/IssueEnquiry';
import Registration from './src/Components/CustomerRegistration/Header';
import Details from './src/Components/CustomerRegistration/Details';
import Meeting from './src/Components/Meeting/Meeting';
import ProductCatalog from './src/Components/ProductCatalog/ProductCatalog';
import DateSlector from './src/Components/Date/Date';
import VisitPlan from './src/Components/VisitPlan/VisitPlan';


type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): React.JSX.Element {


  return (
    <Provider store={store}>
    <Routes/>
    </Provider>
   
  );
}



export default App;
