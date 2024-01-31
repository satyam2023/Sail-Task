import React, { useEffect, useRef, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import CustomFooter from "../CustomFooter/CustomFooter";
import CustomHeader from "../CustomHeader/CustomHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import First from "../FirstSignUpPage/First";
import Second from "../SecondSignUpPage/Second";
import Third from "../ThirdSignUpPage/Third";
const SignUpScreen: React.FC<{}> = (props:any) => {
    const [CurrentScreen,setCurrentScreen]=useState(1);
    const [firstscreenvalid,setfirstscreenvalid]=useState(false)
   
    function setScreen(num:number){
        setCurrentScreen(num);

    }
    const FirstScreenRef = useRef<any>();
    const SecondScreenRef = useRef<any>();
    const ThirdScreenRef = useRef<any>();
    function FirstSubmit() {
        
        if (FirstScreenRef.current && CurrentScreen == 1) {
          //  console.log("first submit")
            FirstScreenRef.current.handleSubmit();
        }
    }
    function SecondSubmit() {
        
        if (SecondScreenRef.current && CurrentScreen == 2) {
           // console.log("Submit submit")
            SecondScreenRef.current.handleSubmit();
        }
    }
    function ThirdSubmit() {
        
        if (ThirdScreenRef.current && CurrentScreen == 3) {
           // console.log("Third submit")
            ThirdScreenRef.current.handleSubmit();
        }
    }

    function totalvalidation(booly:any){
      setfirstscreenvalid(booly);
    }
   

    return (
        <SafeAreaView>
            <ScrollView >
           {CurrentScreen==1 && <First totalvalidation={totalvalidation} setScreen={setScreen} CurrentScreen={CurrentScreen} ref={FirstScreenRef}/>}
           {CurrentScreen==2 && <Second setScreen={setScreen} ref={SecondScreenRef}/>}
           {CurrentScreen==3 && <Third  setScreen={setScreen} ref={ThirdScreenRef} props={props}/>}
            </ScrollView>
            <CustomFooter totalvalidation={firstscreenvalid} setScreen={setScreen} CurrentScreen={CurrentScreen} FirstSubmit={FirstSubmit} SecondSubmit={SecondSubmit} ThirdSubmit={ThirdSubmit}
                       props={props}/>
        </SafeAreaView>
    );
}

export default SignUpScreen

