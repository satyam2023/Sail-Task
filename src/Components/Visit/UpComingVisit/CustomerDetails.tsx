import React from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomerCommon from "./CustomerCommon";
import styles from "./Style";
import Data from "./DATA";
interface CustomerProps{
    status:Function,
}
const CustomerDetails:React.FC<CustomerProps>=(props:any)=>{

   const renderItem=(item:any)=>{
    
    return(
        <CustomerCommon uppertext={item.item.uppertext} lowertext={item.item.lowertext} imagepath={item.item.imagepath}/>
    );
   }

    return(
        <View style={{backgroundColor:'#FFFFFF',width:353,height:'100%',marginLeft:20,marginTop:16,borderRadius:10}}>
           
            <View style={{width:353,height:70,backgroundColor:'#FFFFFF',borderRadius:10,flexDirection:'row',marginTop:16,marginLeft:0}}>
                <Image source={require('../../images/profile2user.png')} style={styles.img}/>
                <View style={{width:248,marginLeft:16.5}}>
                <Text style={styles.customertext}>Customer Visit 1</Text>
                <Text style={styles.companytext}>XYZ Steelworks Private Limited</Text>
                </View>
                <TouchableOpacity onPress={()=>props.status(false)}>
                <Image source={require('../../images/Arrow.png')} style={{
                   transform: [{ rotate: '270deg' }],marginLeft:0,marginTop:18,
                   width:8,height:13
                }}/>
                </TouchableOpacity>
            </View>
            
            <FlatList
            data={Data}
            renderItem={renderItem} 
            />
            
            </View>
    );
}

export default CustomerDetails;