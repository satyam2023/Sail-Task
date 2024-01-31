import React from "react";
import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    headerContainer:{
        position:'absolute',
        top:0,
        left:0,
        right:0,
        width:'100%'
      
    },
header:{
    // height:121,
    backgroundColor:'#F9F9FC',
    width:'100%',
   
   
},
insideHeader:{
    height:48,
    width:321,
    marginLeft:34,
    marginTop:26,
    flexDirection:'row'
},
firstCircle:{
    width:48,
    height:48,
   borderRadius:24,
    backgroundColor:'#E67437',
    marginLeft:6
},
numberstyle:{
    fontWeight:'500',
    fontSize:16,
    lineHeight:24,
    color:'#FFFFFF',
    height:24,
    width:6,
    marginLeft:21,
    marginTop:12,
    textAlign:'center'
},
emptyLine:{
    width:75,
    height:2,
    backgroundColor:'#65C000',
    marginTop:22,
    marginLeft:4

},
circleBottomText:{
    fontWeight:'500',
    fontSize:10,
    lineHeight:15,
    color:'#110F24',
    height:15,
    marginTop:7
},
footerContainer:{
    width:'100%',
    height:114,
    backgroundColor:'#FFFFFF',
    flexDirection:'row',
    position:'absolute',
   
    left:0,
    right:0,
    top:715
},
editBtn:{
    width:170,
    height:56,
    marginLeft:20,
    borderRadius:100,
    borderWidth:1,
    borderColor:'#233972',
    backgroundColor:'#FFFFFF',
    marginTop:16
   
},
editTxt:{
    marginLeft:70,
    marginTop:17,
    fontWeight:'500',
    fontSize:16,
    lineHeight:20,
    color:'#233972',
},
proceedTxt:{
    // marginLeft:70,
    alignItems:'center',
    alignSelf:'center',
    marginTop:17,
    fontWeight:'500',
    fontSize:16,
    lineHeight:20,
    color:'#FFFFFF',
},
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
    
}
});

export default styles;