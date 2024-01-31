import React, { useState } from "react";
import styles from "./Style";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import HeaderMain from "../HeaderForMainScreen/HeaderMain";
import CommonBoxClickable from "./CommonBoxClickable";
import MsgDetails from "./MsgDetails/MsgDetails";
const Message:React.FC<{}>=(props:any)=>{
    const [msgOpenStatus,setmsgOpenStatus]=useState<boolean>(false);
    function setOpenStatus(param:boolean){
    setmsgOpenStatus(param)
    }
    return(
        <ScrollView style={{backgroundColor:'#F9F9FC',}}>
            {!msgOpenStatus ? <> 
            <HeaderMain topheading="Inbox(03)" navigationProps={props}/>
              <CommonBoxClickable  setOpenStatus={setOpenStatus}/>
             <CommonBoxClickable  setOpenStatus={setOpenStatus}/>
            <CommonBoxClickable setOpenStatus={setOpenStatus}/>
           </> :<MsgDetails navigationprops={props}/>}
                
            
        </ScrollView>
    );
}

export default Message;