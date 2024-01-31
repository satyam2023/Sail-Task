import React from "react";
import { View } from "react-native";
import styles from "./Style";
const HomeIndicator:React.FC<{}>=()=>{
    return(
        <View style={styles.indicator}>
            <View style={styles.bar}/>
        </View>
    );
}
export default HomeIndicator;