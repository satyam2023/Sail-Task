import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";

interface MainHeaderProps{
    navigationProps:any
    heading:any
}
const MainHeader:React.FC<MainHeaderProps>=({navigationProps,heading}:MainHeaderProps)=>{
    return(
        <View style={{height:60,width:'100%',backgroundColor:'#233972',flexDirection:'row'}}>
        <TouchableOpacity onPress={()=>navigationProps.navigation.navigate('MainScreen')}>
            <Image source={require('../images/Arrow.png')} style={{tintColor:'#FFFFFF',width:9,height:15,transform: [{ rotate: '180deg' }],marginLeft:20,marginTop:18}}/>
            </TouchableOpacity> 
           <Text style={{marginTop:13,color:'#FFFFFF',marginLeft:16,width:"auto",height:36,fontWeight:"600",fontSize:16}}>{heading}</Text>
       </View>
    );
}

export default MainHeader;