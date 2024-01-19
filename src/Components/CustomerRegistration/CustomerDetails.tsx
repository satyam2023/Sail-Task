import React, { useRef } from "react";
import InputText from "./InputText";
import Styles from "./Style";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Image } from "react-native";
import CommonDropDown from "./CommonDropDown";
import { CustomerSegment, CustomerStatus, CustomerSubSegment, CustomerSubType, CustomerType } from "./Data";
const CustomerDetails: React.FC<{}> = () => {
    const customerdetails = {
        CustomerCode: useRef(''),
        CompanyName: useRef(''),
    }
    return (
        <ScrollView style={{ marginBottom: 240 }}>
            <InputText
                placeholder="Enter Customer Code"
                ChangeText={(text: any) => {
                    customerdetails.CustomerCode.current = text;
                }
                }
                keyboardType="numeric"
                secureText={false}

            />
            <InputText
                placeholder="Enter Company Name"
                ChangeText={(text: any) => {
                    customerdetails.CustomerCode.current = text;
                }
                }
                keyboardType="numeric"
                secureText={false}

            />
            <CommonDropDown data={CustomerSegment} heading="Select Customer Segment" />
            <CommonDropDown data={CustomerSubSegment} heading="Select Customer Sub Segment" />
            <CommonDropDown data={CustomerType} heading="Select Customer Type" />
            <CommonDropDown data={CustomerSubType} heading="Select Customer Sub Type" />
            <CommonDropDown data={CustomerStatus} heading="Select Status of Customer" />


            <InputText
                placeholder="Enter PAN Card Number"
                ChangeText={(text: any) => {
                    customerdetails.CustomerCode.current = text;
                }
                }
                keyboardType="numeric"
                secureText={false}

            />

            <InputText
                placeholder="Enter GST Number"
                ChangeText={(text: any) => {
                    customerdetails.CustomerCode.current = text;
                }
                }
                keyboardType="numeric"
                secureText={false}

            />
            <InputText
                placeholder="Website Link"
                ChangeText={(text: any) => {
                    customerdetails.CustomerCode.current = text;
                }
                }
                keyboardType="numeric"
                secureText={false}

            />

            <InputText
                placeholder="Search for location (area, street name)"
                ChangeText={(text: any) => {
                    customerdetails.CustomerCode.current = text;
                }
                }
                keyboardType="default"
                secureText={false}

            />
            <InputText
                placeholder="Add Tag Name to Selected Location"
                ChangeText={(text: any) => {
                    customerdetails.CustomerCode.current = text;
                }
                }
                keyboardType="numeric"
                secureText={false}

            />

        </ScrollView>

    );
}
export default CustomerDetails;