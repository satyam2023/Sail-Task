import React from "react";
import { ScrollView } from "react-native";
import styles from "./Style";
import ProfileHeader from "./CustomerComponents/ProfileHeader";
import Profile from "./CustomerProfile/Profile";
const ViewProfile:React.FC<{}>=(props:any)=>{

    return(
        <ScrollView style={{backgroundColor:'#F9F9FC'}}>
            <Profile navigationProps={props} />
         {/* <ProfileHeader navigationProps={props}/> */}
        </ScrollView>
    );
};
export default ViewProfile;