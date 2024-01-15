import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./Style";
import Footer from "../MainFooter/Footer";


const FirstHomeScreen:React.FC<{}>=(props:any)=>{
    const [visit, setvisit] = useState<number>(16)
    return (<SafeAreaView style={{backgroundColor:'#E6E6E6'}} >
        <StatusBar backgroundColor={'#233972'} barStyle={'light-content'}/>
  <View style={styles.name}>
  <View style={{flexDirection:'row',}}>
    <View style={{flexDirection:'column',width:127,height:48,marginLeft:20,marginTop:12}}>
    <Text style={styles.Welcometext}>Welcome,</Text> 
    <Text style={styles.Welcometextname}>Saransh Verma</Text>
    </View>
<Image source={require('../images/mail.png')} style={{marginTop:21,marginLeft:115}}></Image>
<Image source={require('../images/notification.png')} style={{marginTop:21,marginLeft:16}}></Image>
<View style={styles.circle}>
    <Text style={{alignSelf:'center',color:'#FFFFFF',height:15,width:19,fontWeight:"500",fontSize:14,lineHeight:14,marginVertical:11,marginHorizontal:18,}}>
  SV
    </Text>
</View>
</View>
<View style={{flexDirection:'row'}}>

    <View style={styles.upcoming}>
        <View style={{flexDirection:'row'}}>
        <Image source={require('../images/Visit.png')} style={styles.visitimg}></Image>
        <Text style={styles.visitnumber}>{visit}</Text>
        </View>
   <Text style={styles.upcomingvisit}>
   Upcoming Visits
   </Text>
    </View>

    <View style={styles.plannedvisit}>
        <View style={{flexDirection:'row'}}>
        <Image source={require('../images/Planned.png')} style={styles.visitimg}></Image>
        <Text style={styles.plannednumber}>{visit}</Text>
        </View>
<Text style={styles.upcomingvisit}>
   Planned Visits
   </Text>
    </View>

    <View style={styles.executedvisit}>
        <View style={{flexDirection:'row'}}>
        <Image source={require('../images/Executed.png')} style={styles.visitimg}></Image>
        <Text style={styles.exedcutednumber}>{visit}</Text>
        </View>
   <Text style={styles.upcomingvisit}>
   Executed Visits
   </Text>
    </View>

</View>

  </View>
  <Footer/>

    </SafeAreaView>);
}

export default FirstHomeScreen;