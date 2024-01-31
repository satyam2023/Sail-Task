import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { Dimensions, Image, Modal, Text, TouchableOpacity, View } from "react-native";
import Card from "./Card";
import styles from "../Style";
interface BottomDrawerProps {
    Navigationprops:any
}

const BottomDrawer:React.FC<BottomDrawerProps>= forwardRef(({Navigationprops}:BottomDrawerProps,ref:any) => {
  

const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

console.log("NAvigation Screen NAme::",Navigationprops.route.name);
console.log("status::",isBottomSheetOpen)
useEffect(()=>{setIsBottomSheetOpen(false);},[Navigationprops.route.name])

const handleOpenBottomSheet = () => {
     setIsBottomSheetOpen(true); 
};

useImperativeHandle(ref, () => ({
    handleClicked: handleOpenBottomSheet,
}));

const handleCloseBottomSheet = () => {
  setIsBottomSheetOpen(false);
};


    return(
        <View style={styles.container}>
        <Modal style={{width:'100%',height:372,borderRadius:5,borderColor:'#FAFAFA',backgroundColor:'#FAFAFA',justifyContent:'flex-end',margin:0}} 
        animationType="slide"
        transparent={true}
        visible={isBottomSheetOpen}
        onRequestClose={handleCloseBottomSheet}
        >
            <View style={[styles.bottomSheet, { height: 372 }]}>
            <View style={{flexDirection:'row'}}>
            <Text style={{marginTop:17.5,marginLeft:24,color:'#000000',fontWeight:'500',fontSize:16,lineHeight:24}}>More Options</Text>
           <TouchableOpacity onPress={()=>{setIsBottomSheetOpen(false)}}>
            <Image source={require('../../images/Close.png')} style={{marginTop:17.5,marginLeft:210}}/>
            </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row'}}>
               <Card image={require('../../images/profile2user.png')} heading="Create Visit Plan"  width={68} left={48} NavigationProps={Navigationprops} handleCloseBottomSheet={handleCloseBottomSheet}/>
              
               <Card image={require('../../images/profile2user.png')} heading="Create Customer Profile"  width={126} left={19} NavigationProps={Navigationprops} handleCloseBottomSheet={handleCloseBottomSheet}/>
            
            </View>
            <View style={{flexDirection:'row',}}> 
            <Card image={require('../../images/profile2user.png')} heading="Create Meeting Details"  width={113} left={26} NavigationProps={Navigationprops} handleCloseBottomSheet={handleCloseBottomSheet}/>
            <Card image={require('../../images/profile2user.png')} heading="View Customer Profile"  width={111} left={27} NavigationProps={Navigationprops} handleCloseBottomSheet={handleCloseBottomSheet}/> 
            </View>
            </View>
        </Modal>
        </View>
    );
})

export default BottomDrawer;