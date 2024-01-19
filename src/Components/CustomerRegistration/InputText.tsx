import React, { FC, useRef } from "react";
import { TextInput, StyleSheet,Keyboard } from "react-native";
import Styles from "./Style";
interface InputProps {
    placeholder: string;
    ChangeText: Function,
    keyboardType:any,
    secureText:boolean,
    
    // value:any,
}



const InputText: FC<InputProps> = (props): JSX.Element => {
   
    
    return (
        <TextInput
            placeholder={props.placeholder}
            placeholderTextColor={'#110F2480'}
            onChangeText={
                (text: string) => {
                    props.ChangeText(text)
                }


            }
            style={Styles.TextInputs}
            keyboardType={props.keyboardType}
            secureTextEntry={props.secureText}
        />
    );
};

export default InputText;