import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        height:'100%',
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
        marginBottom: 16,
       // alignSelf:'center',
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
        marginHorizontal: 20,
       // alignSelf:'center',
        marginBottom: 47,
    },
    txt: {
        width: 'auto',
        height: 'auto',
        color: '#FFF',
        fontSize: 16,
        fontWeight: "500",
        lineHeight: 20,
        fontStyle: 'normal',
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
    imghand: {
        alignSelf: 'center',
        marginBottom: 124,
        marginTop: 42,

    },
    toptxt: {
        color: '#00235B',
        width: 263,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: "600",
        lineHeight: 34,
        letterSpacing: 0.24,
        alignSelf: 'center'
    },
    imgsail: {
        width: 90,
        height: 90,
       // marginTop: 14,
        alignSelf: 'center',
       resizeMode: 'contain',
        marginTop:64,
    },
    lowertxt: {
        color: '#110F2480',
        textAlign: 'center',
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 24,
        letterSpacing: 0.12,
        fontStyle: 'normal',
        marginTop: 4,
    },
    toptxtcontainer: {
       // marginBottom: 42,
        marginTop: 18,
    },
    logocontainer: {
        marginTop: 64,
    },

});

export default styles;