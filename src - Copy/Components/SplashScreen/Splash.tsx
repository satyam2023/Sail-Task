import React from "react";
import { Image, StatusBar, View } from "react-native";
import styles from "./Style";

const Splash: React.FC<{}>=()=>{
return(
   
    <View style={{height:'100%',width:'100%',backgroundColor:'#FFFFFF',flexDirection: 'column', justifyContent: 'center'}}>
        
    <StatusBar barStyle={'dark-content'}  backgroundColor={'#FFFFFF'}/>
    
    <Image source={require('../images/Splash.png')} style={{alignSelf:'center',}}  />
    
    </View>
   
);

}

export default Splash;