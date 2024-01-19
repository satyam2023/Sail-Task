import React, { useRef, useState } from 'react';
import type { PropsWithChildren } from 'react';
import Styles from './Style';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
 
const Footer:React.FC<{}>=()=>{
    
    
    return(
        <View 
        style={Styles.FooterContainer}>
            <View style={{height:6,marginTop:0,backgroundColor:'#E8E8E8',width:'100%'}} />
            <View style={{flexDirection:'row'}}>
       <TouchableOpacity style={Styles.btn}>
        <Text style={{color:'#233972',alignSelf:'center',width:58,height:20,fontWeight:'500',fontSize:16,lineHeight:20,marginTop:17}}>Cancel</Text>
       </TouchableOpacity> 
       <TouchableOpacity style={Styles.probtn}>
         <Text style={{height:20,width:127,lineHeight:20,color:'#110F2480',fontWeight:'500',fontSize:16,alignSelf:'center',marginTop:17}}>Save & Proceed</Text>
       </TouchableOpacity> 
       </View>
        </View>
    );
}
export default Footer;

