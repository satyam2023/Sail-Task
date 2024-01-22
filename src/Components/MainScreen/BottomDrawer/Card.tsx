import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
interface cardProps{
    heading:string,
    image:any
    width:any
    left:any
}
const Card:React.FC<cardProps>=({heading,image,width,left}:cardProps)=>{
    return(
        <TouchableOpacity style={{height:124,width:165,marginLeft:20,borderRadius:4,borderWidth:1,borderColor:'#E8E8E8',backgroundColor:'#FFFFFF',marginTop:20}}>
            <Image source={image} style={{marginTop:16,alignSelf:'center'}}/>
            <Text style={{width:width,height:40,marginLeft:left,fontWeight:'500',fontSize:14,lineHeight:20,marginTop:16,color:'#333333',textAlign:'center'}}>{heading}</Text>
        </TouchableOpacity>
    );
}

export default Card;