import React from 'react'
import { SafeAreaView, StatusBar, Text, TouchableOpacity } from 'react-native'
import { Image } from 'react-native';
import { UseDispatch, useDispatch } from 'react-redux';
import { setCustomerProfileButton } from '../../../Redux/Slice2';

interface LastScreenProps{
    navigationProps:any
}

const LastScreen:React.FC<LastScreenProps> = ({navigationProps}:LastScreenProps) => {
  const dispatch=useDispatch();
    return (
   <SafeAreaView style={{height:900}}>
    <StatusBar backgroundColor={'#FCFCFC'}/>
    <Image source={require('../../images/CreateCustomerLast.png')} style={{alignSelf:'center',alignItems:'center',marginTop:229}}/>
    <Text style={{width:297,height:60,marginLeft:70,fontWeight:'500',fontSize:20,lineHeight:30,textAlign:'center',color:'#233972',marginTop:45}}>Customer Profile Successfully
Updated</Text>
     <TouchableOpacity onPress={()=>{dispatch(setCustomerProfileButton(false));navigationProps.navigation.navigate('MainScreen')}} style={{alignSelf:'center',height:56,width:168,gap:10,backgroundColor:'#233972',marginTop:32,borderRadius:100}}>
     <Text style={{color:'#FFFFFF',fontWeight:'500',fontSize:16,lineHeight:20,width:111,alignSelf:'center',marginTop:17}}>Back To Home</Text>
     </TouchableOpacity>
   </SafeAreaView>
  )
}

export default LastScreen