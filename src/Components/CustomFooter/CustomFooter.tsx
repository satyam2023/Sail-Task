import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./Style";
import { SafeAreaView } from "react-native-safe-area-context";
const CustomFooter: React.FC =()=>{
    return (
        <View style={styles.footer}>
            <View style={[styles.progressbar,styles.bar]}/>
            <View  style={styles.footercontainer}>
                 
                 <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={styles.signupbtn}>
                         <Text style={styles.signuptxt}>Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.circle}>
                       <Image style={{width:24,height:24,marginTop:15,marginLeft:15,gap:10}} source={require('../images/Arrow.png')}/>
                    </TouchableOpacity>
                 </View>
                 <View style={{height:18,width:236,marginTop:8,marginLeft:79,}}>
                 <Text style={{fontWeight:'400',fontSize:14,
                lineHeight:17.5,color:'#110F2480'}}>Already have an account?
                    <Text style={{fontWeight:'600',fontSize:14,
                lineHeight:17.5,color:'#233972'}}> Sign in</Text>
                 </Text>
                 </View>
            </View>


        </View>
        
    );
}
export default CustomFooter;