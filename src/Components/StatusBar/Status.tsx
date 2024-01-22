import React from "react";
import styles from "./Style";
import { Image, StatusBar, Text, View } from "react-native";
interface StatusProps{

}

const Status:React.FC<StatusProps>=()=>{

return (
<StatusBar backgroundColor={'#233972'} barStyle={'light-content'}>

</StatusBar>);

}

export default Status;