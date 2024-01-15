import React, { FC } from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Footer:FC<{}>=()=>{

    return(
       <SafeAreaView  >
       
        
      <View style={{height:96,width:'40%',backgroundColor:'#FFFFFF',position:'absolute',borderTopRightRadius:30,top:400}}>

      </View>

      <View style={{height:96,width:'45%',backgroundColor:'#FFFFFF',position:'absolute',marginLeft:'60%',borderTopLeftRadius:30,top:400}}>

      </View>
      <View style={{height:66,width:100,backgroundColor:'#FFFFFF',position:'absolute',marginLeft:'40%',top:430}}/>
      
      <View style={{height:100,width:100,backgroundColor:'#E6E6E6',position:'absolute',left:'38%',top:350,borderRadius:90,}}/>
     <View style={{height:56,width:56,alignSelf:'center',position:'absolute',backgroundColor:"#E67437",borderRadius:30,top:380}}>
       <Image source={require('../images/plus.png')}/>
     </View>


       </SafeAreaView>
    );

}

export default Footer;