import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./Style";
import { SafeAreaView } from "react-native-safe-area-context";

const CustomHeader:React.FC<{}>=()=>{
    return (<SafeAreaView style={{marginBottom:36}}>
        <Image source={require('../images/Hands.png')} style={styles.img} />
       <View style={{width:252,height:63,left:70,top:10}}>
<Text style=
{{fontWeight:'700',fontSize:24,lineHeight:31.2,color:'#233972',marginLeft:74}}>
    Sign Up
</Text>
<Text style={{fontWeight:'400',fontSize:16, lineHeight:20,color:'#110F2480'}}>
Enter your personal information
</Text>
       </View>
    </SafeAreaView>);
}

export default CustomHeader;