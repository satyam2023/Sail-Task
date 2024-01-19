import React, { useState } from "react"
import { SafeAreaView, FlatList } from "react-native";
import BottomBar from "../PlannedVisit/BottomBarPlanned";
import CustomerDetails from "../UpComingVisit/CustomerDetails";
import UpcomingVisit from "../UpComingVisit/Upcoming";


const Executed:React.FC<{}>=()=>{
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
    <SafeAreaView style={{flex:1}}>
  {plannedView==false && <FlatList data={Data} renderItem={renderItem}/>}
  {plannedView==true && <>
   
  <CustomerDetails status={setStatus}/>
 
  </>
  }
 
  </SafeAreaView>
   
   );
}
export default Executed;