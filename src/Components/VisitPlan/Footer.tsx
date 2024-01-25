import React, { useRef, useState } from 'react';
import type { PropsWithChildren } from 'react';
import styles from './Style';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface FooterProps {
  setScreen:Function;
}
 
const Footer:React.FC<FooterProps>=({setScreen}:FooterProps)=>{
    
    
    return(
        <View 
        style={styles.FooterContainer}>

            <View style={{flexDirection:'row'}}>
       <TouchableOpacity style={styles.btn}>
        <Text style={{color:'#233972',alignSelf:'center',width:58,height:20,fontWeight:'500',fontSize:16,lineHeight:20,marginTop:17}}>Cancel</Text>
       </TouchableOpacity> 
       <TouchableOpacity style={styles.probtn} onPress={()=>{setScreen('Submitted')}}>
         <Text style={{height:20,lineHeight:20,color:'#110F2480',fontWeight:'500',fontSize:16,alignSelf:'center',marginTop:17}}>Submit</Text>
       </TouchableOpacity> 
       </View>
        </View>
    );
}
export default Footer;

