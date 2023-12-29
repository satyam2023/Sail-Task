/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import HomeScreen from './src/Components/Home/Home';
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
