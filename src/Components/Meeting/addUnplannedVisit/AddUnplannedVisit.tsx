import React, { useRef, useState } from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import InputText from "../../InputTextInsideMain";
import DatePicker from "react-native-date-picker";
import DropDown from "../../DropDown/DropDown";
import { CustomerContactDetails, CustomerMode, CustomerStatus, CustomerType, SelectDepartment, SelectRegion } from "../dataForDropDown/data";
import Issue from "./Issue";
import Footer from "../../CustomerRegistration/Footer";
const AddUnplannedVisit: React.FC<{}> = () => {

    const [date, setDate] = useState(new Date());
    console.log("selected date", date)
    const [reason,setreason]=useState<boolean>(false);
    const details = {
        customerCode: useRef(''),
        companyName: useRef(''),
        personName: useRef(''),
        designation: useRef(''),
        address: useRef(''),
        whatsapp: useRef(''),
        nameWithNumber: useRef(''),
        reason:useRef(''),

    }

    function setReason(param:boolean){
        setreason(param);
    }
    return (
<>
        <ScrollView style={{ marginBottom: 240 }}>
            <DropDown data={CustomerType} heading="Customer Type" setReason={setReason} />
            <InputText
                placeholder="Customer Code"
                ChangeText={(text: any) => {
                    details.customerCode.current = text;
                }
                }
                keyboardType="default"
                secureText={false}
            />
            <DropDown data={CustomerType} heading="Status of Customer" setReason={setReason} />
            <InputText
                placeholder="Enter Company Name"
                ChangeText={(text: any) => {
                    details.companyName.current = text;
                }
                }
                keyboardType="default"
                secureText={false}
            />

            <InputText
                placeholder="Enter Person Name"
                ChangeText={(text: any) => {
                    details.personName.current = text;
                }
                }
                keyboardType="default"
                secureText={false}
            />
            <InputText
                placeholder="Enter Designation"
                ChangeText={(text: any) => {
                    details.designation.current = text;
                }
                }
                keyboardType="default"
                secureText={false}
            />

            <InputText
                placeholder="Enter Address"
                ChangeText={(text: any) => {
                    details.address.current = text;
                }
                }
                keyboardType="default"
                secureText={false}
            />
            <InputText
                placeholder="Enter Whatsapp Number"
                ChangeText={(text: any) => {
                    details.whatsapp.current = text;
                }
                }
                keyboardType="default"
                secureText={false}
            />
            <DropDown data={CustomerType} heading="Select Departement" setReason={setReason}/>
            <InputText
                placeholder="Enter Name Followed by 10 digits number"
                ChangeText={(text: any) => {
                    details.nameWithNumber.current = text;
                }
                }
                keyboardType="default"
                secureText={false}
            />

            <DropDown data={CustomerType} heading="Select Reason"  setReason={setReason}/>
            {
                reason?<InputText
                placeholder="Enter Reason"
                ChangeText={(text: any) => {
                    details.reason.current = text;
                }
                }
                keyboardType="default"
                secureText={false}/>:null
            }

            <Issue/>
            <DropDown data={CustomerType} heading="Select Customer Mode"  setReason={setReason}/>
            <DropDown data={CustomerType} heading="Select Customer Contact Details"  setReason={setReason}/>
            <Text style={{ fontWeight: '500', fontSize: 14, lineHeight: 16, width: 146, color: '#666666', marginTop: 16, marginLeft: 21 }}>
                Upload Visiting Card
            </Text>
            <TouchableOpacity style={{ width: 353, height: 82, borderWidth: 1, borderColor: '#233972', borderStyle: 'dashed', borderRadius: 33, marginTop: 19, marginLeft: 21, backgroundColor: '#E9EBF1',marginBottom:20 }}>
                <View style={{ height: 34, marginTop: 27 }}>
                    <Text style={{ alignSelf: 'center', fontWeight: '500', fontSize: 16, color: '#666666', lineHeight: 16 }}>
                        +  Upload Visiting Card
                    </Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
        <Footer/>

        </>
        
    );
}
export default AddUnplannedVisit;