import React from "react"
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./Style";
import { Image } from "react-native";
interface ProductProps {
    category:String
    imagefirst:any
    imagesecond:any
    text:any
    imagefirstinfo:any
    imagesecondinfo:any
    navigationprops:any
}

const Product:React.FC<ProductProps>=({category,imagefirst,imagesecond,text,imagefirstinfo,imagesecondinfo,navigationprops}:ProductProps)=>{

    return (
       
        <View style={styles.box}>
          
          <View style={{flexDirection:'row'}}> 
         
          <Text style={{marginTop:16,marginLeft:20,fontWeight:"600",fontSize:14,lineHeight:14,color:'#110F24'}}>
                {category}
            </Text>
            <TouchableOpacity style={{position:'absolute',left:326}} 
            onPress={()=>{navigationprops.navigation.navigate('NearByCustomer')}}
            >
            <Text style={{marginTop:16,fontWeight:"600",fontSize:14,lineHeight:14,color:'#110F24',}}>
                {text}
            </Text>
            </TouchableOpacity>

            </View> 

            <View style={{flexDirection:'row'}}> 
            <TouchableOpacity style={{marginLeft:20,width:186,height:90,borderRadius:4,}} onPress={()=>{
                if(imagefirstinfo=="User Enquiry"){
                      navigationprops.navigation.navigate('Enquiry')
                }
                
            }}>
            <Image source={imagefirst}  style={styles.img} />
            <Text style={{width:'auto', height:14,marginTop:8,fontSize:14,fontWeight:"500",lineHeight:14,color:'#110F24',alignSelf:'center'}}>{imagefirstinfo}</Text>
            </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
                if(imagefirstinfo=="User Enquiry"){
                      navigationprops.navigation.navigate('IssueEnquiry')
                }
            }}>
           <Image  source={imagesecond} style={styles.img} />
           <Text style={{width:'auto', height:14,marginTop:8,fontSize:14,fontWeight:"500",lineHeight:14,color:'#110F24',alignSelf:'center'}}>{imagesecondinfo}</Text>
           </TouchableOpacity>
            </View> 



            
        </View>
    );

}

export default Product;