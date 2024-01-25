import React, { FC, useRef, useState } from "react";
import { TextInput, StyleSheet,Keyboard, View, Text } from "react-native";
import styles from "./Style";
interface InputProps {
    placeholder: string;
    ChangeText: Function,
    keyboardType:any,
    secureText:boolean,
    
    // value:any,
}



const InputText: FC<InputProps> = (props): JSX.Element => {
    const [focus,setfocus]=useState<boolean>(false);


    
    return (
       <View>
        {focus?
            <View style={{position:'absolute',height:15,top:21,zIndex:2,left:44}}>
                <Text style={{fontWeight:'400',fontSize:12,color:'#110F2480'}}>
                    {props.placeholder}
                </Text>
            </View>:null}
        <TextInput
            placeholder={props.placeholder}
            placeholderTextColor={!focus?'#110F2480':'transparent'}
            onChangeText={
                (text: string) => {
                    props.ChangeText(text)
                }


            }
            style={!focus?styles.TextInputs:styles.TextInputFocus}
            keyboardType={props.keyboardType}
            secureTextEntry={props.secureText}
            onFocus={()=>{setfocus(true)}}
            // onBlur={()=>{setfocus(false)}}
        />
        </View>
    );
};

export default InputText;