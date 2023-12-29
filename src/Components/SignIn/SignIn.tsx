import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";
import styles from "./Style";
import InputText from "../InputText/InputText";



const SignIn:React.FC<{}>=(props:any)=>{
    const [personalnumber, setpersonalnumber] = useState(true);
    const[passeye,setpasseye]=useState<boolean>(true);
    const[passstatus,setpassstatus]=useState(true);
    const[remembertick,setremembertick]=useState(true);
    const details = {
        passOne:useRef(''),
        phoneNumber: useRef(''),
    };


    return(
        <SafeAreaView style={{backgroundColor:'#FFFFFF',height:'100%'}}>
            <StatusBar backgroundColor={"#FFFFFF"} barStyle={'dark-content'}/>
            <Text style={styles.signinText}>Sign In</Text>
            <Text style={styles.pleaseText}>Please enter details to sign in</Text>
            <View style={personalnumber ? styles.inputbox : styles.inputboxno} >
                <View style={{ backgroundColor: '#E6E6E6', width: 0 }}><Image source={require('../images/contact.png')} style={styles.img} /></View>
                <InputText
                    placeholder="Your Unique Personal No."
                    ChangeText={(text: any) => {
                        details.phoneNumber.current = text;
                       
                    }}
                    keyboardType="numeric"
                    secureText={false}
                    maxLength={10}
                />
            </View>
            <View style={passstatus?styles.inputbox:styles.inputboxno} >
                <View style={{ backgroundColor: '#E6E6E6', width: 0 }}><Image source={require('../images/key.png')} style={styles.img}/></View>
                <InputText
                    placeholder="Create Your Password"
                    ChangeText={(text: string) => {
                        details.passOne.current = text;
                        
                    }}
                    keyboardType="default"
                    secureText={passeye}
                    maxLength={10}
                />
                 <TouchableOpacity style={{ backgroundColor: '#E6E6E6', width: 0,position:'absolute',left:316,}}
                 onPress={()=>{
                    setpasseye(!passeye)
                 }}
                 >{passeye?<Image source={require('../images/eyecut.png')} style={styles.imgdrop}/>:<Image source={require('../images/eye.png')} style={styles.imgdrop}/>}</TouchableOpacity>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flexDirection:'row'}}>
                  {remembertick?<TouchableOpacity onPress={()=>{setremembertick(!remembertick)}} style={{marginLeft:20}}><Image source={require('../images/remember.png')}/></TouchableOpacity>:<TouchableOpacity style={styles.emptytick} onPress={()=>{setremembertick(!remembertick)}} />}
                    <Text style={styles.forgot}>Remember me</Text>

                </View>
               <TouchableOpacity>
                <Text style={[styles.forgot,styles.forgotmargin]}>Forgot password?</Text>
               </TouchableOpacity>
                 
            </View>
            <TouchableOpacity style={styles.signbtn}>
                <Text style={styles.txtofSign}>Sign In</Text>
            </TouchableOpacity >
            <View style={{width:236,marginTop:16,alignSelf:'center',flexDirection:'row'}}>
                 <Text style={{fontWeight:'400',fontSize:14,
                lineHeight:17.5,color:'#110F2480'}}>Don’t have an account? 
                  </Text>
                    <TouchableOpacity onPress={() => {props.navigation.navigate('SignUp')}}>
                  <Text style={{fontWeight:'600',fontSize:14,
                lineHeight:17.5,color:'#233972'}}> Sign up</Text></TouchableOpacity>
                
               
                 </View>
                 <View style={{flexDirection:'row',marginTop:41,width:353,height:18,marginHorizontal:20,marginBottom:167,}}>
                    <Image source={require('../images/orline.png')}/>
           </View>
           <TouchableOpacity style={styles.authbtn}>
            <Image source={require('../images/fingerscan.png')} style={{marginLeft:16,}}/>
            <Text style={styles.finger}>Sign in with Fingerprint</Text>
            
           
           </TouchableOpacity>
           <TouchableOpacity style={styles.authbtn}>
            <Image source={require('../images/facescan.png')} style={{marginLeft:16,}}/>
            <Text style={styles.finger}>Sign in with Face Recognition</Text>
            
           
           </TouchableOpacity>
        </SafeAreaView>
    );

}

export default SignIn;