import React from "react";
import { Image, ScrollView, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import HeaderMain from "../../HeaderForMainScreen/HeaderMain";
import MsgField from "./MsgField";
import ForwardCard from "./ForwarnCard";
import DropDown from "../../DropDown/DropDown";
import styles from "../Style";
interface MsgProps {
    navigationprops: any
}


const MsgDetails: React.FC<MsgProps> = ({ navigationprops }: MsgProps) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <HeaderMain topheading="Message Details" navigationProps={navigationprops} />
            <View style={{ backgroundColor: '#FFFFFF', marginHorizontal: 20, marginVertical: 20 }}>

                <MsgField heading="Customer Code" body="1234567" />
                <MsgField heading="Customer Name" body="John Doe" />
                <MsgField heading="Customer Type" body="Customer Type Title" />
                <MsgField heading="Reason" body="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                <MsgField heading="Issue" body="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                <MsgField heading="Issue Comment" body="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                <ForwardCard />
                <ForwardCard />
                <ForwardCard />
                <View style={styles.escalateBox}>
                    <View style={{ width: '80%', marginLeft: 24 }}>
                        <Text style={{ marginTop: 5 }}>Escalate To</Text>
                        <Text style={{ fontWeight: '400', color: '#110F24', marginTop: 5 }}>Title</Text>
                    </View>
                    <Image source={require('../../images/Arrow.png')} style={{ transform: [{ rotate: '90deg' }], marginTop: 18, marginLeft: 8, tintColor: 'gray' }} />
                </View>

                <View style={styles.commentBox}>
                    <Text style={styles.commentTxt}>Add Comments</Text>
                    <TextInput
                        multiline={true}
                        placeholder="Remarks"
                        placeholderTextColor={'black'}
                        style={{ marginLeft: 16 }}
                    />
                </View>
                <TouchableOpacity style={styles.submitBox} onPress={() => navigationprops.navigation.navigate('MainScreen')}>
                    <Text style={styles.submitTxt}>Submit</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>);
}
export default MsgDetails;