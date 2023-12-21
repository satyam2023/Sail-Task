import React, { useRef, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import CustomFooter from "../CustomFooter/CustomFooter";
import CustomHeader from "../CustomHeader/CustomHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import First from "../FirstSignUpPage/First";
import Second from "../SecondSignUpPage/Second";
import Third from "../ThirdSignUpPage/Third";
const SignUpScreen: React.FC<{}> = () => {
    const [CurrentScreen,setCurrentScreen]=useState(1);
    function setScreen(num:number){
        setCurrentScreen(num);

    }
    const FirstScreenRef = useRef<any>();
    const SecondScreenRef = useRef<any>();
    const ThirdScreenRef = useRef<any>();
    function FirstSubmit() {
        
        if (FirstScreenRef.current && CurrentScreen == 1) {
            console.log("first submit")
            FirstScreenRef.current.handleSubmit();
        }
    }
    function SecondSubmit() {
        
        if (SecondScreenRef.current && CurrentScreen == 2) {
            console.log("Submit submit")
            SecondScreenRef.current.handleSubmit();
        }
    }
    function ThirdSubmit() {
        
        if (ThirdScreenRef.current && CurrentScreen == 3) {
            console.log("Third submit")
            ThirdScreenRef.current.handleSubmit();
        }
    }
   

    return (
        <SafeAreaView>
            <ScrollView >
           {CurrentScreen==1 && <First ref={FirstScreenRef}/>}
           {CurrentScreen==2 && <Second ref={SecondScreenRef}/>}
           {CurrentScreen==3 && <Third   ref={ThirdScreenRef}/>}
            </ScrollView>
            <CustomFooter setScreen={setScreen} CurrentScreen={CurrentScreen} FirstSubmit={FirstSubmit} SecondSubmit={SecondSubmit} ThirdSubmit={ThirdSubmit}/>
        </SafeAreaView>
    );
}

export default SignUpScreen

