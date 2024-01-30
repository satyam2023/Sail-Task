import React, { useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../Style";
import HeaderMain from "../../HeaderForMainScreen/HeaderMain";
import InputText from "../../InputTextForMainScreen/InputText";
import CustomerProfile from "./CustomerProfile";
import Footer from "../../ProductCatalog/Footer/Footer";
//import InputText from "../../InputText/InputText";
interface ProfileProps{
    navigationProps:any
}
const Profile:React.FC<ProfileProps>=({navigationProps}:ProfileProps)=>{
    const [searchStatus,setSearchStatus]=useState<boolean>(false);
    const [CurrentScreen,setCurrentScreen]=useState<boolean>(false)
    const CustomerDetails=useRef('');

    function handleSearch(){
        if(searchStatus){
            setCurrentScreen(true)
        }
    }
    return(
       <View>
        <>{  
        !CurrentScreen?
        <View>
          <HeaderMain navigationProps={navigationProps} topheading={"Customer Information"}/>
          <Text style={styles.lastVisit}>
          Last Visit details of the customer
          </Text>
          <View style={[styles.inputbox,searchStatus?{backgroundColor:'#E6E6E6'}:{}]}>
               
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
            </View>

            <TouchableOpacity style={[styles.searcchBox,searchStatus?{backgroundColor:'#FFFFFF',borderWidth:1,borderColor:'#233972'}:{}]} 
            onPress={handleSearch}>
            <Text style={[styles.searchText,searchStatus?{color:'#233972'}:{}]}>Search
            </Text>
            </TouchableOpacity>
                 
        </View>
        :<CustomerProfile navigationProps={navigationProps}/>
       } 
       </>
       <Footer color={'#F9F9FC'} navigationprops={navigationProps} />
       </View>
    );
};
export default Profile;