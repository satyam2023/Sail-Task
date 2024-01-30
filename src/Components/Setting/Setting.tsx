import React, { useState } from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import MainHeader from '../MainScreenHeader/Mainheader';
import SettingHeader from './SettingHeader';
import InputText from '../InputTextForMainScreen/InputText';
import styles from './Style/Style'
import Footer from '../ProductCatalog/Footer/Footer';
const Setting:React.FC<{}> = (props:any) => {
  const [inputFocus,setInputFocus]=useState<Boolean>(false)
  return (
       <View style={{backgroundColor:'#F9F9FC',height:'100%'}}>
       <SettingHeader props={props}/>
       <>
       <View style={{flexDirection:'row',marginBottom:24}}>
       <View style={styles.circle}>
    <Text style={{color:'#FFFFFF',width:28.5,height:21,lineHeight:18,fontWeight:"500",fontSize:20,alignSelf:'center',marginTop:17,textAlignVertical:'center',alignContent:'center'}}> 
    {/* not Aligning Properply Sv margin padding accordeing to figma */}
      SV
    </Text>
   </View>
   <View style={{marginTop:35}}>
    <Text style={{fontWeight:'500',fontSize:14,lineHeight:15,width:110,marginLeft:17,color:'#110F24'}}>
    Saransh Verma
    </Text>
    <Text style={{fontWeight:'400',fontSize:12,lineHeight:15,width:101,marginLeft:17,color:'#233972',marginTop:7}}>
    Branch Manager
    </Text>
   </View>
   <TouchableOpacity style={{height:36,width:136,backgroundColor:'#233972',borderRadius:100,gap:10,marginLeft:36,marginTop:33,flexDirection:'row'}}>
        <Image source={require('../images/Editing.png')} style={{height:16,width:16,marginLeft:16,marginTop:8}}/>
        <Text style={{width:84,height:20,fontWeight:'500',fontSize:16,lineHeight:20,color:'#FFFFFF',marginTop:6}}>
          Edit Profile
        </Text>
   </TouchableOpacity>
       </View>
       <View style={ [styles.inputbox]} >
            <InputText
                placeholder="Unique Personal Number"
                ChangeText={(text: any) => {
                   
                }}
                keyboardType="default"
                secureText={false}
                maxLength={10}
                
            />
        </View>
        <View style={ [styles.inputbox]} >
            <InputText
                placeholder="Name"
                ChangeText={(text: any) => {
                   
                }}
                keyboardType="numeric"
                secureText={false}
                maxLength={10}
            />
        </View>
        <View style={ [styles.inputbox]} >
            <InputText
                placeholder="Contact Number"
                ChangeText={(text: any) => {
                   
                }}
                keyboardType="numeric"
                secureText={false}
                maxLength={10}
            />
        </View>
        <View style={ [styles.inputbox]} >
            <InputText
                placeholder="Email Id"
                ChangeText={(text: any) => {
                   
                }}
                keyboardType="numeric"
                secureText={false}
                maxLength={10}
            />
        </View>
        <View style={ [styles.inputbox]} >
            <InputText
                placeholder="Location"
                ChangeText={(text: any) => {
                   
                }}
                keyboardType="numeric"
                secureText={false}
                maxLength={10}
            />
        </View>
        <View style={ [styles.inputbox]} >
            <InputText
                placeholder="Role"
                ChangeText={(text: any) => {
                   
                }}
                keyboardType="numeric"
                secureText={false}
                maxLength={10}
            />
        </View>
        </>
        <Footer color={'#F9F9FC'} navigationprops={props}/>


       </View>
       

   
  )
}

export default Setting;