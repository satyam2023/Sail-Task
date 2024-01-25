import React from "react";
import { View, Image, Text } from "react-native";
interface UserCardInterface{
    name:string
    location:string
}
const UserCard:React.FC<UserCardInterface>=({name,location}:UserCardInterface)=>{
    return(
        <View style={{height:70,width:353,borderRadius:10,backgroundColor:'#FFFFFF',marginTop:12,marginLeft:20,flexDirection:'row'}}>
        <Image source={require('../../images/profile2user.png')} style={{marginVertical:22.3,marginLeft:22.3,}}/>
        <View style={{marginLeft:24.67,marginTop:16}}>
        <Text style={{width:93,fontWeight:'400',fontSize:14,lineHeight:14,color:'#110F24'}}>{name}</Text>
        <Text  style={{width:248,fontWeight:'400',fontSize:12,lineHeight:16,color:'#110F2480'}}>{location}</Text>
        </View>
    </View>
    );
};

export default UserCard;
