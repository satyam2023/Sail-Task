import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { Text, View } from "react-native";
import styles from "./Styles";
interface ButtonProps{
    text:string
}
const CommonButton:React.FC<ButtonProps>=({text}:ButtonProps)=>{
       
       
    return(
       
        <View style={text=="Issue Enquiry"?styles.currentbtn:styles.btn}>
            <Text style={text=="Issue Enquiry"?styles.txtofuser:styles.txt}>{text}</Text>
        </View>
        
    );
}
export default CommonButton;