import React from "react";
import { ScrollView, View } from "react-native";
import styles from "./Style";
import ProfileHeader from "./CustomerComponents/ProfileHeader";
import Profile from "./CustomerProfile/Profile";
import MainScreenCustomer from "./CustomerDetailsScreen/MainScreenCustomer";
import { UseSelector, useSelector } from "react-redux";
const ViewProfile:React.FC<{}>=(props:any)=>{
    const ClickStatus=useSelector((state:any)=>state.button.CustomerProfileButton);

    return(
        <View style={{backgroundColor:'#F9F9FC',height:'100%'}}>
           
            { !ClickStatus?<Profile navigationProps={props} />:
          <MainScreenCustomer props={props}/> 
         }
        </View>
    );
};
export default ViewProfile;