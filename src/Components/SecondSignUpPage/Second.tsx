import React, { useRef } from "react";
import styles from "./Style";
import { Image, ScrollView, View } from "react-native";
import InputText from "../InputText/InputText";
import CustomHeader from "../CustomHeader/CustomHeader";
const Second: React.FC=()=>{
    const details = {
        name: useRef(''),
        phoneNumber: useRef(''),
    };

  return(
    <ScrollView style={{backgroundColor:'#FFF'}}>
        <CustomHeader/>
    <View style={styles.inputbox} >
    <View style={{ backgroundColor: '#E6E6E6', width: 0 }}><Image source={require('../images/contact.png')} style={styles.img}/></View>
    <InputText
        placeholder="Your Name"
        ChangeText={(text: string) => {
            details.name.current = text;
        }}
        keyboardType="default"
        secureText={false}
        maxLength={10}
    />
</View>
</ScrollView>

  );


};
export default Second;