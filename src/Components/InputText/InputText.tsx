import React, { FC, useRef, useState } from "react";
import { TextInput, StyleSheet, Keyboard, Text, View } from "react-native";
import styles from "./Style";

interface InputProps {
    placeholder: string;
    ChangeText: Function,
    keyboardType: any,
    secureText: boolean,
    maxLength: number,
}

const InputText: FC<InputProps> = (props): JSX.Element => {
    const [keyboard,setkeyboard]=useState<boolean>(true)
    const [float,setfloat]=useState<boolean>(false)
    Keyboard.addListener('keyboardDidHide', () => {
        setkeyboard(false);
    })
    function handle() {
        setkeyboard(true)
        setfloat(true);
    }
    function handleone() {
        setfloat(false);
    }
    return (
        <>
        { float?
            <View>
                <Text style={{color:'rgba(13, 165, 248, 1)',position:'absolute',bottom:29,left:20,backgroundColor:'transparent'}}>
                    {props.placeholder}</Text>
            </View>
            :
            <></>
        }
        <TextInput
            
            placeholder={props.placeholder}
            placeholderTextColor={'#110F2480'}
            onFocus={handle}
            onBlur={handleone}
            
            onChangeText={
                (text: string) => {
                    props.ChangeText(text)
                }
            }
            style={styles.TextInputs}
            keyboardType={props.keyboardType}
            secureTextEntry={props.secureText}
            maxLength={props.maxLength}
        />  
        </>
          
    );
};

export default InputText;