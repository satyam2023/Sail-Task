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
     FooterContainer:{
        backgroundColor:'#FFFFFF',
        //flexDirection:'row',
       // justifyContent:'space-evenly',
        height:120,
        width:'100%',
        position:'absolute',
        bottom:0
    },
    btn:{
        marginLeft:20,
        height:56,
        width:168,
      borderWidth:1,
      borderColor:'#233972',
      borderRadius:100,
      marginTop:16
    },
    probtn:{
    marginLeft:14,
    height:56,
    width:168,
      borderWidth:1,
      borderColor:'#F9F9FC',
      borderRadius:100,
      marginTop:16
    

    },

});

export default styles;