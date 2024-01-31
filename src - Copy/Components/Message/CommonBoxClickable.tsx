import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./Style";
interface CommomBoxProps{
   setOpenStatus:Function 
}
const CommonBoxClickable:React.FC<CommomBoxProps>=({setOpenStatus}:CommomBoxProps)=>{
    // const [msgOpenStatus,setmsgOpenStatus]=useState<boolean>(false);
   
    return(
        <View style={styles.box}>
            <View>
             <Text style={styles.boxText}>Customer Code</Text>
             <Text style={styles.boxTextinner}>Customer Name</Text>
             </View>
             <TouchableOpacity onPress={()=>{setOpenStatus(true)}}>
                <Image source={require('../images/Arrow.png')} style={styles.img}/>
                </TouchableOpacity>
            </View>
    );
};
export default CommonBoxClickable;