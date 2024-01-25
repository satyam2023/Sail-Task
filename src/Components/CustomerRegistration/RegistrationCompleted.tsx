import React from "react";
import Header from "./Header";
import { Image, Text, TouchableOpacity } from "react-native";
interface RegistrationProps{
    NavigationProps:any
}
const RegistrationCompleted:React.FC<RegistrationProps>=({NavigationProps}:RegistrationProps)=>{
    return(<>
     <Header heading="Add Customer Representative"  navigationProps={NavigationProps} CurrentScreen={3} topheading="Create Customer Profile"/>
     <Image source={require('../images/Frame.png')} style={{alignSelf:'center',marginTop:106}}/>
     <Text style={{width:253,height:60,marginLeft:70,fontWeight:'500',fontSize:20,lineHeight:30,textAlign:'center',color:'#233972',marginTop:24}}>Customer profile created successfully.</Text>
     <TouchableOpacity onPress={()=>{NavigationProps.navigation.navigate('MainScreen')}} style={{alignSelf:'center',height:56,width:168,gap:10,backgroundColor:'#233972',marginTop:32,borderRadius:100}}>
     <Text style={{color:'#FFFFFF',fontWeight:'500',fontSize:16,lineHeight:20,width:111,alignSelf:'center',marginTop:17}}>Back To Home</Text>
     </TouchableOpacity>
    </>);
}
export default RegistrationCompleted;