import React from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { setIsLog } from '../../Redux/Slice';

interface SettingHeaderProps{
    props:any
}

const SettingHeader:React.FC<SettingHeaderProps> = ({props}:SettingHeaderProps) => {
  const dispatch=useDispatch();
  return (
    <View style={{height:60,width:'100%',backgroundColor:'#233972',flexDirection:'row'}}>
    <TouchableOpacity onPress={()=>props.navigation.navigate('MainScreen')}>
        <Image source={require('../images/Arrow.png')} style={{tintColor:'#FFFFFF',width:9,height:15,transform: [{ rotate: '180deg' }],marginLeft:22,marginTop:24,}}/>
        </TouchableOpacity> 
       <Text style={{marginTop:13,color:'#FFFFFF',marginLeft:16,width:"auto",height:36,fontWeight:"600",fontSize:16,lineHeight:36}}>
        Settings
       </Text>
       <Image source={require('../images/logout.png')} style={{marginTop:21,marginLeft:187,height:20,width:20}}/>
      <TouchableOpacity onPress={()=>{props.navigation.navigate('SignIn');dispatch(setIsLog(false))}}>
       <Text style={{marginTop:19,color:'#FFFFFF',marginLeft:6,width:"auto",height:36,fontWeight:"600",fontSize:16}}>
        Logout
       </Text>
       </TouchableOpacity>
   </View>

  )
}

export default SettingHeader