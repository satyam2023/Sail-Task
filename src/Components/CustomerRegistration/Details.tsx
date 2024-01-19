import React from "react";
import Header from "./Header";
import CustomerDetails from "./CustomerDetails";
import Footer from "./Footer";
import { View } from "react-native";
const Details:React.FC<{}>=(props:any)=>{
   
    return(
        <View>
        <Header navigationProps={props}/>
        <CustomerDetails/>
        <Footer/>
        </View>
    )

} 
export default Details;