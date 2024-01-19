import React, { useState } from "react"
import { View, Text, Image } from "react-native";
import { DataOfIssue } from "./IssueData";
interface CardProps {
    issue: string,
    pending: string,
    date: string
}

const DetailsCard: React.FC<CardProps> = ({ issue, date, pending }: CardProps) => {


    return (
        <View style={{ height: 123, width: 353, borderRadius: 10, backgroundColor: '#FFFFFF', marginLeft: 20, marginTop: 24 }}>
            <View style={{ marginTop: 16 }}>
                <Text style={{ width: 71, height: 14, marginLeft: 16, color: '#666666', fontWeight: '400', fontSize: 14, lineHeight: 14 }}>
                    Issue Type
                </Text>
                <Text style={{ fontWeight: '500', fontSize: 14, lineHeight: 16, marginLeft: 16, height: 16, width: 248, color: '#110F24', marginTop: 8 }}>
                    {issue}
                </Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <View style={{ marginTop: 16, flexDirection: 'row' }}>
                    <Image source={require('../images/pending.png')} style={{ marginLeft: 16 }} />
                    <View >
                        <Text style={{ height: 14, width: 79, marginLeft: 8, color: '#666666', fontWeight: '400', fontSize: 12, lineHeight: 14 }}>
                            Pending With
                        </Text>
                        <Text style={{ fontWeight: '500', fontSize: 14, lineHeight: 16, marginLeft: 8, height: 16, width: 132, color: '#110F24', marginTop: 8 }}>
                            {pending}
                        </Text>
                    </View>
                </View>
                <View style={{ marginTop: 16, flexDirection: 'row' }}>
                    <Image source={require('../images/date.png')} />
                    <View>
                        <Text style={{ width: 71, height: 14, marginLeft: 8, color: '#666666', fontWeight: '400', fontSize: 14, lineHeight: 14 }}>
                            Issue Date
                        </Text>
                        <Text style={{ fontWeight: '500', fontSize: 14, lineHeight: 16, marginLeft: 8, height: 16, width: 248, color: '#110F24', marginTop: 8 }}>
                            {date}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default DetailsCard