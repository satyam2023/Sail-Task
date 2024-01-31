import React, { useState } from "react"
import { SafeAreaView, FlatList, View } from "react-native";
import BottomBar from "../PlannedVisit/BottomBarPlanned";
import CustomerDetails from "../UpComingVisit/CustomerDetails";
import UpcomingVisit from "../UpComingVisit/Upcoming";
import ExecutedCustomer from "./ExecutedCustomer";
import CommonButton from "../../Button/CommonButton";
interface ExecutedProps{
    navigationprops:any
}

const Executed: React.FC<ExecutedProps> = (navigationprops:ExecutedProps) => {
    const [plannedView, setplannedView] = useState(false);
    function setStatus(param: boolean) {
        console.log("param in palnned::", param);
        setplannedView(param)
    }
    const Data = [{ id: 1 }]
    const renderItem = (item: any) => {
        console.log("iteration numebr", item.item)

        return (

            <UpcomingVisit id={item.item} status={setStatus} />

        );
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {plannedView == false && <FlatList data={Data} renderItem={renderItem} />}
            {plannedView == true && <> 
          <ExecutedCustomer status={setStatus} navigationProps={navigationprops}/>
         
            
            </>
            }

        </SafeAreaView>

    );
}
export default Executed;