import React from "react";
import { StyleSheet } from "react-native";
const styles=StyleSheet.create({
    inputbox:{
        width:353,
         height:56,
         borderRadius:33,
         marginLeft:20,
         backgroundColor:'#FFFFFF',
         flexDirection:'row',
         marginBottom:16,
    },
    updateHeaderBtn:{
        backgroundColor:'#233972',
        width:100,
        height:36,
        borderRadius:100,
        gap:10,
       position:'absolute',
       top:10,
       right:10,
    
    
    },
    updateTxt:{
        alignSelf:'center',
        alignItems:'center',
        fontWeight:'500',
        color:'#FFFFFF',
        fontSize:16,
        lineHeight:20,
        marginTop:6
        
    },
    btn:{
        width:353,
        height:58,
        backgroundColor:'#FFFFFF',
        marginLeft:20,
        borderRadius:33,
        flexDirection:'row'

    },
    Txt:{
        height:16,
        width:189,
        color:'#233972',
        fontWeight:"500",
        fontSize:14,
        lineHeight:16,
        marginLeft:24,
        top:21
    }
});
export default styles;