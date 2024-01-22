import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, FlatList } from "react-native";
import styles from "../Style";
const ForPlannedVisit:React.FC<{}>=()=>{
    const[details,setDetails]=useState<boolean>(false)
    
    return(
        <View style={{width:353,height:70,backgroundColor:'#FFFFFF',borderRadius:10,flexDirection:'row',marginTop:16,marginLeft:19}}>
                <Image source={require('../../images/profile2user.png')} style={styles.img}/>
                <View style={{width:248,marginLeft:16.5}}>
                <Text style={styles.customertext}>Customer Visit 1</Text>
                <Text style={styles.companytext}>XYZ Steelworks Private Limited</Text>
                </View>
                <TouchableOpacity onPress={()=>{}}>
                <Image source={require('../../images/Arrow.png')} style={{
                   transform: [{ rotate: '90deg' }],marginLeft:0,marginTop:18,
                   width:8,height:13
                }}/>
                </TouchableOpacity>
                {/* {details?<FlatList data={} renderItem={} showsVerticalScrollIndicator={false}/>:null} */}
            </View> 
    );
}

export default ForPlannedVisit;