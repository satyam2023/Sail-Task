import React, { useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "react-native";

import { SafeAreaView } from "react-native";
import styles from "./Style";
import Footer from "../MainFooter/Footer";
import Product from "../Product/Product";
import BottomDrawer from "./BottomDrawer/BottomDrawer";
import { useDispatch } from "react-redux";
import {setVisitType} from "../../Redux/Slice2" 


interface  ScreenProps{
props:any
}

const FirstHomeScreen:React.FC<ScreenProps>=({props}:ScreenProps)=>{
    
    const [visit, setvisit] = useState<number>(16);
    const BottomDrawerRef= useRef<any>();
    const dispatch = useDispatch();
    function PlusClicked() {
        console.log("Bottom PLus Clicked Succesful:::")
        console.log("abiut ref",BottomDrawerRef.current)
        BottomDrawerRef.current.handleClicked();
       
    }
    return (<SafeAreaView style={{backgroundColor:'#E6E6E6'}} >
        <StatusBar backgroundColor={'#233972'} barStyle={'light-content'}/>
  <View style={styles.name}>
  <View style={{flexDirection:'row',}}>
    <View style={{flexDirection:'column',width:127,height:48,marginLeft:20,marginTop:12}}>
    <Text style={styles.Welcometext}>Welcome,</Text> 
    <Text style={styles.Welcometextname}>Saransh Verma</Text>
    </View>
    <TouchableOpacity onPress={()=>{props.navigation.navigate('Message')}}>
<Image source={require('../images/mail.png')} style={{marginTop:21,marginLeft:115}}/></TouchableOpacity>
<TouchableOpacity onPress={()=>props.navigation.navigate('Notification')}>
<Image source={require('../images/notification.png')} style={{marginTop:21,marginLeft:16}}/>
</TouchableOpacity>
<View style={styles.circle}>
    <Text style={{alignSelf:'center',color:'#FFFFFF',height:15,width:19,fontWeight:"500",fontSize:14,lineHeight:14,marginVertical:11,marginHorizontal:18,}}>
  SV
    </Text>
</View>
</View>
<View style={{flexDirection:'row'}}>

    <TouchableOpacity style={styles.upcoming} onPress={()=>{props.navigation.navigate('Visit');dispatch(setVisitType("Upcoming"));}}>
        <View style={{flexDirection:'row'}}>
        <Image source={require('../images/Visit.png')} style={styles.visitimg}></Image>
        <Text style={styles.visitnumber}>{visit}</Text>
        </View>
   <Text style={styles.upcomingvisit}>
   Upcoming Visits
   </Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.plannedvisit}  onPress={()=>{props.navigation.navigate('Visit');dispatch(setVisitType("Planned"))}}>
        <View style={{flexDirection:'row'}}>
        <Image source={require('../images/Planned.png')} style={styles.visitimg}></Image>
        <Text style={styles.plannednumber}>{visit}</Text>
        </View>
<Text style={styles.upcomingvisit}>
   Planned Visits
   </Text>
    </TouchableOpacity >

    <TouchableOpacity style={styles.executedvisit} onPress={()=>{props.navigation.navigate('Visit');dispatch(setVisitType("Executed"))}}>
        <View style={{flexDirection:'row'}}>
        <Image source={require('../images/Executed.png')} style={styles.visitimg}></Image>
        <Text style={styles.exedcutednumber}>{visit}</Text>
        </View>
   <Text style={styles.upcomingvisit}>
   Executed Visits
   </Text>
    </TouchableOpacity>

</View>
<Product  navigationprops={props} category="Product Catalogue" imagefirst={require('../images/steel.png')} imagesecond={require('../images/rolled.png')} imagefirstinfo="Stainless Steel Products" imagesecondinfo="Cold Rolled Products" text="See All"/>
<Product navigationprops={props} category="Customer Information" imagefirst={require('../images/Customer.png')} imagesecond={require('../images/Customer.png')} imagefirstinfo="Sales Order Status" imagesecondinfo="MOU Status" text=""/>
<Product navigationprops={props}  category="Category" imagefirst={require('../images/Customer.png')} imagesecond={require('../images/setting2.png')} imagefirstinfo="User Enquiry" imagesecondinfo="Issue Enquiry" text="View All"/>

  </View>
  
   <Footer  color="#E6E6E6" navigationprops={props} PlusClicked={PlusClicked}/>
   <BottomDrawer Navigationprops={props} ref={BottomDrawerRef}/>

    </SafeAreaView>);
}

export default FirstHomeScreen;