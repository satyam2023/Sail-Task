import React, { useState } from "react";
import Styles from "./Style";
import { TouchableOpacity, Text, Image, View, FlatList } from "react-native";
interface Props{
    data:any,
    heading:string,
}
const CommonDropDown:React.FC<Props>=({data,heading}:Props)=>{
    const [dropclicked,setdropclicked]=useState<boolean>(false);
    const [currentname,setCurrentName]=useState<string>(heading)
   function renderItem(item:any,index:number){
    return(
        <TouchableOpacity onPress={()=>{
            setCurrentName(item.segment);
            setdropclicked(false);
            
        }} key={index} style={{marginHorizontal:21,marginTop:5,backgroundColor:'#FFFFFF',height:30,borderRadius:10,}}>
            <Text style={{alignSelf:'center'}}>{item.segment}</Text>
        </TouchableOpacity>
    );
   }
   
    return(
        <View>
        <TouchableOpacity style={Styles.DropColumn} onPress={()=>{setdropclicked(!dropclicked)}}>
    <Text style={{width:214,fontWeight:'400',fontSize:14,lineHeight:17.5,height:18,marginTop:16,marginLeft:16}}>{currentname}</Text>
    <Image source={require('../images/Arrow.png')} style={{tintColor:'#110F2480',transform:[{rotate:'90deg'}],marginTop:16,marginLeft:83}}/>
 </TouchableOpacity>
 {dropclicked ?
    data.map(renderItem):<></>}
</View>

    );
}
export default CommonDropDown;