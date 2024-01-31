import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
searchBtn:{
    height:56,
    // width:286,
    marginHorizontal:20,
    borderRadius:33,
    paddingHorizontal:16,
    paddingVertical:18,
    backgroundColor:'#FFFFFF',
    marginTop:20
},
inputbox:{
    width:353,
    height:56,
    borderRadius:33,
    marginLeft:20,
    backgroundColor:'#FFFFFF',
    flexDirection:'row',
    marginBottom:16,
    marginTop:20
     
 },
 img:{
    marginLeft:16,
    marginTop:20
    
},
card:{
    width:164,
    height:250,
    borderRadius:15,
    backgroundColor:'#FFFFFF',
    marginLeft:20,
    marginTop:16, 
},
txt:{
    width:103,
    height:36,
    marginLeft:17,
    fontWeight:'500',
    fontSize:14,
    lineHeight:20,
    color:'#110F24'
},
dwd:{
    color:'#E67437',
    fontWeight:'500',
    fontSize:12,
    lineHeight:24,
    textDecorationLine: 'underline',
    marginTop:14,
    marginLeft:17
}
});
export default styles;