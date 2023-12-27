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
    CurrentScreen:any,
    setScreen:any,
   totalvalidation:any,

}

const First = forwardRef(({totalvalidation,setScreen}: FirstProps, ref) => {
   //var totalvalidation=false;
    const [personalnumber, setpersonalnumber] = useState(true);
    const [contactnumber, setcontactnumber] = useState(true);
    const [validpersonal,setvalidpersonal] =useState(false);
    const [validcontact,setvalidcontact]=useState(false);

    const details = {
        contactnumber: useRef(''),
        phoneNumber: useRef(''),
    };

    function containsNumber(str: any) {
        return /[0-9]/.test(str);
    }

    function handlepersonalnumber(txt: any) {
        var personalnumberlength = txt.length;
        if (!containsNumber(txt)) {
            setpersonalnumber(false);
        }
        else if (personalnumberlength < 10) {
            setpersonalnumber(false);
        }
        else {
            setpersonalnumber(true);
            setvalidpersonal(true)
        }
    }
   
    function handlconatctnumber(txt: any) {
        let contactnumberlength = txt.length;

        if (!containsNumber(txt)) {
            setcontactnumber(false);
        }
        else if (contactnumberlength < 10) {
            setcontactnumber(false);
        }
        else {
            setcontactnumber(true);
            setvalidcontact(true);
        }


    }
    if(validpersonal && validcontact){
        totalvalidation(true);
       }
   
    function validationcheck(){
        
       if(validpersonal && validcontact){
        setScreen(2)
       }
       else if(validpersonal && !validcontact){
          setcontactnumber(false);
       }
       else if(!validpersonal && validcontact){
        setpersonalnumber(false);
       }
       else{
        setcontactnumber(false);
        setpersonalnumber(false);
       }
    }

    useImperativeHandle(ref, () => ({
        handleSubmit: validationcheck,
    }));

    return (
        <View style={{ height:700,backgroundColor: '#FFFFFF' }}>
            <CustomHeader details="Enter your personal information" />
            <View style={personalnumber ? styles.inputbox : styles.inputboxno} >
                <View style={{ backgroundColor: '#E6E6E6', width: 0 }}><Image source={require('../images/contact.png')} style={styles.img} /></View>
                <InputText
                    placeholder="Enter Your Unique Personal No."
                    ChangeText={(text: any) => {
                        details.phoneNumber.current = text;
                        handlepersonalnumber(text)
                    }}
                    keyboardType="numeric"
                    secureText={false}
                    maxLength={10}
                />
            </View>
            <View style={contactnumber ? styles.inputbox : styles.inputboxno}>
                <View style={{ backgroundColor: '#E6E6E6', width: 0 }}><Image source={require('../images/phone.png')} style={styles.img} /></View>
                <InputText
                    placeholder="Your Contact Number"
                    ChangeText={(text: any) => {
                        details.phoneNumber.current = text;
                        handlconatctnumber(text);
                    }

                    }
                    keyboardType="numeric"
                    secureText={false}
                    maxLength={10}
                />

            </View>
        </View>
    );
});

export default First;
