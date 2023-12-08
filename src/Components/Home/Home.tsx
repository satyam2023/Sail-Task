import React, { useRef, useState, useEffect } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    StatusBar,
    SafeAreaView
} from 'react-native';

import styles from './Style';
interface Homeprops {

}
const HomeScreen: React.FC<Homeprops> = () => {

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#FFF" />
         <View >
         <Text style={styles.toptxt}>Track your sales meeting hassle free</Text>
         <Text style={styles.lowertxt}>Effortlessly organize and elevate your meetings</Text> 
         </View>
            <Image source={require('../images/Handshake.png')}  style={styles.img}/>
            <TouchableOpacity style={styles.btn} >
                <Text style={styles.txt}>Create Account</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.signbtn}>
                <Text style={styles.txtofSign}>Sign In</Text>
            </TouchableOpacity >
        </SafeAreaView>

    );
}

export default HomeScreen;



