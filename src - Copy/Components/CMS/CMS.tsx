import React, { useState } from "react";
import styles from "./Style";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import HeaderMain from "../HeaderForMainScreen/HeaderMain";
import About from "./Pages/About";
import FAQs from "./Pages/FAQs";
import Privacy from "./Pages/Privacy";
import Terms from "./Pages/Terms";
import Contact from "./Pages/Contact";
import Footer from "../ProductCatalog/Footer/Footer";

const CMSPages:React.FC<{}>=(props:any)=>{
  const Data=[{tag:"About Us"},{tag:"Contact Us"},{tag:"Privacy"},{tag:"FAQs"},{tag:"Terms and Conditions"},];
  const [pages,setpages]=useState<string>("CMS");

  function setScreen(param:string){
    setpages(param);
  }

    function renderItem(item:any){
        function Pagescontrol(){
            if(item.item.tag=="About Us"){
                 setpages("About Us")
            }
            else if(item.item.tag=="Contact Us"){
                setpages("Contact Us")
            }
            else if(item.item.tag=="Privacy"){
                setpages("Privacy")
            }
            else if(item.item.tag=="FAQs"){
                setpages("FAQs")
            }
            else if(item.item.tag=="Terms and Conditions"){
                setpages("Terms and Conditions")
            }

        }
        return(
            <View style={{height:62,width:363,borderRadius:4,backgroundColor:'#FFFFFF',marginBottom:16,flexDirection:'row'}}>
             <Text style={{width:273,height:25,marginLeft:24,fontWeight:'500',fontSize:14,lineHeight:24,color:'#110F24',marginTop:19}}>{item.item.tag}</Text>
             <TouchableOpacity onPress={Pagescontrol}>
                <Image source={require('../images/Arrow.png')} style={{transform:[{rotate:'0deg'}],marginTop:19,marginLeft:12}}/>
                </TouchableOpacity>
            </View>
        );
    }
    return(
        <View style={{backgroundColor:'#F9F9FC',height:'100%'}}>
            <>
           {pages=="CMS" && <><HeaderMain topheading="CMS Pages" navigationProps={props}/>
            <FlatList data={Data} renderItem={renderItem} showsVerticalScrollIndicator={false} style={{marginTop:20,marginLeft:21,}}/></>
            }
            {  pages=="About Us" && <About setScreen={setScreen}/>
            }
            {
                     pages=="FAQs" && <FAQs setScreen={setScreen}/>
            }
            {
                           pages=="Privacy" && <Privacy setScreen={setScreen}/>
            }
            {
                               pages=="Terms and Conditions" && <Terms setScreen={setScreen}/>
            }
            {
                               pages=="Contact Us" && <Contact setScreen={setScreen}/>
            }
            </>
            {pages=="CMS" && <Footer color={'#F9F9FC'} navigationprops={props}/>}
        </View>
    );
};

export default CMSPages;