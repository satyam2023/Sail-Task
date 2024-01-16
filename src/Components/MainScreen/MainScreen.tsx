import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import FirstHomeScreen from "./FirstHomeScreen";


const MainScreen:React.FC<{}>=(props:any)=>{
    return (<SafeAreaView  style={{backgroundColor:'#E6E6E6',height:'100%'}}>
       
       <FirstHomeScreen navigationprop={props}/>
      
    </SafeAreaView>);
}

export default MainScreen;