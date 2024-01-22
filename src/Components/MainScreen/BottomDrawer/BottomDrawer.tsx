import React from "react";
import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import Card from "./Card";
const BottomDrawer:React.FC<{}>=(props:any)=>{
    return(
        <Modal style={{width:'100%',height:372,borderRadius:5,borderColor:'#FAFAFA',backgroundColor:'#FAFAFA',justifyContent:'flex-end',margin:0}} >
            <View style={{flexDirection:'row'}}>
            <Text style={{marginTop:17.5,marginLeft:24,color:'#000000',fontWeight:'500',fontSize:16,lineHeight:24}}>More Options</Text>
           <TouchableOpacity onPress={()=>{props.navigation.navigate('MainScreen')}}>
            <Image source={require('../../images/Close.png')} style={{marginTop:17.5,marginLeft:210}}/>
            </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row'}}>
               <Card image={require('../../images/profile2user.png')} heading="Create Visit Plan"  width={68} left={48}/>
               <Card image={require('../../images/profile2user.png')} heading="Create Customer Profile"  width={126} left={19}/>
               
            </View>
            <View style={{flexDirection:'row',}}>
            <Card image={require('../../images/profile2user.png')} heading="Create Meeting Details"  width={113} left={26}/>
            <Card image={require('../../images/profile2user.png')} heading="View Customer Profile"  width={111} left={27}/>
               
            </View>

        </Modal>
    );
}

export default BottomDrawer;