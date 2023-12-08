import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
    },
    btn: {
        width: 353,
        height: 56,
        paddingVertical: 17,
        paddingHorizontal: 112,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: '#233972',
        gap: 10,
        marginVertical: 10,
        marginHorizontal: 20,
    },
    signbtn: {
        width: 353,
        height: 56,
        backgroundColor: '#F9F9FC',
        paddingVertical: 17,
        paddingHorizontal: 112,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        gap: 10,
        marginVertical: 10,
        marginHorizontal: 20,
    },
    txt: {
        width: 'auto',
        height: 'auto',
        color: '#FFF',
        fontSize: 16,
        fontWeight: "500",
        lineHeight: 20,
        fontStyle:'normal',
    },
    txtofSign: {
        width: 'auto',
        height: 'auto',
        color: '#110F24',
        fontSize: 16,
        fontWeight: "500",
        lineHeight: 20,
        fontStyle:'normal',
    },
    img:{
        width: 247.551,
      height: 214.662,
     marginHorizontal:73,

    },
    toptxt:{
        left:70,
        right:70,
        width:263,
        height:68,
        color:'#00235B',
        textAlign:'center',
        fontSize:24,
        fontWeight:"600",
        lineHeight:34,
        letterSpacing:0.24,
        fontStyle:'normal',
    },
    lowertxt:{
        color:'rgba(17, 15, 36, 0.50)',
        textAlign:'center',
        fontSize:12,
        fontWeight:'400',
        lineHeight:24,
        letterSpacing:0.12,
        fontStyle:'normal',
    }
});
export default styles;