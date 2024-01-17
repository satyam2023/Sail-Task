import React from "react";
import { StyleSheet } from "react-native";
const styles=StyleSheet.create({
heading:{
    width:131,
    height:35,
    borderRadius:100,
    paddingHorizontal:16,
    paddingVertical:10,
    gap:10,
    backgroundColor:'#5CC7D7',
    flexDirection:'row',
    marginTop:32,
    marginLeft:10,
},
notheading:{
    width:131,
    height:35,
    borderRadius:100,
    paddingHorizontal:16,
    paddingVertical:10,
    gap:10,
    backgroundColor:'#EEFDFF',
    flexDirection:'row',
    marginTop:32,
    marginLeft:10,
},

plannedheading:{
    marginLeft:16,
    backgroundColor:'#EEF4FF'
},
secondheading:{
    marginLeft:16,
    backgroundColor:'#233972'
},
executedheading:{
    backgroundColor:'#EDFEEF',
    marginLeft:16,
},
searchbar:{
width:286,
height:56,
borderRadius:33,
//paddingTop:18,

backgroundColor:'#FFFFFF',
marginLeft:20,
marginTop:8,
flexDirection:'row',
},
textinput:{
    width:135,
    //height:20,
   // opacity:50,
    fontWeight:'400',
    fontSize:14,
    lineHeight:20,
    marginLeft:16,
    //height:20,
},
notexecutedheading:{
    backgroundColor:'#14A223',
    marginLeft:16,
},
});
export default styles;