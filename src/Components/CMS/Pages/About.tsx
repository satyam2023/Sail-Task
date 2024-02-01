import React, { useState } from "react";
import styles from "../../UserEnquiry Screen/Style";
import { FlatList, Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";
 
interface Props{
    setScreen:Function,
}


const About:React.FC<Props>=({setScreen}:Props)=>{
    const Data=[{tag:"Operations"},{tag:"Product Mix & Marketing"},{tag:"Management Team"}];
    const [pages,setpages]=useState<string>('intial');
    // const [openStatus,setOpenStatus]=useState<boolean>(false);
    const [openStatus,setOpenStatus]=useState({
        operation:false,
        productMix:false,
        Management:false,
    });
    function renderItem(item:any){
        function Pagescontrol(){
            if(item.item.tag=="Operations"){
                 setpages("Operations");
            }
            else if(item.item.tag=="Product Mix & Marketing"){
                setpages("Product Mix & Marketing")
            }
            else if(item.item.tag=="Management Team"){
                setpages("Management Team")
            }

            console.log("page tyope::",item.item.tag)
           

        }

        function handleOpenStatus(){
            if(item.item.tag=="Operations"){
            setOpenStatus({
                ...openStatus,
                operation:!openStatus.operation

            })
            }
            else if(item.item.tag=="Product Mix & Marketing"){
  
                setOpenStatus({
                    ...openStatus,
                    productMix:!openStatus.productMix
    
                })
            }
            else if(item.item.tag=="Management Team"){

                setOpenStatus({
                    ...openStatus,
                    Management:!openStatus.Management
    
                })
            }
           
        }
        return(
            <>
            <View style={{height:62,width:363,backgroundColor:'#FFFFFF',marginTop:16,flexDirection:'row'}}>
             <Text style={{width:273,height:25,marginLeft:24,fontWeight:'500',fontSize:14,lineHeight:24,color:'#110F24',marginTop:19}}>{item.item.tag}</Text>
             <TouchableOpacity onPress={()=>{handleOpenStatus();Pagescontrol()}}>
                <Image source={require('../../images/add.png')} style={{transform:[{rotate:'0deg'}],marginTop:19,marginLeft:12}}/>
                </TouchableOpacity>
                
            </View>
            { (pages=="Operations" && openStatus.operation && item.item.tag=="Operations") &&
                <Text style={{backgroundColor:'#FFFFFF',color:'black',lineHeight:20,marginRight:27,paddingLeft:20,width:363,paddingBottom:10}}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum totam aliquam ipsa nobis. Aliquam ducimus recusandae facilis vel possimus, veritatis, excepturi, culpa iusto ipsam doloremque repudiandae dolore. Exercitationem, molestiae laudantium.
                </Text>
            }
             { (pages=="Product Mix & Marketing" && openStatus.productMix && item.item.tag=="Product Mix & Marketing") &&
                <Text style={{backgroundColor:'#FFFFFF',color:'black',lineHeight:20,marginRight:27,width:363,paddingLeft:20,paddingBottom:10}}>
                    Product Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum totam aliquam ipsa nobis. Aliquam ducimus recusandae facilis vel possimus, veritatis, excepturi, culpa iusto ipsam doloremque repudiandae dolore. Exercitationem, molestiae laudantium.
                </Text>
            }
             { (pages=="Management Team" && openStatus.Management && item.item.tag=="Management Team") &&
                <Text style={{backgroundColor:'#FFFFFF',color:'black',lineHeight:20,marginRight:27,width:363,paddingLeft:20,paddingBottom:10}}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum totam aliquam ipsa nobis. Aliquam ducimus recusandae facilis vel possimus, veritatis, excepturi, culpa iusto ipsam doloremque repudiandae dolore. Exercitationem, molestiae laudantium.
                </Text>
            }
            </>
        );
    }
    return(
        <View style={{}}>
            <SafeAreaView>
        <StatusBar backgroundColor={'#233972'} barStyle={'light-content'}/>
            <View style={{height:60,width:'100%',backgroundColor:'#233972',flexDirection:'row'}}>
             <TouchableOpacity style={{marginLeft:21,marginTop:18}} onPress={()=>{setScreen("CMS")}}>
                 <Image source={require('../../images/Arrow.png')} style={{tintColor:'#FFFFFF',width:9,height:15,transform: [{ rotate: '180deg' }],}}/>
                 </TouchableOpacity> 
                <Text style={{marginTop:13,color:'#FFFFFF',marginLeft:16,height:36,fontWeight:"600",fontSize:16}}>About Us</Text>
            </View>
    </SafeAreaView>

    <Image source={require('../../images/Sail.png')} style={{height:100,width:100,resizeMode:'contain',margin:20}}/>
    <Text style={{color:'black',margin:20,lineHeight:20}}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lacus vitae nulla mattis ultrices. Sed dictum sem id erat fringilla, et ultrices tellus euismod. Nullam vitae ligula lectus.
</Text>
    <FlatList data={Data} renderItem={renderItem} showsVerticalScrollIndicator={false} style={{marginLeft:20,}}/>
    <Text style={{marginLeft:20,color:'#233972',fontWeight:'500',marginTop:16}}>Contact</Text>
    <Text style={{marginHorizontal:20,lineHeight:20,color:'black'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta minus deleniti non voluptate vitae a, vero officiis, ab quos tempora expedita itaque velit neque dolor veniam et, repudiandae quam suscipit.</Text>
    <Text style={{marginLeft:20,color:'#233972',fontWeight:'500',marginTop:20}}>Website</Text>
    <Text style={{marginHorizontal:20,lineHeight:20,color:'black'}}>www.sail.co.in</Text>
        </View>
    );
};

export default About;