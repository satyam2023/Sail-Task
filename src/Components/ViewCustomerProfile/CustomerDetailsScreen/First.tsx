import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputText from '../../InputTextForMainScreen/InputText';
import styles from './Style';
import DropDown from '../../DropDown/DropDown';
import { CustomerSegment,CustomerStatus,CustomerSubSegment,CustomerSubType,CustomerType } from './Data/Data';

const First :React.FC<{}>= () => {
  return (
   <ScrollView >
    <View style={ [styles.inputbox,{marginTop:8}]} >
            <InputText
                placeholder="Customer Code"
                ChangeText={(text: any) => {
                   
                }}
                keyboardType="numeric"
                secureText={false}
                maxLength={10}
            />
        </View>
        <View style={ [styles.inputbox,{marginBottom:0}]} >
            <InputText
                placeholder="Company Name"
                ChangeText={(text: any) => {
                   
                }}
                keyboardType="numeric"
                secureText={false}
                maxLength={10}
            />
            </View>
            <DropDown data={CustomerSegment} heading={'Customer Segment'} setReason={()=>{}}/>
            <DropDown data={CustomerSubSegment} heading={'Customer SubSegment'} setReason={()=>{}}/>
            <DropDown data={CustomerType} heading={'Customer Type'} setReason={()=>{}}/>
            <DropDown data={CustomerSubType} heading={'Customer Sub Type'} setReason={()=>{}}/>
            <DropDown data={CustomerType} heading={'Select Status of Customer'} setReason={()=>{}}/>

            <View style={ [styles.inputbox,{marginTop:16}]} >
            <InputText
                placeholder="PAN Card Number"
                ChangeText={(text: any) => {
                   
                }}
                keyboardType="numeric"
                secureText={false}
                maxLength={10}
            />
            </View>
            <View style={ [styles.inputbox]} >
            <InputText
                placeholder="GST Number"
                ChangeText={(text: any) => {
                   
                }}
                keyboardType="numeric"
                secureText={false}
                maxLength={10}
            />
            </View>
            <View style={ [styles.inputbox]} >
            <InputText
                placeholder="Customer Region"
                ChangeText={(text: any) => {
                   
                }}
                keyboardType="numeric"
                secureText={false}
                maxLength={10}
            />
            </View>
            <View style={ [styles.inputbox]} >
            <InputText
                placeholder="Website Link"
                ChangeText={(text: any) => {
                   
                }}
                keyboardType="numeric"
                secureText={false}
                maxLength={10}
            />
            </View>
            <View style={ [styles.inputbox]} >
            <InputText
                placeholder="Location Name"
                ChangeText={(text: any) => {
                   
                }}
                keyboardType="numeric"
                secureText={false}
                maxLength={10}
            />
            </View>
            <Text style={{ fontWeight: '500', fontSize: 14, lineHeight: 16, width: 146, color: '#666666', marginTop: 16, marginLeft: 21 }}>
                Upload Video/Image
            </Text>
            <TouchableOpacity style={{ width: 353, height: 82, borderWidth: 1, borderColor: '#233972', borderStyle: 'dashed', borderRadius: 33, marginTop: 19, marginLeft: 21, backgroundColor: '#E9EBF1',marginBottom:130 }}>
                <View style={{ height: 34, marginTop: 27 }}>
                    <Text style={{ alignSelf: 'center', fontWeight: '500', fontSize: 16, color: '#666666', lineHeight: 16 }}>
                        +  Upload Video/Image
                    </Text>
                </View>
            </TouchableOpacity>
            
            
    
   </ScrollView>
    
  )
}

export default First;