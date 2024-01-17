import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Image } from "react-native";
import styles from "./Style";
interface CommonProps{
    uppertext:string;
    lowertext:string;
    imagepath:any;

}


const CustomerCommon: React.FC<CommonProps>=({uppertext,lowertext,imagepath}:CommonProps)=>{
    //console.log("type of image",typeof(imagepath))
    return(
       
               <View style={{width:353,height:70,backgroundColor:'#FFFFFF',borderRadius:10,flexDirection:'row',}}>
                <Image source={imagepath} style={styles.img}/>
                <View style={{width:248,marginLeft:16.5}}>
                <Text style={styles.customertext}>{uppertext}</Text> 
                <Text style={styles.companytext}>{lowertext}</Text>
                </View>
               
            </View>
           
    );
}
export default CustomerCommon;