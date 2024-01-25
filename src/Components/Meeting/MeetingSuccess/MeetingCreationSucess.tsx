import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
interface Props{
    navigationProps:any
}
const MeetingCompleted:React.FC<Props>=({navigationProps}:Props)=>{
    return(
        <View style={{backgroundColor:'#FFFFFF',height:'100%'}}>
        <Image source={require('../../images/Handshake.png')}  style={{marginTop:114,alignSelf:'center'}}/>
        <Text style={{width:253,height:60,marginLeft:70,fontWeight:'500',fontSize:20,lineHeight:30,textAlign:'center',color:'#233972',marginTop:45}}>Meeting Details created successfully.</Text>
     <TouchableOpacity onPress={()=>{navigationProps.navigation.navigate('MainScreen')}} style={{alignSelf:'center',height:56,width:168,gap:10,backgroundColor:'#233972',marginTop:32,borderRadius:100}}>
     <Text style={{color:'#FFFFFF',fontWeight:'500',fontSize:16,lineHeight:20,width:111,alignSelf:'center',marginTop:17}}>Back To Home</Text>
     </TouchableOpacity>
        </View>
    );
}
export default MeetingCompleted;