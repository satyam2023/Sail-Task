import { StyleSheet } from "react-native";
const styles =StyleSheet.create({
    inputbox:{
        
        width:353,
        height:56,
        borderRadius:33,
        marginLeft:20,
        backgroundColor:'#FFFFFF',
        flexDirection:'row',
        marginTop:12,
        // position:'absolute'  
     },
     floatingTextInput:{
      width:353,
      height:53,
      borderRadius:15,
      marginLeft:20,
      backgroundColor:'#FFFFFF',
      flexDirection:'row',
     // marginTop:12,
     zIndex:4 ,
      bottom:26.5,
     },
  lastVisit:{
fontWeight:'500',
  fontSize:14,
  lineHeight:36,
  color:'#000000',
  marginLeft:21,
  marginTop:26},
  searcchBox:{backgroundColor:'#DFDEE1',
  height:56,
  width:353,
  borderRadius:100,
  marginLeft:20,
  marginTop:12},
  searchText:{textAlign:'center',
  marginTop:17,
  fontWeight:'500',
  fontSize:16,
  lineHeight:20}
});

export default styles;
