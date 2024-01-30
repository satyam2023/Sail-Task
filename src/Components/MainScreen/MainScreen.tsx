import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import FirstHomeScreen from "./FirstHomeScreen";


const MainScreen:React.FC<{}>=(props:any)=>{
    return (<SafeAreaView  style={{backgroundColor:'#F9F9FC',height:'100%'}}>
       
       <FirstHomeScreen props={props}/>
      
    </SafeAreaView>);
}

export default MainScreen;