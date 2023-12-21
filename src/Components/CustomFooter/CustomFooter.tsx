import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./Style";
import { SafeAreaView } from "react-native-safe-area-context";
interface Footerprops{
    setScreen:any;
    CurrentScreen:any,
    FirstSubmit:Function,
    SecondSubmit:Function,
    ThirdSubmit:Function,
}

const CustomFooter: React.FC<Footerprops> =({CurrentScreen,setScreen,FirstSubmit,SecondSubmit,ThirdSubmit}:Footerprops)=>{

function handlenextscreen(){
    FirstSubmit();
    SecondSubmit();
    ThirdSubmit();
    if(CurrentScreen==1){
  setScreen(2)
    }
    else if(CurrentScreen==2){
        setScreen(3)
    }
    else if(CurrentScreen==3){
        setScreen(1)
    }
}

    return (
        <View style={styles.footer}>
            <View style={styles.progressbar}>
                <View style={styles.bar}/>
                <View style={(CurrentScreen==2 || CurrentScreen==3) ?styles.bar:styles.nobar}/>
                <View style={( CurrentScreen==3) ?styles.bar:styles.nobar}/>
            </View>
            <View  style={styles.footercontainer}>
                 
                 <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={styles.signupbtn}>
                         <Text style={styles.signuptxt}>Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.circle}
                    onPress={handlenextscreen}>
                       <Image style={{width:24,height:24,marginTop:15,marginLeft:15,gap:10}} source={require('../images/Arrow.png')}/>
                    </TouchableOpacity>
                 </View>
                 <View style={{height:18,width:236,marginTop:8,marginLeft:79,}}>
                 <Text style={{fontWeight:'400',fontSize:14,
                lineHeight:17.5,color:'#110F2480'}}>Already have an account?
                    <Text style={{fontWeight:'600',fontSize:14,
                lineHeight:17.5,color:'#233972'}}> Sign in</Text>
                 </Text>
                 </View>
            </View>


        </View>
        
    );
}
export default CustomFooter;