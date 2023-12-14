import React, {
    forwardRef,
    useImperativeHandle,
    useRef,
    useState,
} from 'react';
import CustomHeader from '../CustomHeader/CustomHeader';


import {
    Alert,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import InputText from '../InputText/InputText';
import styles from './Styles';

//import DropdownList from './DropDownList';
interface FirstProps {
    
}

const First :React.FC=() => {
    const details = {
        contactnumber: useRef(''),
        phoneNumber: useRef(''),
    };

    return (
        <ScrollView style={{backgroundColor:'#FFFFFF'}}>
            <CustomHeader/>
            <View style={styles.inputbox} >
                <View style={{ backgroundColor: '#E6E6E6', width: 0 }}><Image source={require('../images/contact.png')} style={styles.img}/></View>
                <InputText
                    placeholder="Enter Your Unique Personal No."
                    ChangeText={(text: string) => {
                        details.phoneNumber.current = text;
                    }}
                    keyboardType="numeric"
                    secureText={false}
                    maxLength={10}
                />
            </View>
            <View style={styles.inputbox}>
                <View style={{ backgroundColor: '#E6E6E6', width: 0 }}><Image source={require('../images/phone.png')} style={styles.img}/></View>
                <InputText
                    placeholder="Your Contact Number"
                    ChangeText={(text: string) => {
                        details.phoneNumber.current = text;
                    }}
                    keyboardType="numeric"
                    secureText={false}
                    maxLength={10}
                />

            </View>
        </ScrollView>
    );
};

export default First;