import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import styles from "./Style";
import { Image, Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import InputText from "../InputText/InputText";
import CustomHeader from "../CustomHeader/CustomHeader";
import { useDispatch, useSelector } from 'react-redux';
import { setSecondscreen } from '../../Redux/Slice2';
interface SecondProps{
    setScreen:Function,

}
const Second = forwardRef(({setScreen}: SecondProps, ref) => {
    const [toggle,settoggle]=useState<boolean>(false);
    const [roletoggle,settogglerole]=useState<boolean>(false);
    const [Tag,setTag]=useState<String>("Location")
    const [TagRole,setTagRole]=useState<String>("Your Role")
    const [dropstatus, setdropstatus] = useState<boolean>(false);
    const [dropstatusrole, setdropstatusrole] = useState<boolean>(false);
    const [name,setname]=useState<boolean>(true);
    const [email,setemail]=useState<boolean>(true);
    const [validname ,setvalidname]=useState<boolean>(false);
    const [validemail,setvalidemail]=useState<boolean>(false);
    const [validlocation,setvalidlocation]=useState<boolean>(true);
    const [validrole,setvalidrole]=useState<boolean>(true);
    const dispatch = useDispatch();
    var iconstatus=useSelector((state:any)=>state.button.SecondScreenButtonStatus);
    const details = {
        name: useRef(''),
        email: useRef(''),
    };
    function dropview() {
        if (toggle) {
            return (
                <Modal
                    visible={toggle}
                    animationType='slide'
                    transparent={true}
                    style={{ flexDirection: 'column', backgroundColor: '#FFFFFF',  width: 353,height:167,}}

                >
                                <TouchableOpacity onPress={() => {
                                    setTag("Delhi")
                                    settoggle(false)
                                    setdropstatus(true)
                                }}
                                style={styles.insidedropdown}><Text style=
                                {styles.droptext}>Delhi</Text></TouchableOpacity>
                                <View style={styles.line}></View>
                                <TouchableOpacity onPress={() => {
                                    setTag("Jaipur")
                                    settoggle(false)
                                    setdropstatus(true)
                                }}
                                style={styles.insidedropdown}><Text style=
                                {styles.droptext} >Jaipur</Text></TouchableOpacity>
                                <View style={styles.line}></View>
                                <TouchableOpacity onPress={() => {
                                    setTag("Indore")
                                    settoggle(false)
                                    setdropstatus(true)
                                }}
                                style={styles.insidedropdown}><Text style=
                                {styles.droptext}>Indore</Text></TouchableOpacity>    
                </Modal>



            );
        }

    }

    function dropviewrole() {
        if (roletoggle) {
            return (
                <Modal
                    visible={roletoggle}
                    animationType='slide'
                    transparent={true}
                    style={{ flexDirection: 'column', backgroundColor: '#FFFFFF',  width: 353,height:167,}}

                >
                                <TouchableOpacity onPress={() => {
                                    setTagRole("Product Executive")
                                    settogglerole(false)
                                    setdropstatusrole(true)
                                }}
                                style={styles.insidedropdown}><Text style=
                                {styles.droptext}>Product Executive</Text></TouchableOpacity>
                                <View style={styles.line}></View>
                                <TouchableOpacity onPress={() => {
                                   setTagRole("Finance Officer")
                                    settogglerole(false)
                                    setdropstatusrole(true)
                                }}
                                style={styles.insidedropdown}><Text style=
                                {styles.droptext} >Finance Officer</Text></TouchableOpacity>
                                <View style={styles.line}></View>
                                <TouchableOpacity onPress={() => {
                                     setTagRole("Warehouse Executive")
                                     settogglerole(false)
                                     setdropstatusrole(true)
                                }}
                                style={styles.insidedropdown}><Text style=
                                {styles.droptext}>WareHouse Executive</Text></TouchableOpacity>   
                                <View style={styles.line}></View>
                                <TouchableOpacity onPress={() => {
                                     setTagRole("Branch Manager")
                                     settogglerole(false)
                                     setdropstatusrole(true)
                                }}
                                style={styles.insidedropdown}><Text style=
                                {styles.droptext}>Branch Manager</Text></TouchableOpacity> 
                                <View style={styles.line}></View>
                                <TouchableOpacity onPress={() => {
                                     setTagRole("Regional Executive")
                                     settogglerole(false)
                                     setdropstatusrole(true)
                                }}
                                style={styles.insidedropdown}><Text style=
                                {styles.droptext}>Regional Executive</Text></TouchableOpacity> 
                                <View style={styles.line}></View>
                                <TouchableOpacity onPress={() => {
                                     setTagRole("Regional Manager")
                                     settogglerole(false)
                                     setdropstatusrole(true)
                                }}
                                style={styles.insidedropdown}><Text style=
                                {styles.droptext}>Regional Manager</Text></TouchableOpacity>
                                <View style={styles.line}></View>
                                <TouchableOpacity onPress={() => {
                                     setTagRole("HQ")
                                     settogglerole(false)
                                     setdropstatusrole(true)
                                }}
                                style={styles.insidedropdown}><Text style=
                                {styles.droptext}>HQ</Text></TouchableOpacity>
                                  
                </Modal>



            );
        }

    }

    function handleUserName(txt:any) {
        const regexPattern = /^[a-zA-Z]{3,20}( )[a-zA-Z]{3,20}(( )[a-zA-Z]{3,20})?$/;
        if (!regexPattern.test(txt)) {
          setname(false);
        } else {
          setname(true);
          setvalidname(true);
        }
      }

    function emailHandler(txt:any) {
        const regexPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      
        if (!regexPattern.test(txt)) {
          setemail(false);
        } else {
            setemail(true);
            setvalidemail(true);
        }
      }

      function locationhandler(){
        if(Tag!="Location"){
            setvalidlocation(true);
        }
      }
      function rolehandler(){
        if(TagRole!="Your Role"){
            setvalidrole(true);
        }
      }

   /*   if(Tag!="Location" && TagRole!="Your Role" && validemail && validname ){
        dispatch(setSecondscreen(true));
  }
  else if (Tag=="Location" || TagRole=="Your Role" || !validemail || !validname){
    dispatch(setSecondscreen(false));
  }*/
useEffect(
()=>{
    if(Tag!="Location" && TagRole!="Your Role" && validemail && validname ){
        dispatch(setSecondscreen(true));
  }
  else if (Tag=="Location" || TagRole=="Your Role" || !validemail || !validname){
    dispatch(setSecondscreen(false));
  }

},
[validemail,validname,Tag!="Location",TagRole!="Your Role"]

);


      function validationcheck(){
        if(Tag!="Location" && TagRole!="Your Role" && validemail && validname ){
              setScreen(3);
        }
        else{
            if(!validname)
            setname(false);

            if(!validemail)
            setemail(false);

            if(Tag=="Location")
            setvalidlocation(false);


            if(TagRole=="Your Role")
             setvalidrole(false);

        }
      }

    useImperativeHandle(ref, () => ({
        handleSubmit: validationcheck,
    }));


  return(
    <ScrollView style={{height:700,backgroundColor:'#FFF'}}>
        <CustomHeader details="Enter your personal information"/>
    <View style={name?styles.inputbox:styles.inputboxno} >
    <View style={{ backgroundColor: '#E6E6E6', width: 0 }}><Image source={require('../images/contact.png')} style={!iconstatus?styles.img:styles.imgverified}/></View>
    <InputText
        placeholder="Your Name"
        ChangeText={(text: string) => {
            details.name.current = text;
            handleUserName(text);
        }}
        keyboardType="default"
        secureText={false}
        maxLength={30}
    />
</View>
<View style={email?styles.inputbox:styles.inputboxno} >
    <View style={{ backgroundColor: '#E6E6E6', width: 0 }}><Image source={require('../images/email.png')} style={!iconstatus?styles.img:styles.imgverified}/></View>
    <InputText
        placeholder="Your Email Id"
        ChangeText={(text: string) => {
            details.email.current = text;
            emailHandler(text);
        }}
        keyboardType="default"
        secureText={false}
        maxLength={30}
    />
</View>

                    <TouchableOpacity style={validlocation?styles.searchbox:styles.nosearchbox} onPress={() => {
                        if (toggle) { settoggle(false) }
                        else { settoggle(true) 
                        setvalidlocation(true)}

                    }} >
                         <View style={{ backgroundColor: '#E6E6E6', width: 0 }}><Image source={require('../images/Location.png')} style={!iconstatus?styles.img:styles.imgverified}/></View>

                        <Text style={[styles.dropdown,Tag!="Location"?styles.dropdownnew:styles.dropdown]} >{Tag}
                        </Text>
                        <View style={{ backgroundColor: '#E6E6E6', width: 0,position:'absolute',left:313,}}><Image source={require('../images/Downward.png')} style={styles.imgdrop}/></View>
                    </TouchableOpacity>
                    {dropview()}

                
                
                    <TouchableOpacity style={validrole?styles.searchbox:styles.nosearchbox} onPress={() => {
                        if (roletoggle) { settogglerole(false) }
                        else { settogglerole(true) 
                        setvalidrole(true)}
                    }} >
                         <View style={{ backgroundColor: '#E6E6E6', width: 0 }}><Image source={require('../images/Role.png')} style={!iconstatus?styles.img:styles.imgverified}/></View>

                        <Text style={[styles.dropdown,TagRole!="Your Role"?styles.dropdownnew:styles.dropdown]} >{TagRole}
                        </Text>
                        <View style={{ backgroundColor: '#E6E6E6', width: 0,position:'absolute',left:313,}}><Image source={require('../images/Downward.png')} style={styles.imgdrop}/></View>
                    </TouchableOpacity>
                    {dropviewrole()}

               
               

</ScrollView>

  );


});
export default Second;