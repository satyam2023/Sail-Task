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
    width:62,height:20,fontWeight:'500',fontSize:16,lineHeight:20,
  marginLeft:120.5,
  marginTop:17,
  color:'#110F2480',
},
signupbtn:{
    marginTop:17,
    marginLeft:20,
    width:277,
    height:56,
    borderRadius:100,
    backgroundColor:'#F5F7F9',

},
circle:{
    height:56,
    width:56,
    backgroundColor:'#F5F7F9',
    borderRadius:100,
    marginLeft:20,
    marginTop:17,
   

},
progressbar:{
   // position:'absolute',
    //top:463,
    flexDirection:'row',
    width:393,
    height:6,
    backgroundColor:'#F9F9FC',
},
bar:{
   // position:'absolute',
    //top:463,
    backgroundColor:'#E67437',
    width:160,
},
nobar:{
  backgroundColor:'#F9F9FC',
},
}

);
export default styles;