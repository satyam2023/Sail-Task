import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    StatusBar} from 'react-native';
//import { RootStackParamList } from '../../Views/Screens/Route';
import styles from './Style';
import Splash from '../SplashScreen/Splash';

// type HomeProps = NativeStackScreenProps<RootStackParamList,'Home','SignUp'>;

const HomeScreen = (props:any) => {
    const [splashscreen ,setsplashscreen]=useState(true);
    setTimeout(controlsplash, 2000);
    function controlsplash(){
        setsplashscreen(false);
    }
    
    return (
       
         !splashscreen?
        <View style={styles.container}>
        <StatusBar backgroundColor={'#FFF'} barStyle={'dark-content'} />
        
        
       
        <Image source={require('../images/Sail.png')}  style={styles.imgsail}/> 
       
         <View style={styles.toptxtcontainer}>
            <Text style={styles.toptxt}>Track your sales meeting hassle free</Text>
         <Text style={styles.lowertxt}>Effortlessly organize and elevate your meetings</Text> 
         </View>
            <Image source={require('../images/Handshake.png')}  style={styles.imghand}/>
            <TouchableOpacity style={styles.btn} onPress={() => {props.navigation.navigate('SignUp')}}  >
                <Text style={styles.txt}>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signbtn} onPress={() => {props.navigation.navigate('SignIn')}}>
                <Text style={styles.txtofSign}>Sign In</Text>
            </TouchableOpacity >
            
        </View>:
        <Splash/>

   


        

    );
}

export default HomeScreen;



