import React, { useEffect, useState } from "react";
import styles from "./Style";
import { TouchableOpacity, Text, Image, View, FlatList } from "react-native";
interface Props{
    data:any,
    heading:string,
    setReason:Function,
}
const DropDown:React.FC<Props>=({data,heading,setReason}:Props)=>{
    const [dropType,setDropType]=useState<number>(1);
   useEffect(()=>{ if(heading=="Select Issue" || heading=="Escalated To"){
    setDropType(2);
}},[])
    
    const [focus,setFocus]=useState<boolean>(false);
    const [dropclicked,setdropclicked]=useState<boolean>(false);
    const [currentname,setCurrentName]=useState<string>(heading)
   
   function renderItem(item:any,index:number){
    return(
        <TouchableOpacity onPress={()=>{
            if(heading=="Select Reason" && item.segment=='A'  ){
                setReason(true);
            }
            setCurrentName(item.segment);
            setdropclicked(false);
            setFocus(true);
            
            
        }} key={index} style={{marginHorizontal:21,backgroundColor:'#FFFFFF',height:56,borderBottomWidth:1,borderColor:'#E6E6E6'}}>
            <Text style={{textAlign:'left',color:'black',marginLeft:24,marginTop:14,height:20}}>{item.segment}</Text>
        </TouchableOpacity>
    );
   }
   
    return(
        <View>
            {focus?
                <View style={{position:'absolute',top:25,left:44,zIndex:2}}>
                    <Text style={{fontWeight:'400',fontSize:12}}>{heading}</Text>
                </View>:null}

        <TouchableOpacity style={dropType==1 ?styles.DropColumn:styles.Drop} onPress={()=>{setdropclicked(!dropclicked); }}>
    <Text style={dropType==1?[{width:214,fontWeight:'400',fontSize:14,lineHeight:17.5,height:18,marginTop:16,marginLeft:16},focus?{color:'#110F24',marginTop:29,marginLeft:21}:{}]:[{width:87,fontWeight:'400',fontSize:14,lineHeight:17.5,height:18,marginTop:16,marginLeft:16},focus?{color:'#110F24',marginTop:29,marginLeft:21}:{}]}>{currentname}</Text>
    <Image source={require('../images/Arrow.png')} style={dropType==1?{tintColor:'#110F2480',transform:[{rotate:'90deg'}],marginTop:16,marginLeft:83}:{tintColor:'#110F2480',transform:[{rotate:'90deg'}],marginTop:16,marginLeft:183}}/>
 </TouchableOpacity>
 {dropclicked ?
 <View style={{marginTop:5}}> 
   { data.map(renderItem)}
    </View>
    :<></>}
</View>

    );
}
export default DropDown;