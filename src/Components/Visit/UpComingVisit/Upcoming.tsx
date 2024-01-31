import React from "react"
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Image } from "react-native";
import styles from "./Style";
interface UpcomingProps{
    id:any,
    status:any
}
const UpcomingVisit: React.FC<UpcomingProps>=({id,status}:UpcomingProps)=>{
    function fun(){
        console.log("clickle")
    }
    return(
        <View>
            <View style={{width:353,height:70,backgroundColor:'#FFFFFF',borderRadius:10,flexDirection:'row',marginTop:16,marginLeft:20}}>
                <Image source={require('../../images/profile2userClicked.png')} style={styles.img}/>
                <View style={{width:248,marginLeft:16.5}}>
                <Text style={styles.customertext}>Customer Visit 1</Text>
                <Text style={styles.companytext}>XYZ Steelworks Private Limited</Text>
                </View>
                <TouchableOpacity onPress={()=>{status(true)}}>
                <Image source={require('../../images/Arrow.png')} style={{
                   transform: [{ rotate: '90deg' }],marginLeft:6,marginTop:31,
                   width:8,height:13
                }}/>
                </TouchableOpacity>
            </View>
            <View style={{width:353,height:70,backgroundColor:'#FFFFFF',borderRadius:10,flexDirection:'row',marginTop:16,marginLeft:20}}>
                <Image source={require('../../images/profile2userClicked.png')} style={styles.img}/>
                <View style={{width:248,marginLeft:16.5}}>
                <Text style={styles.customertext}>Customer Visit 1</Text>
                <Text style={styles.companytext}>XYZ Steelworks Private Limited</Text>
                </View>
                <TouchableOpacity onPress={()=>{status(true)}}>
                <Image source={require('../../images/Arrow.png')} style={{
                   transform: [{ rotate: '90deg' }],marginLeft:6,marginTop:31,
                   width:8,height:13
                }}/>
                </TouchableOpacity>
            </View>
            <View style={{width:353,height:70,backgroundColor:'#FFFFFF',borderRadius:10,flexDirection:'row',marginTop:16,marginLeft:20}}>
                <Image source={require('../../images/profile2userClicked.png')} style={styles.img}/>
                <View style={{width:248,marginLeft:16.5}}>
                <Text style={styles.customertext}>Customer Visit 1</Text>
                <Text style={styles.companytext}>XYZ Steelworks Private Limited</Text>
                </View>
                <TouchableOpacity onPress={()=>{status(true)}}>
                <Image source={require('../../images/Arrow.png')} style={{
                   transform: [{ rotate: '90deg' }],marginLeft:6,marginTop:31,
                   width:8,height:13
                }}/>
                </TouchableOpacity>
            </View>
            
            </View>
    );



}

export default UpcomingVisit;