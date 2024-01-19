import React from "react";
import { StyleSheet } from "react-native";
const styles=StyleSheet.create({
signinText:{
    fontWeight:'700',
    color:'#233972',
    fontSize:24,
    lineHeight:31.2,
    textAlign:'center',
    marginTop:35,
    
},
pleaseText:{
marginTop:16,
fontWeight:'400',
fontSize:16,
lineHeight:20,
color:'#110F2480',
textAlign:'center',
marginBottom:32,
},
inputbox:{
    width:353,
    height:56,
    borderRadius:33,
    marginLeft:20,
    backgroundColor:'#F5F7F9',
    flexDirection:'row',
    marginBottom:16,
     
 },
 inputboxnot:{
    width:353,
    height:56,
    borderRadius:33,
    marginLeft:20,
    backgroundColor:'#F5F7F9',
    flexDirection:'row',
    marginBottom:16,
    borderColor:'red',
    borderWidth:1
     
 },
 inputboxno:{
     width:353,
     height:56,
     borderRadius:33,
     marginLeft:20,
     backgroundColor:'#F5F7F9',
     borderWidth:1,
     borderColor:'red',
     flexDirection:'row',
     marginBottom:16,
 },
 img:{
    margin:16,
},
imgdrop:{
    marginVertical:22,
 },
 forgot:{
    marginLeft:11,
 fontWeight:'400',
 fontSize:14,
 lineHeight:17.5,
 color:'#233972',
 
 },
 forgotmargin:{
marginLeft:107,
 },
 emptytick:{
    height:20,
    width:20,
    borderRadius:5,
    borderWidth:1,
    borderColor:'#DFDEE1',
    marginLeft:20,

 },
 signbtn: {
    width: 353,
    height: 56,
    backgroundColor: '#F9F9FC',
    paddingVertical: 17,
    //paddingHorizontal: 112,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    gap: 10,
    marginHorizontal: 20,
    marginTop:50,
  
},
txtofSign: {
    width: 'auto',
    height: 'auto',
    color: '#110F24',
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 20,
    fontStyle: 'normal',
},
authbtn:{
    width:353,
    height:56,
    marginHorizontal:20,
    borderRadius:33,
    borderWidth:1,
     paddingTop:15,
     paddingBottom:17,
     gap:59,
    borderColor:'#DFDEE1',
    flexDirection:'row',
    marginBottom:16,
    
},
finger:{
    fontSize:14,
    fontWeight:'400',
    lineHeight:17.5,
    color:'#110F24',
   // marginLeft:59,

}
});
export default styles;