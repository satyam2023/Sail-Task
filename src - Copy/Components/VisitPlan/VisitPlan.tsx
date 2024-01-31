import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import HeaderMain from "../HeaderForMainScreen/HeaderMain";
import InputText from "../InputTextForMainScreen/InputText";
import styles from "./Style";
import DropDown from "../DropDown/DropDown";

import Footer from "./Footer";

import DatePicker from 'react-native-date-picker'
import moment from "moment";
import { setSecondscreen } from "../../Redux/Slice2";
import PlanCompleted from "./PlanCompleted";


const VisitPlan: React.FC<{}> = (props: any) => {
   const [CurrentScreen, setCurrentScreen] = useState<string>("")
   const [open, setOpen] = useState(false)
   const [date, setDate] = useState(new Date())
   const [dateData, setDateData] = useState("Visit Date")
   const Data = [{ segment: 'A' }, { segment: 'A' }, { segment: 'A' }, { segment: 'A' }, { segment: 'A' }, { segment: 'A' }];
   function setScreen(param: string) {
      setCurrentScreen(param);
   }
   return (
      <>

         {CurrentScreen != "Submitted" ? <>
            <ScrollView style={{ backgroundColor: '#F9F9FC' }}>
               <HeaderMain topheading="Create Visit Plan" navigationProps={props} />
               <View style={{ marginVertical: 23 }}>
                  <View style={styles.inputbox}>
                     <InputText placeholder="Enter Customer Code"
                        ChangeText={(text: any) => {

                        }}
                        keyboardType={'default'}
                        secureText={false}
                        maxLength={20}
                     />
                  </View>
                  <View style={styles.inputbox}>
                     <InputText placeholder="Enter Name"
                        ChangeText={(text: any) => {

                        }}
                        keyboardType={'default'}
                        secureText={false}
                        maxLength={20}
                     />
                  </View>
                  <View style={styles.inputbox}>
                     <InputText placeholder="Enter Nick Name"
                        ChangeText={(text: any) => {

                        }}
                        keyboardType={'default'}
                        secureText={false}
                        maxLength={20}
                     />
                  </View>

                  <DropDown data={Data} heading="Customer Region" setReason={() => { }} />
                  <DropDown data={Data} heading="Select Visiting Executive" setReason={() => { }} />
                  <TouchableOpacity style={{ height: 56, width: 353, backgroundColor: '#FFFFFF', marginLeft: 20, marginTop: 16, borderRadius: 33, flexDirection: 'row' }} onPress={() => { setOpen(true) }}>
                     <Image source={require('../images/Calender.png')} style={{ marginLeft: 16, marginTop: 16 }} />
                     <Text style={[{ marginTop: 16, marginLeft: 16, color: '#110F2480', fontWeight: '400', fontSize: 14 }, dateData != "Visit Date" ? { color: '#110F24' } : {}]}>{dateData}</Text>
                     <DatePicker
                        modal
                        open={open}
                        date={date}
                        mode="date"
                        onConfirm={(date) => {
                           setOpen(false)
                           setDate(date)
                           // setDateData(moment(date).format("DMMMM YYYY"));
                           setDateData(date.toLocaleDateString())
                        }}
                        onCancel={() => {
                           setOpen(false)
                        }}
                        androidVariant="iosClone"
                        dividerHeight={10}
                     //theme="dark"

                     />

                  </TouchableOpacity>
                  <DropDown data={Data} heading="Select Reason" setReason={() => { }} />
                  <DropDown data={Data} heading="Select Mode of Contact" setReason={() => { }} />

               </View>
            </ScrollView>
            <Footer setScreen={setScreen} />
         </> : <>
            <HeaderMain topheading="Create Visit Plan" navigationProps={props} />
            <PlanCompleted navigationProps={props} /></>}
      </>
   );
}
export default VisitPlan;