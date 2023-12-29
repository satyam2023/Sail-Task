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
    totalvalidation:boolean,
    props:any,
}
import { useSelector } from "react-redux";


const CustomFooter: React.FC<Footerprops> =({CurrentScreen,setScreen,FirstSubmit,SecondSubmit,totalvalidation,ThirdSubmit,props}:Footerprops)=>{
 const firstscreenstatus=useSelector((state:any)=>state.button.FirstScreenButtonStatus);
 const secondscreenstatus=useSelector((state:any)=>state.button.SecondScreenButtonStatus);
 const thirdscreenstatus=useSelector((state:any)=>state.button.ThirdScreenButtonStatus)
console.log("secondbuttonstatus",secondscreenstatus);
function handlenextscreen(){
    FirstSubmit();
    SecondSubmit();
    
  /*  if(CurrentScreen==1){
  setScreen(2)
    }
    else if(CurrentScreen==2){
        setScreen(3)
    }
    else if(CurrentScreen==3){
        setScreen(1)
    }*/
}

function handlebackscreen(){
    setScreen(CurrentScreen-1);
}

function completesignup(){
    ThirdSubmit();
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
               {  CurrentScreen>=2 && <TouchableOpacity style={styles.circleleft}
                    onPress={handlebackscreen}>
                       <Image style={{width:24,height:24,marginTop:15,marginLeft:15,gap:10,transform:[{ rotate: '180deg'}]}} source={require('../images/Arrow.png')}/>
                    </TouchableOpacity>}
                    {CurrentScreen!=3?
                    <TouchableOpacity style={CurrentScreen!=2?styles.signupbtn:styles.signupboth} >
                         <Text style={styles.signuptxt}>Sign Up</Text>
                    </TouchableOpacity>:<TouchableOpacity style={CurrentScreen!=2?[styles.signupthree,thirdscreenstatus?styles.signupbackblue:styles.signupbacknoblue]:styles.signupboth}  onPress={completesignup}>
                         <Text style={[styles.signuptxt,!thirdscreenstatus?styles.txte:styles.txet]}>Sign Up</Text>
                    </TouchableOpacity>}
                    { CurrentScreen==1 && <TouchableOpacity style={!firstscreenstatus?styles.circle:styles.bluecircle}
                    onPress={handlenextscreen}>
                      { !firstscreenstatus?<Image style={{width:24,height:24,marginTop:15,marginLeft:15,gap:10,}} source={require('../images/Arrow.png')}/>:<Image style={{width:24,height:24,marginTop:15,marginLeft:15,gap:10,}} source={require('../images/bluebutton.png')}/>}
                    </TouchableOpacity>}
                    { CurrentScreen==2 && <TouchableOpacity style={!secondscreenstatus?styles.circle:styles.bluecircle}
                    onPress={handlenextscreen}>
                      { !secondscreenstatus?<Image style={{width:24,height:24,marginTop:15,marginLeft:15,gap:10,}} source={require('../images/Arrow.png')}/>:<Image style={{width:24,height:24,marginTop:15,marginLeft:15,gap:10,}} source={require('../images/bluebutton.png')}/>}
                    </TouchableOpacity>}
                 </View>
                 <View style={{height:18,width:236,marginTop:8,marginLeft:79,flexDirection:'row'}}>
                 <Text style={{fontWeight:'400',fontSize:14,
                lineHeight:17.5,color:'#110F2480'}}>Already have an account?</Text>
                   
                   <TouchableOpacity onPress={() => {props.navigation.navigate('SignIn')}}><Text style={{fontWeight:'600',fontSize:14,
                lineHeight:17.5,color:'#233972'}}> Sign in</Text></TouchableOpacity> 
                 
                 </View>
            </View>


        </View>
        
    );
}
export default CustomFooter;