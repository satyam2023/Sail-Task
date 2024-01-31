import { StyleSheet } from "react-native";
const styles=StyleSheet.create({
boxText:{
    width:273,
    height:14,
    marginLeft:24,
    fontWeight:'400',
    fontSize:14,
    lineHeight:14,
    color:'#110F2480',
    marginTop:16},
 
          boxTextinner:{
            width:273,
            height:25,
            marginLeft:24,
            fontWeight:'500',
            fontSize:14,
            lineHeight:16,
            color:'#110F24',
            marginTop:8},

    img:{
        transform:[{rotate:'0deg'}],
    marginTop:19,
    marginLeft:12},

    box:{
    height:62,
    width:363,
    borderRadius:4,
    backgroundColor:'#FFFFFF',
    marginTop:16,
    flexDirection:'row',
    marginLeft:20},

    escalateBox:{borderWidth:1,
        borderColor:'#E6E6E6',
        marginTop:16,
        borderRadius:33,
        height:58,
        flexDirection:'row'
    ,marginHorizontal:16},

    submitBox:{width:331,
        height:58,
        backgroundColor:'#233972',
        marginVertical:16,
        borderRadius:33,
        marginHorizontal:16
    },

    submitTxt:{
    textAlign:'center',
    fontWeight:'600',
    color:'#FFFFFF',
    lineHeight:20,
    marginTop:18,
    fontSize:16},

    commentBox:{
        marginTop:16,
        marginHorizontal:16,
        borderWidth:1,
        borderColor:'#E6E6E6',
        borderRadius:33,
        height:200},
        commentTxt:{color:'black',
        fontWeight:'400',
        marginLeft:16,
        marginTop:8}
});
export default styles;