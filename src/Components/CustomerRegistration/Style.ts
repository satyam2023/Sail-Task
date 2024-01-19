import { StyleSheet } from "react-native";

const Styles= StyleSheet.create({
    FooterContainer:{
        backgroundColor:'#FFFFFF',
        //flexDirection:'row',
       // justifyContent:'space-evenly',
        height:120,
        width:'100%',
        position:'absolute',
        bottom:120,
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
    TextInputs: {
        marginLeft:21,
        backgroundColor:'#FFFFFF',
        marginTop:16,
        height:56,
        width:353,
        borderRadius:33,
        paddingLeft:16,
        paddingVertical:19
    },
    DropColumn:{
      height:56,
      width:353,
      borderRadius:33,
      backgroundColor:'#FFFFFF',
      marginTop:16,
     marginLeft:21,
     flexDirection:'row'
    },
});

export default Styles;