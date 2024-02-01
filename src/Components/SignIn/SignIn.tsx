import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native";
import { Alert, Image, StatusBar, Text, TouchableOpacity, View } from "react-native";
import styles from "./Style";
import InputText from "../InputText/InputText";
import { setLogIn } from "../../Redux/Slice";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-native-windows";
import ModalAlert from "./ModalAlert";
const sign = require('jwt-encode');


const SignIn:React.FC<{}>=(props:any)=>{
    const [personalnumber, setpersonalnumber] = useState(true);
    const[passeye,setpasseye]=useState<boolean>(true);
    const[passstatus,setpassstatus]=useState(true);
    const[remembertick,setremembertick]=useState(true);
    const [visibilityStatus,setVisibilitystatus]=useState<boolean>(false);
    const [signinColor,setSigninColor]=useState<boolean>(false);
    const [signin,setsign]=useState<boolean>(false);
    const dispatch=useDispatch();
    const details = {
        passOne:useRef(''),
        phoneNumber: useRef(''),
    };

 const isLog=useSelector((state:any)=>state.user.isLog);

    function handlesignin(){
       

    const secret = 'secret';
     const data = {
      number:details.phoneNumber.current,
     password:details.passOne.current,
    };
    const jwt = sign(data, secret);
    console.log("token inside signin:",jwt);
    
       
         dispatch(  
            setLogIn(
            {
                password:details.passOne.current,
                phonenumber:details.phoneNumber.current,
            },
        ))
    


        setsign(true); 

     if(isLog){
        props.navigation.navigate('MainScreen');
     }

      
    }

    useEffect(()=>{
        if(isLog){
            props.navigation.navigate('MainScreen');
            setsign(false);
          }
          else if(!isLog && signin ) {
              setVisibilitystatus(true);
              setsign(false);
          }
    },[signin,isLog]);

 

    

    function signincolor(){
            if(details.phoneNumber.current.length==10){
                setSigninColor(true);
            }
            else {
                setSigninColor(false);
            }
    }

    function SetModalScreen(param:boolean){
        setVisibilitystatus(param);
    }
  
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
                        signincolor();
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
            <TouchableOpacity style={[styles.signbtn,signinColor?{backgroundColor:'#233972'}:{}]} onPress={handlesignin}>
                <Text style={[styles.txtofSign,signinColor?{color:'#FFFFFF'}:{}]}>Sign In</Text>
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
           <ModalAlert visibilityStatus={visibilityStatus} SetModalScreen={SetModalScreen}/>
        </SafeAreaView>
    );

}

export default SignIn;