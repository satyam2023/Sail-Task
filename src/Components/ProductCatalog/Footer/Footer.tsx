import React, { FC, useRef } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomDrawer from "../../MainScreen/BottomDrawer/BottomDrawer";

interface Footerprops{
  color:any,
  navigationprops:any,
  // PlusClicked:Function
}
const Footer:FC<Footerprops>=({color,navigationprops}:Footerprops)=>{
  const BottomDrawerRef= useRef<any>();
  console.log("Navigation Details::",navigationprops.route);
  function PlusClicked() {
    console.log("Bottom PLus Clicked Succesful:::")
    console.log("abiut ref",BottomDrawerRef.current)
    BottomDrawerRef.current.handleClicked();
   
}
    return(
       <View style={{position:'absolute',}}>
       <View style={{height:96,width:'42%',backgroundColor:'#FFFFFF',borderTopRightRadius:30,top:730}}>
       <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={()=>navigationprops.navigation.navigate('MainScreen')}>
        {/* { navigationprops.route.name==="MainScreen"? */}
        <Image source={require('../../images/Home.png')} style={{marginLeft:35,marginTop:39}}/>
              {/* : <Image source={require('../../images/HomeDull.png')} style={{marginLeft:35,marginTop:39}}/>   } */}
        </TouchableOpacity> 
        <TouchableOpacity onPress={()=>{navigationprops.navigation.navigate('ProductCatalog')}}>
          
        {/* { navigationprops.route.name==="ProductCatalog"? */}
         <Image source={require('../../images/shop.png')} style={{marginLeft:56,marginTop:39}} />
       {/* :<Image source={require('../../images/shopClicked.png')} style={{marginLeft:56,marginTop:39}} />} */}
       </TouchableOpacity>
     </View>
      </View>

      <View style={{height:96,width:'50%',backgroundColor:'#FFFFFF',marginLeft:'58%',borderTopLeftRadius:30,zIndex:2,top:630}}>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={()=>{navigationprops.navigation.navigate('MainEnquiry')}}>
         {/* { navigationprops.route.name=="MainEnquiry"?   */}
         <Image source={require('../../images/profile2user.png')} style={{marginLeft:35,marginTop:39}} />
         {/* :<Image source={require('../../images/profile2userClicked.png')} style={{marginLeft:35,marginTop:39}} />} */}
         </TouchableOpacity>
         <TouchableOpacity onPress={()=>{navigationprops.navigation.navigate('CMS')}}>
         {/* { navigationprops.route.name=="CMS"?  */}
            <Image source={require('../../images/setting2.png')} style={{marginLeft:56,marginTop:39}}/>
      {/* :  
           <Image source={require('../../images/setting2Clicked.png')} style={{marginLeft:56,marginTop:39}}/>} */}
       </TouchableOpacity>
          </View>
      </View>
      <View style={{height:100,width:100,backgroundColor:'#FFFFFF',marginLeft:'38%',top:'144%',zIndex:2,}}/>
      
      <View style={{height:35,width:90,backgroundColor:color,left:'38%',top:'112%',borderBottomRightRadius:150,borderBottomLeftRadius:150,zIndex:5}}/>
     <TouchableOpacity onPress={()=>{PlusClicked()}}  style={{borderRadius:33,alignSelf:'center',backgroundColor:'red',top:'95%',zIndex:5}}>
     
       <Image source={require('../../images/plus.png')}/>
     
     </TouchableOpacity>
       <BottomDrawer Navigationprops={navigationprops} ref={BottomDrawerRef}/>
       </View>
    );

}

export default Footer;