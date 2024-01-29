import React, { useRef, useState } from "react";
import MainHeader from "../../MainScreenHeader/Mainheader";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../Style";
import InputText from "../../InputTextForMainScreen/InputText";
import UserCard from "./UserCard";
interface CustomerProfileProps{
    navigationProps:any
}

const CustomerProfile:React.FC<CustomerProfileProps>=({navigationProps}:CustomerProfileProps)=>{
    const [searchStatus,setSearchStatus]=useState<boolean>(false);
    const CustomerDetails=useRef('');
    return(
        <View >
            <MainHeader navigationProps={navigationProps} heading={"Customer Profiles"}/>
            <View style={{height:28,backgroundColor:'#233972',zIndex:-5}}/>
            <View style={styles.floatingTextInput}>
                <InputText
                    placeholder="Enter Customer Code or Name"
                    ChangeText={(text: any) => {
                        CustomerDetails.current=text;
                        if(CustomerDetails.current.length>=5){
                            setSearchStatus(true);
                        }
                    } }
                    keyboardType="default"
                    secureText={false} 
                    maxLength={20}                   
                />
                <TouchableOpacity>
                <Image source={require('../../images/add.png') } style={{marginTop:14,marginLeft:100,transform:[{rotate:'45deg'}]}}/>
                </TouchableOpacity>
            </View>

                <UserCard name="John Doe" location="Customer Code: 123678"/>
                <UserCard name="Esha Sharma" location="Customer Code: 123678"/>
                <UserCard name="Sanjay Jain" location="Customer Code: 123678"/>



        </View>
    );
};
export default CustomerProfile;