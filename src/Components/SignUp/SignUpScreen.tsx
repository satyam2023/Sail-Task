import React from "react";
import { ScrollView, Text, View } from "react-native";
import CustomFooter from "../CustomFooter/CustomFooter";
import CustomHeader from "../CustomHeader/CustomHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import First from "../FirstSignUpPage/First";
const SignUpScreen: React.FC<{}> = () => {
    return (
        <SafeAreaView>
            <ScrollView >
                <First />
            </ScrollView>
            <CustomFooter />
        </SafeAreaView>
    );
}

export default SignUpScreen

