import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import styles from "./Style";
interface ButtonProps{
    text:string,
    Screen:any
}
const CommonButton:React.FC<ButtonProps>=({text,Screen}:ButtonProps)=>{
        const [CurrentText,setCurrentText]=useState("")
     useEffect(  ()=>{if(Screen==1){
        setCurrentText("User Enquiry")
       
       }
       else if(Screen==2){
        setCurrentText("Issue Enquiry")
       
       }
       else if(Screen==3){
        setCurrentText("Nearby Customers")
         
       }},[Screen]);

       console.log("Current Text::",CurrentText);


       
    return(
       
        <View style={text==CurrentText?styles.currentbtn:styles.btn}>
            <Text style={text==CurrentText?styles.txtofuser:styles.txt}>{text}</Text>
        </View>
        
    );
}
export default CommonButton;