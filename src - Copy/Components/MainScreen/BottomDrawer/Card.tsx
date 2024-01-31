import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
interface cardProps{
    heading:string,
    image:any
    width:any
    left:any
    NavigationProps:any
    handleCloseBottomSheet:any
}

const Card:React.FC<cardProps>=({heading,image,width,left,NavigationProps,handleCloseBottomSheet}:cardProps)=>{
    function handleNavigation(){
        handleCloseBottomSheet();

        
        if(heading=="Create Meeting Details"){
             NavigationProps.navigation.navigate('Meeting');
        }
        else if(heading=="Create Customer Profile"){
            NavigationProps.navigation.navigate('Details');
        }
        else if (heading=="Create Visit Plan"){
            NavigationProps.navigation.navigate('VisitPlan');
        }
        else if(heading=="View Customer Profile"){
            NavigationProps.navigation.navigate('ViewCustomer');
        }
    }
    return(
        <TouchableOpacity style={{height:124,width:165,marginLeft:20,borderRadius:4,borderWidth:1,borderColor:'#E8E8E8',backgroundColor:'#FFFFFF',marginTop:20}} onPress={()=>handleNavigation()}>
            <Image source={image} style={{marginTop:16,alignSelf:'center'}}/>
            <Text style={{width:width,height:40,marginLeft:left,fontWeight:'500',fontSize:14,lineHeight:20,marginTop:16,color:'#333333',textAlign:'center'}}>{heading}</Text>
        </TouchableOpacity>
    );
}

export default Card;