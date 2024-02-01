import React from "react";
import { StyleSheet } from "react-native";
const styles= StyleSheet.create({
name:{
    height:128,
    borderBottomLeftRadius:20,
    width:'100%',
    //width:393,
    backgroundColor:'#233972',
},
Welcometext:{
fontWeight:"400",
fontSize:16,
lineHeight:24,
color:'#FFFFFF'

},
Welcometextname:{
    fontWeight:"600",
    fontSize:16,
    lineHeight:24,
    color:'#FFFFFF'
    
    },
    circle:{
        marginTop:15,
        marginLeft:17,
        width:36,
        height:36,
        backgroundColor:'#E67437',
        borderRadius:18
    },
    upcoming:{
 marginLeft:20,
 margin:10,
   width:109,
   height:108,
   borderRadius:4,
   backgroundColor:'#EEFDFF'
    },
    plannedvisit:{
        marginLeft:10,
        margin:10,
          width:109,
          height:108,
          borderRadius:4,
          backgroundColor:'#EEF4FF'
    },
    executedvisit:{
        marginLeft:10,
        margin:10,
          width:109,
          height:108,
          borderRadius:4,
          backgroundColor:'#EDFEEF'
    },
    visitnumber:{
  width:28,
  height:36,
  fontWeight:"600",
  lineHeight:36,
  fontSize:24,
  marginTop:16,
  marginLeft:8,
  color:'#5CC7D7'
    },
    plannednumber:{
        width:28,
        height:36,
        fontWeight:"600",
        lineHeight:36,
        fontSize:24,
        marginTop:16,
        marginLeft:8,
        color:'#233972',
    },
    exedcutednumber:{
        width:28,
        height:36,
        fontWeight:"600",
        lineHeight:36,
        fontSize:24,
        marginTop:16,
        marginLeft:8,
        color:'#14A223',
    },
    visitimg:{
      width:36,
      height:36,
      marginTop:16,
      borderRadius:10,
      marginLeft:16,
    },
    upcomingvisit:{
        height:32,
        width:77,
 color:'#110F24',
 fontWeight:'500',
 fontSize:14,
 lineHeight:16,
 marginLeft:16,
 marginTop:8,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  bottomSheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    bottom: 0,
    borderWidth: 1,
    width:'100%',
    borderRadius:5,
    borderColor:'#FAFAFA',
    backgroundColor:'#FAFAFA',
},
});
export default styles;


    