import React, {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from 'react';
import CustomHeader from '../CustomHeader/CustomHeader';
import { useDispatch, useSelector } from 'react-redux';
import { setThirdscreen } from '../../Redux/Slice2';
import { setPassword, setSignUp } from '../../Redux/Slice';
//const express = require('express');
//const bodyParser = require('body-parser');

//var jwt = require('jsonwebtoken');
//var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
//const cors=require('cors');

//const secretKey='Sat';


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
    setScreen:Function,
    props:any,
    
}

const Third = forwardRef(({setScreen,props }: ThirdProps, ref) => {
    const[passeye,setpasseye]=useState<boolean>(true);
    const[consfirmpasseye,setconfirmpasseye]=useState<boolean>(true);
    const[passstatus,setpassstatus]=useState(true);
    const[confirmpassstatus,setconfirmpassstatus]=useState(true);
    const [validatepassword,setvalidatepassword]=useState(false);
    const dispatch=useDispatch();
    const details = {
        passOne: useRef(''),
        passTwo: useRef(''),
    };
   // const PASSWORD = useSelector((state:any) => state.user.password);
    const PHONENUMBER = useSelector((state:any) => state.user.phonenumber);
    const iconstatus=useSelector((state:any)=>state.button.ThirdScreenButtonStatus)
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
            setvalidatepassword(true);
            setpassstatus(true);
        
        }
      }

    /*  if(validatepassword){
        dispatch(setThirdscreen(true))
      }
      else if(!validatepassword){
        dispatch(setThirdscreen(false))
      }*/

      useEffect(()=>{
        if(validatepassword){
          dispatch(setThirdscreen(true))
        }
        else if(!validatepassword){
          dispatch(setThirdscreen(false))
        }
      },[validatepassword])
var password=details.passOne.current;

      function validationcheck(){
        console.log("Confirm password Statuis:::",confirmpassstatus)
       if(validatepassword){
     //   const secretKey = 'sat';
 // const normalText = PHONENUMBER;
  //const token = jwt.sign({ data: normalText }, secretKey, { expiresIn: '1h' });

  //console.log('Generated JWT token:', token);
        //const token = jwt.sign(PHONENUMBER, secretKey);
       // console.log("token::",token)
        dispatch(setPassword(details.passOne.current));
        dispatch(setSignUp({
            phonenumber:PHONENUMBER,
            password: details.passOne.current,
           //token:"kdmdkms#xkm@jdn",
          }))
        setScreen(1);
        props.navigation.navigate('SignIn') 
  //handleSignup();
        
       }
       else{
        setpassstatus(false);
        setconfirmpassstatus(false);
       }
    }
    // ...

    const handleSignup = async () => {
       // console.log("Entered inside it");
       console.log("Phone number inside Async",PHONENUMBER);
       

    
        if (!PHONENUMBER || !password) {
          Alert.alert('Error', 'Please enter both phone number and password');
          return;
        }
    
        try {
         
         
          const response = await fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
              PHONENUMBER:'999999999', 
              password:'Satyam@1' })
          });
     console.log("REsponse::",response)
          const data = await response.json();
              
          if (response.ok) {
            Alert.alert('Success', data.message);
            setScreen(1);
            props.navigation.navigate('Login');
          } else {
            Alert.alert('Error', data.message);
          }
        } catch (error) {
        
          console.error('Error during signup:', error);
        }
      };
    
     
    useImperativeHandle(ref, () => ({
        handleSubmit: validationcheck,
    }));

    

    return (
        <ScrollView style={{height:700,backgroundColor:'#FFFFFF'}}>
            <CustomHeader details="Choose a passowrd"/>
            <View style={passstatus?styles.inputbox:styles.inputboxno} >
                <View style={{ backgroundColor: '#E6E6E6', width: 0 }}><Image source={require('../images/key.png')} style={!iconstatus?styles.img:styles.imgverified}/></View>
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
                <View style={{ backgroundColor: '#E6E6E6', width: 0 }}><Image source={require('../images/key.png')} style={!iconstatus?styles.img:styles.imgverified}/></View>
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