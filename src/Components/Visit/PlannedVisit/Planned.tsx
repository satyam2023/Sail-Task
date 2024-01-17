import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import UpcomingVisit from "../UpComingVisit/Upcoming";
import CustomerDetails from "../UpComingVisit/CustomerDetails";
import { SafeAreaView } from "react-native";
import styles from "./Style";
import BottomBar from "./BottomBarPlanned";

const Planned:React.FC<{}>=()=>{
    const[plannedView,setplannedView]=useState(false);
    function setStatus(param:boolean){
        console.log("param in palnned::",param);
        setplannedView(param)
    }
    const Data=[{id:1}]
    const renderItem=(item:any)=>{
        console.log("iteration numebr",item.item)
       
        return(
            
            <UpcomingVisit id={item.item} status={setStatus}/>
           
        );
    }
   return(
    <SafeAreaView>
  {plannedView==false && <FlatList data={Data} renderItem={renderItem}/>}
  {plannedView==true && <>
   
  <CustomerDetails status={setStatus}/>
 <BottomBar/>
  </>
  }
 
  </SafeAreaView>
   
   );
}

export default Planned;