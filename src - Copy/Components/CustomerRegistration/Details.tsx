import React, { useRef, useState } from "react";
import Header from "./Header";
import CustomerDetails from "./CustomerDetails";
import Footer from "./Footer";
import { ScrollView, View } from "react-native";
import CustomerRepresentative from "./CustomerRepresentative";
import RegistrationCompleted from "./RegistrationCompleted";
const Details:React.FC<{}>=(props:any)=>{
    const [CurrentScreen,setCurrentScreen]=useState<number>(1)
    const [FooterStatus,setFooterStatus]=useState<string>("")
    function setScreen(param:number){
        setCurrentScreen(param);
    }

    function SetFooter(param:any){
               setFooterStatus(param)
    }

    const CustomerRepresentativeRef=useRef('');

    function FooterExecuted(){
        console.log("REFERENSE DETAils::",CustomerRepresentativeRef)
        setFooterStatus("")
        CustomerRepresentativeRef.current.Clicked();
    }
    
    return(
        <>
        <ScrollView style={{backgroundColor:'#F9F9FC'}}>
        
        {CurrentScreen==1 && <CustomerDetails props={props}/>  }
        {CurrentScreen==2 && <CustomerRepresentative NavigationProps={props} SetFooter={SetFooter} ref={CustomerRepresentativeRef}/>}
        {CurrentScreen==3 && <RegistrationCompleted NavigationProps={props}/>}
        </ScrollView>
        {CurrentScreen!=3 ?<Footer CurrentScreen={CurrentScreen} setScreen={setScreen} FooterStatus={FooterStatus}  FooterExecuted={FooterExecuted} />:null}
        </>
    )

} 
export default Details;


