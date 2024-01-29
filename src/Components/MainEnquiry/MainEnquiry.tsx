import React, { useEffect, useState } from "react";
import styles from "./Style";
import { FlatList, Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import CommonButton from "../UserEnquiry Screen/CommomButton";
import Enquiry from "../UserEnquiry Screen/Enquiry";
import IssueEnquiry from "../Issue Enquiry/IssueEnquiry";
import NearbyCustomer from "../NearbyCustomer/NearByCustomer";
import {  useSelector } from "react-redux";
const MainEnquiry:React.FC<{}>=(props:any)=>{
    const [CurrentScreen,setCurrentScreen]=useState(1);
    const Data=[{text:"User Enquiry"},{text:"Issue Enquiry"},{text:"Nearby Customers"}];
    const Number=useSelector((state:any)=>state.button.EnquiryScreen);
    console.log("Screen Number",Number)
     

    useEffect(()=>{
       setCurrentScreen(Number)
    },[])
    function renderItem(item:any){ 
        function handlenavigation(){
                
            if(item.item.text=="User Enquiry"){
               setCurrentScreen(1)
            }
            else if(item.item.text=="Issue Enquiry"){
               setCurrentScreen(2)
            }
            else if(item.item.text=="Nearby Customers"){
               setCurrentScreen(3);
            }
            
        } 
        return(
            <TouchableOpacity onPress={handlenavigation}> 
            <CommonButton text={item.item.text} Screen={CurrentScreen}/>
            </TouchableOpacity>);
       }
    return(
        <SafeAreaView >
        <StatusBar backgroundColor={'#233972'} barStyle={'light-content'}/>
        <View style={{height:60,width:'100%',backgroundColor:'#233972',flexDirection:'row'}}>
         <TouchableOpacity style={{marginLeft:21,marginTop:18}} onPress={()=>{props.navigation.navigate('MainScreen')}}>
             <Image source={require('../images/Arrow.png')} style={{tintColor:'#FFFFFF',width:9,height:15,transform: [{ rotate: '180deg' }],}}/>
             </TouchableOpacity> 
            <Text style={{marginTop:13,color:'#FFFFFF',marginLeft:16,width:62,height:36,fontWeight:"600",fontSize:16}}>Enquiry</Text>
        </View>
        <View style={{flexGrow:1}}>
        <FlatList data={Data} renderItem={renderItem} 
        horizontal={true} showsHorizontalScrollIndicator={false}
        style={{marginLeft:20}} />
</View>
        {CurrentScreen==1 && <Enquiry props={props}/>}
        { CurrentScreen==2 && <IssueEnquiry props={props}/>}
        { CurrentScreen==3 && <NearbyCustomer props={props}/>}

</SafeAreaView>
    );
};

export default MainEnquiry;