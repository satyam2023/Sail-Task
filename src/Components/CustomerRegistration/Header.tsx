import React, { useState } from "react";
import { Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View }
 from "react-native";
 interface HeaderProps{
    navigationProps:any,
    heading:string
    CurrentScreen:number
    topheading:string
 }
const Header:React.FC<HeaderProps>=({navigationProps,heading,CurrentScreen,topheading}:HeaderProps)=>{

    return (
    <SafeAreaView>
        <StatusBar backgroundColor={'#233972'} barStyle={'light-content'}/>
            <View style={{height:60,width:'100%',backgroundColor:'#233972',flexDirection:'row'}}>
             <TouchableOpacity style={{marginLeft:21,marginTop:18}} onPress={()=>{navigationProps.navigation.navigate('MainScreen')}}>
                 <Image source={require('../images/Arrow.png')} style={{tintColor:'#FFFFFF',width:9,height:15,transform: [{ rotate: '180deg' }],}}/>
                 </TouchableOpacity> 
                <Text style={{marginTop:13,color:'#FFFFFF',marginLeft:16,height:36,fontWeight:"600",fontSize:16}}>{topheading}</Text>

            </View>
           {(topheading!="Add Customer Representative") ?<View style={{flexDirection:'row'}}>
                <Text style={{width:243,height:36,color:'#000000',fontWeight:'500',fontSize:16,marginLeft:20,marginTop:20}}>{heading}</Text>
                <Text style={{marginLeft:66,marginTop:20,height:36,color:'#000000',fontWeight:'500',fontSize:16}}>0{CurrentScreen}/<Text style={{fontWeight:'400'}}>03</Text></Text>
            </View>:<></>}
    </SafeAreaView>
    );
}

export default Header;