import React, { useState } from "react";
import { Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View }
 from "react-native";
 interface HeaderProps{
    navigationProps:any,
    topheading:string
 }
const HeaderMain:React.FC<HeaderProps>=({navigationProps,topheading}:HeaderProps)=>{

    return (
    <SafeAreaView>
        <StatusBar backgroundColor={'#233972'} barStyle={'light-content'}/>
            <View style={{height:60,width:'100%',backgroundColor:'#233972',flexDirection:'row'}}>
             <TouchableOpacity style={{marginLeft:21,marginTop:18}} onPress={()=>{navigationProps.navigation.navigate('MainScreen')}}>
                 <Image source={require('../images/Arrow.png')} style={{tintColor:'#FFFFFF',width:9,height:15,transform: [{ rotate: '180deg' }],}}/>
                 </TouchableOpacity> 
                <Text style={{marginTop:13,color:'#FFFFFF',marginLeft:16,height:36,fontWeight:"600",fontSize:16}}>{topheading}</Text>

            </View>
         
    </SafeAreaView>
    );
}

export default HeaderMain;