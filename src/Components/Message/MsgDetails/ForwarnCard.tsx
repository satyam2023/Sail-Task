import React from "react";
import { Text, View } from "react-native";
const ForwardCard: React.FC<{}> = () => {
    return (
        <View style={{ backgroundColor: '#FCFCFC', marginTop: 16, borderWidth: 1, borderColor: '#E6E6E6', marginHorizontal: 16 }}>

            <View style={{ marginLeft: 16, marginBottom: 8 }}>
                <Text style={{ marginTop: 8, fontWeight: '400', fontSize: 14 }}>
                    Forward by  {`   `}
                    <Text style={{ fontWeight: '500', color: '#110F24' }}>John Doe</Text>

                </Text>
                <Text style={{ marginTop: 8, fontWeight: '400', fontSize: 14 }}>
                    Forwarded To  {`   `}
                    <Text style={{ fontWeight: '500', color: '#110F24' }}>Kiara Sharma</Text>

                </Text>
                <Text style={{ marginTop: 8, fontWeight: '400', fontSize: 14 }}>

                    Comments{`\n`}
                    <Text style={{ fontWeight: '500', color: '#110F24' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque facere minus facilis soluta debitis saepe.</Text>
                </Text>

            </View>
        </View>
    );

};
export default ForwardCard; 