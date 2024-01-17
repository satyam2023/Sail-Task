import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./Style";

const BottomBar:React.FC<{}>=()=>{
    return(
        <View style={styles.bottomcontainer}>
        <TouchableOpacity style={styles.btn}>
            <Text style={styles.canceltext}>
            Cancel Visit
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnedit}>
            <Text style={styles.edittext}>
            Edit Visit
            </Text>
        </TouchableOpacity>
    
      </View>
    );

}
export default BottomBar;