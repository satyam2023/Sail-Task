import React, { FC } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Footerprops{
  
  color:any,
  navigationprops:any
}
const Footer:FC<Footerprops>=({color,navigationprops}:Footerprops)=>{

    return(
       <View>

      <View style={{height:96,width:'40%',backgroundColor:'#FFFFFF',position:'absolute',borderTopRightRadius:30,top:600}}>
      <View style={{flexDirection:'row'}}>
       <TouchableOpacity>
        <Image source={require('../images/Home.png')} style={{marginLeft:35,marginTop:39}}/>
        </TouchableOpacity> 
        <TouchableOpacity>
          <Image source={require('../images/shop.png')} style={{marginLeft:56,marginTop:39}} />
        </TouchableOpacity>
</View>
      </View>

      <View style={{height:96,width:'45%',backgroundColor:'#FFFFFF',position:'absolute',marginLeft:'60%',borderTopLeftRadius:30,top:600 ,zIndex:2,}}>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={()=>{navigationprops.navigation.navigate('Details')}}>
         <Image source={require('../images/profile2user.png')} style={{marginLeft:35,marginTop:39}}/>
         
         </TouchableOpacity>
         <TouchableOpacity>
           <Image source={require('../images/setting2.png')} style={{marginLeft:56,marginTop:39}}/>
       </TouchableOpacity>
          </View>
      </View>
      <View style={{height:66,width:100,backgroundColor:'#FFFFFF',position:'absolute',marginLeft:'40%',top:630}}/>
      
      <View style={{height:100,width:100,backgroundColor:color,position:'absolute',left:'38%',top:550,borderRadius:100,}}/>
     <TouchableOpacity >
     <View style={{height:56,width:56,alignSelf:'center',position:'absolute',backgroundColor:"#E67437",borderRadius:30,top:580}}>
       <Image source={require('../images/plus.png')}/>
     </View>
     </TouchableOpacity>


       </View>
    );

}

export default Footer;