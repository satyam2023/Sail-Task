import React from "react";
import styles from "./Style";
import { Image, Text, View } from "react-native";
interface StatusProps{

}

const Status:React.FC<StatusProps>=()=>{

return (
<View style={styles.top}>
    <View style={styles.leftitems}>
        <Text style={{color:'#000000'}}>9:21</Text>
    </View>
    <View style={styles.rightitems}>
    <Image source={require('../images/Battery.png')} style={styles.img}/>
    <Image  source={require('../images/Wifi.png')} style={styles.img}/>
     <Image source={require('../images/Cellular Connection.png')} style={styles.img}/>
    </View>

     
</View>);

}

export default Status;