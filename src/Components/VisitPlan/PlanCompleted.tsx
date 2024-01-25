import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
interface Props{
    navigationProps:any
}
const PlanCompleted:React.FC<Props>=({navigationProps}:Props)=>{
    return(
        <>
        <Image source={require('../images/PlannedFrame.png')}  style={{marginTop:94}}/>
        <Text style={{width:253,height:60,marginLeft:70,fontWeight:'500',fontSize:20,lineHeight:30,textAlign:'center',color:'#233972',marginTop:24}}>Visit plan created successfully.</Text>
     <TouchableOpacity onPress={()=>{navigationProps.navigation.navigate('MainScreen')}} style={{alignSelf:'center',height:56,width:168,gap:10,backgroundColor:'#233972',marginTop:32,borderRadius:100}}>
     <Text style={{color:'#FFFFFF',fontWeight:'500',fontSize:16,lineHeight:20,width:111,alignSelf:'center',marginTop:17}}>Back To Home</Text>
     </TouchableOpacity>
        </>
    );
}
export default PlanCompleted;