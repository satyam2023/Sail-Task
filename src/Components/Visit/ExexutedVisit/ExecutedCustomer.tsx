import React from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import CustomerCommon from "../UpComingVisit/CustomerCommon";
import styles from "../UpComingVisit/Style";
import Data from "./Data";
import CommonButton from "../../Button/CommonButton";
interface CustomerProps {
    status: Function,
    navigationProps: any
}
const ExecutedCustomer: React.FC<CustomerProps> = ({ status, navigationProps }: CustomerProps) => {

    console.log("item details::", navigationProps.navigationprops.navigation);
    const renderItem = (item: any, index: number) => {

        if (index < 14) {
            return (
                <View key={index}>
                    <CustomerCommon uppertext={item.uppertext} lowertext={item.lowertext} imagepath={item.imagepath} />
                </ View>
            );
        }
    }

    const renderItems = (item: any, index: number) => {
        console.log("item details::", item.item);
        if (index >= 14) {
            return (
                <View key={index}>
                    <CustomerCommon uppertext={item.uppertext} lowertext={item.lowertext} imagepath={item.imagepath} />
                </ View>
            );
        }
    }

    return (
        <ScrollView style={{ backgroundColor: '#FFFFFF', width: 353, marginLeft: 20, marginTop: 16, borderRadius: 10, flex: 1, }} showsVerticalScrollIndicator={false}>
            <View style={{ width: 353, height: 70, backgroundColor: '#FFFFFF', borderRadius: 10, flexDirection: 'row', marginTop: 16, marginLeft: 0 }}>
                <Image source={require('../../images/profile2userClicked.png')} style={styles.img} />
                <View style={{ width: 248, marginLeft: 16.5 }}>
                    <Text style={styles.customertext}>Customer Visit 1</Text>
                    <Text style={styles.companytext}>XYZ Steelworks Private Limited</Text>
                </View>
                <TouchableOpacity onPress={() => status(false)}>
                    <Image source={require('../../images/Arrow.png')} style={{
                        transform: [{ rotate: '270deg' }], marginLeft: 0, marginTop: 18,
                        width: 8, height: 13
                    }} />
                </TouchableOpacity>
            </View>
            {/* <FlatList
            data={Data}
            renderItem={renderItem}
            scrollEnabled={true} 
            showsVerticalScrollIndicator={false}
            style={{}}
            /> */}
            {
                Data.map(renderItem)
            }

            <View style={{ flexDirection: 'row' }}>
                <Text style={{ marginLeft: 14, fontWeight: '500', fontSize: 14, lineHeight: 16, width: 200, color: '#110F24' }}>
                    Mark Escalation as Resolved
                </Text>
                <View style={{ height: 17, width: 17, borderWidth: 1, borderColor: '#110F24', marginLeft: 8, borderRadius: 2 }} />
            </View>
            <Text style={{ marginLeft: 14, fontWeight: '500', fontSize: 14, lineHeight: 16, width: 241, color: '#110F24', marginTop: 32 }}>
                Comments by Escalated Manager
            </Text>
            <View style={{ backgroundColor: '#F9F9FC', height: 64, width: 321, marginLeft: 14, marginTop: 16, borderRadius: 4 }}>
                <Text style={{ backgroundColor: '#F9F9FC', height: 40, width: 253, marginLeft: 16, lineHeight: 20, marginTop: 9, fontWeight: '400', fontSize: 14, color: '#110F2480' }}>
                    Comments by Escalated Manager comes here.
                </Text>
            </View>
            <Text style={{ marginLeft: 14, fontWeight: '500', fontSize: 14, lineHeight: 16, width: 241, color: '#110F24', marginTop: 24 }}>
                Resolution Comment
            </Text>
            <View style={{ backgroundColor: '#FFFFFF', height: 64, width: 321, marginLeft: 14, marginTop: 16, borderRadius: 4, borderWidth: 1, borderColor: '#F9F9FC' }}>
                <Text style={{ backgroundColor: '#FFFFFF', height: 20, width: 208, marginLeft: 16, lineHeight: 20, marginTop: 9, fontWeight: '400', fontSize: 14, color: '#110F2480' }}>
                    Resolution Comment Come here.
                </Text>
            </View>






            {
                Data.map(renderItems)
            }

            <View style={{ flexDirection: 'row',marginTop:12}}>
                <Image source={require('../../images/download.png')} style={{ marginLeft: 16 }} />
                <Text style={{ textDecorationLine: 'underline', marginLeft: 4, fontWeight: '500', fontSize: 14, lineHeight: 16, width: 151, color: '#233972' }}>Download PDF Report</Text>
            </View>

            <TouchableOpacity style={{ width: 320, height: 56, borderRadius: 100, backgroundColor: '#233972', marginVertical: 24, marginHorizontal: 15 }} onPress={() => { navigationProps.navigationprops.navigation.navigate('Details') }}>
                <Text style={{ alignSelf: 'center', marginTop: 17, fontWeight: '500', fontSize: 16, width: 58, color: '#FFFFFF' }}>Submit</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

export default ExecutedCustomer;