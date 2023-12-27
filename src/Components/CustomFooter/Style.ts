import React from "react";
import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    footer:{
      position: 'absolute',
      top:673,
      left: 0,
      right: 0,
      bottom: 0,
      height: 148,
     
    },
footercontainer:{
  //  position:'absolute',
   // top:470,
    width:410,
    height:148,
    backgroundColor:'#FFFFFF',
},
signuptxt:{
  width:62,
  height:20,
  fontWeight:'500',
  fontSize:16,
  lineHeight:20,
  textAlign:'center',
  alignSelf:'center',
  marginTop:17,
  color:'#110F2480',
},
signupbtn:{
    marginTop:16,
    marginLeft:20,
    width:277,
    height:56,
    borderRadius:100,
    backgroundColor:'#F5F7F9',

},
signupboth:{
  marginTop:16,
  marginLeft:15,
  width:211,
  height:56,
  borderRadius:100,
  backgroundColor:'#F5F7F9',
},
signupthree:{
   marginTop:16,
    marginLeft:20,
    width:277,
    height:56,
    borderRadius:100,
    backgroundColor:'#233972',
},
txte:{
color:'#FFFFFF',
},

circle:{
    height:56,
    width:56,
    backgroundColor:'#F5F7F9',
    borderRadius:100,
    marginLeft:20,
    marginTop:16,
   

},
circleleft:{
  height:56,
  width:56,
  backgroundColor:'#F5F7F9',
  borderRadius:100,
  marginLeft:20,
  marginTop:16,
},
circleright:{
  height:56,
  width:56,
  backgroundColor:'#F5F7F9',
  borderRadius:100,
  marginLeft:15,
  marginTop:16,
},
progressbar:{
   // position:'absolute',
    //top:463,
    flexDirection:'row',
    width:'100%',
    height:6,
    backgroundColor:'#F9F9FC',
},
bar:{
   // position:'absolute',
    //top:463,
    backgroundColor:'#E67437',
    width:'33.3%',
},
nobar:{
  backgroundColor:'#F9F9FC',
},
}

);
export default styles;