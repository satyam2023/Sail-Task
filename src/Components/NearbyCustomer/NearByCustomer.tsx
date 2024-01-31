import React from "react"
import { FlatList, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { Image } from "react-native";
import Data from "./Data";
import CommonButton from "./CommonButton";

interface NearbyCustomerProps{
    props:any
}


const NearbyCustomer:React.FC<NearbyCustomerProps>=({props}:NearbyCustomerProps)=>{
   
    

                function renderitem(item:any,index:number){
                    return(
                        <View key={index} style={{height:70,width:353,borderRadius:10,backgroundColor:'#FFFFFF',marginTop:12,marginLeft:20,flexDirection:'row'}}>
                            <Image source={item.image} style={{marginVertical:22.3,marginLeft:22.3}}/>
                            <View style={{marginLeft:24.67,marginTop:16}}>
                            <Text style={{width:80,fontWeight:'400',fontSize:14,lineHeight:14,color:'#110F24'}}>{item.name}</Text>
                            <Text  style={{width:248,fontWeight:'400',fontSize:12,lineHeight:16,color:'#110F2480'}}>{item.location}</Text>
                            </View>
                        </View>
                    )
                }

    return(
        <ScrollView style={{marginTop:10,backgroundColor:'#F9F9FC',height:'100%'}}>
           
            {/* <FlatList data={Data} renderItem={renderitem} style={{marginTop:12}}/> */}
            {
                Data.map(renderitem)
            }
            
        </ScrollView>
    )


}

export default NearbyCustomer;