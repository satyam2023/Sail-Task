import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { setCustomerProfileButton } from "../../../Redux/Slice2";
import { useDispatch } from "react-redux";
interface UserCardInterface{
    name:string
    location:string
}
const UserCard:React.FC<UserCardInterface>=({name,location}:UserCardInterface)=>{
    const dispatch=useDispatch();
    function handlepress(){
        dispatch(setCustomerProfileButton(true))
    }
    
    return(
        <View style={{height:70,width:353,borderRadius:10,backgroundColor:'#FFFFFF',marginTop:12,marginLeft:20,flexDirection:'row'}}>
        <Image source={require('../../images/profile2user.png')} style={{marginVertical:22.3,marginLeft:22.3,}}/>
        <View style={{marginLeft:24.67,marginTop:16,width:141}}>
        <Text style={{width:93,fontWeight:'400',fontSize:14,lineHeight:14,color:'#110F24'}}>{name}</Text>
        <Text  style={{width:141,fontWeight:'400',fontSize:12,lineHeight:16,color:'#110F2480'}}>{location}</Text>
        </View>
        <TouchableOpacity onPress={handlepress}>
        <Image source={require('../../images/Arrow.png')} style={{marginTop:28,marginLeft:119,width:8,height:13}}/>
        </TouchableOpacity>
    </View>
    );
};

export default UserCard;
