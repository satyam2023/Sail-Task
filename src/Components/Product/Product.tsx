import React from "react"
import { Text, View } from "react-native";
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
}

const Product:React.FC<ProductProps>=({category,imagefirst,imagesecond,text,imagefirstinfo,imagesecondinfo}:ProductProps)=>{

    return (
       
        <View style={styles.box}>
          
          <View style={{flexDirection:'row'}}> 
          <Text style={{marginTop:16,marginLeft:20,fontWeight:"600",fontSize:14,lineHeight:14,color:'#110F24'}}>
                {category}
            </Text>
            <Text style={{marginTop:16,left:326,fontWeight:"600",fontSize:14,lineHeight:14,color:'#110F24',position:'absolute'}}>
                {text}
            </Text>

            </View> 

            <View style={{flexDirection:'row'}}> 
            <View style={{marginLeft:20,width:186,height:90,borderRadius:4,}}>
            <Image source={require('../images/steel.png')}  style={styles.img} />
            <Text style={{width:'auto', height:14,marginTop:8,fontSize:14,fontWeight:"500",lineHeight:14,color:'#110F24',alignSelf:'center'}}>{imagefirstinfo}</Text>
            </View>
        <View>
           <Image  source={require('../images/rolled.png')} style={styles.img} />
           <Text style={{width:'auto', height:14,marginTop:8,fontSize:14,fontWeight:"500",lineHeight:14,color:'#110F24',alignSelf:'center'}}>{imagesecondinfo}</Text>
           </View>
            </View> 



            
        </View>
    );

}

export default Product;