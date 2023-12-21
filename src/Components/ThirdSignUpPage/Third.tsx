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
import styles from './Style';

//import DropdownList from './DropDownList';
interface ThirdProps {
    
}

const Third = forwardRef(({ }: ThirdProps, ref) => {
    const[passeye,setpasseye]=useState<boolean>(true);
    const[consfirmpasseye,setconfirmpasseye]=useState<boolean>(true);
    const[passstatus,setpassstatus]=useState(true);
    const[confirmpassstatus,setconfirmpassstatus]=useState(true);
    const details = {
        passOne: useRef(''),
        passTwo: useRef(''),
    };

    function PasswordHandler(txt:any) {
        const regexPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@]).{8,}$/;
        if (!regexPattern.test(txt)) {
         setpassstatus(false);
        } else {
            setpassstatus(true);
        }
      }
    
      function confirmPassword(txt:any) {
        const regexPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@]).{8,}$/;
        if (!regexPattern.test(txt)) {
         setconfirmpassstatus(false);
        } else if(details.passOne.current!=details.passTwo.current){
            setconfirmpassstatus(false);
        }
        else{
            setconfirmpassstatus(true);
        }
      }

      function validationcheck(){
        console.log("FUnction in Third component called sucessfully")
    }

    useImperativeHandle(ref, () => ({
        handleSubmit: validationcheck,
    }));

    

    return (
        <ScrollView style={{backgroundColor:'#FFFFFF'}}>
            <CustomHeader details="Choose a passowrd"/>
            <View style={passstatus?styles.inputbox:styles.inputboxno} >
                <View style={{ backgroundColor: '#E6E6E6', width: 0 }}><Image source={require('../images/key.png')} style={styles.img}/></View>
                <InputText
                    placeholder="Create Your Password"
                    ChangeText={(text: string) => {
                        details.passOne.current = text;
                        PasswordHandler(text);
                    }}
                    keyboardType="default"
                    secureText={passeye}
                    maxLength={10}
                />
                 <TouchableOpacity style={{ backgroundColor: '#E6E6E6', width: 0,position:'absolute',left:316,}}
                 onPress={()=>{
                    setpasseye(!passeye)
                 }}
                 ><Image source={require('../images/eye.png')} style={styles.imgdrop}/></TouchableOpacity>
            </View>
            <View style={confirmpassstatus?styles.inputbox:styles.inputboxno}>
                <View style={{ backgroundColor: '#E6E6E6', width: 0 }}><Image source={require('../images/key.png')} style={styles.img}/></View>
                <InputText
                    placeholder="Confirm Your Password"
                    ChangeText={(text: string) => {
                        details.passTwo.current = text;
                        confirmPassword(text);

                    }}
                    keyboardType="default"
                    secureText={consfirmpasseye}
                    maxLength={16}
                />
                <TouchableOpacity style={{ backgroundColor: '#E6E6E6', width: 0,position:'absolute',left:316,}}
                onPress={()=>{
                    setconfirmpasseye(!consfirmpasseye);
                 }}><Image source={require('../images/eye.png')} style={styles.imgdrop}/></TouchableOpacity>
                 

            </View>
        </ScrollView>
    );
});

export default Third;