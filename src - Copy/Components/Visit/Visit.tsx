import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import styles from "./Styles";
import UpcomingVisit from "./UpComingVisit/Upcoming";
import CustomerDetails from "./UpComingVisit/CustomerDetails";
import Planned from "./PlannedVisit/Planned";
import { UseSelector, useSelector } from "react-redux";
import Executed from "./ExexutedVisit/Executed";
const Visit:React.FC<{}>=(props:any)=>{
    const Data=[{id:1}]
    const renderItem=(item:any)=>{
        console.log("iteration numebr",item.item)
       
        return(
            
            <UpcomingVisit id={item.item} status={setStatus}/>
           
        );
    }

    const VisitType=useSelector((state:any)=>state.button.VisitType);
    useEffect(()=>{
        if(VisitType=="Upcoming"){
 setCurrentScreen(1);
        }
        else if(VisitType=="Planned"){
setCurrentScreen(2);
        }
        else if(VisitType=="Executed"){
setCurrentScreen(3);
        }
    },[])
    
    const [customerdetailStatus,setcustomerdetailStatus]=useState(false);
    const [CurrentScreen,setCurrentScreen]=useState<number>(1);
    const [planneddetailStatus,setplanneddetailstatus]=useState<boolean>(false);
    function setStatus(param:any){
      setcustomerdetailStatus(param);
    }
    return(
        <SafeAreaView style={{backgroundColor:'#F9F9FC',height:'100%'}}>
            <StatusBar backgroundColor={'#233972'} barStyle={'light-content'}/>
            <View style={{height:60,width:'100%',backgroundColor:'#233972',flexDirection:'row'}}>
             <TouchableOpacity onPress={()=>props.navigation.navigate('MainScreen')}>
                 <Image source={require('../images/Arrow.png')} style={{tintColor:'#FFFFFF',width:9,height:15,transform: [{ rotate: '180deg' }],marginLeft:20,marginTop:18}}/>
                 </TouchableOpacity> 
                <Text style={{marginTop:13,color:'#FFFFFF',marginLeft:16,width:44,height:36,fontWeight:"600",fontSize:16}}>Visits</Text>
            </View>
            <ScrollView style={{ flexGrow: 0 }} horizontal={true} showsHorizontalScrollIndicator={false} automaticallyAdjustContentInsets={false}>
            <TouchableOpacity style={CurrentScreen==1?styles.heading:styles.notheading} onPress={()=>{setCurrentScreen(1)}}>
                <Text style={CurrentScreen==1?{fontWeight:'500',fontSize:14,lineHeight:15,color:'#FFFFFF'}:{fontWeight:'500',fontSize:14,lineHeight:15,color:'#5CC7D7'}}>Upcoming</Text>
                <View style={CurrentScreen==1?{height:24,width:24,borderRadius:24,marginLeft:10,backgroundColor:'#FFFFFF',alignSelf:'center'}:{height:24,width:24,borderRadius:24,marginLeft:10,backgroundColor:'#5CC7D7',alignSelf:'center'}}>
                    <Text style={CurrentScreen==1?{alignSelf:'center',marginTop:4,color:'#5CC7D7',fontWeight:"500",fontSize:12,lineHeight:15}:{alignSelf:'center',marginTop:4,color:'#FFFFFF',fontWeight:"500",fontSize:12,lineHeight:15}}>16</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={CurrentScreen!=2?[styles.heading,styles.plannedheading]:[styles.heading,styles.secondheading]} onPress={()=>{setCurrentScreen(2)}}>
                <Text style={CurrentScreen!=2?{fontWeight:'500',fontSize:14,lineHeight:15,color:'#233972'}:{fontWeight:'500',fontSize:14,lineHeight:15,color:'#FFFFFF'}}>Planned</Text>
                <View style={CurrentScreen!=2?{height:24,width:24,borderRadius:24,marginLeft:10,backgroundColor:'#233972',alignSelf:'center'}:{height:24,width:24,borderRadius:24,marginLeft:10,backgroundColor:'#FFFFFF',alignSelf:'center'}}>
                    <Text style={CurrentScreen!=2?{alignSelf:'center',marginTop:4,color:'#FFFFFF',fontWeight:"500",fontSize:12,lineHeight:15}:{alignSelf:'center',marginTop:4,color:'#233972',fontWeight:"500",fontSize:12,lineHeight:15}}>16</Text>
                </View>

            </TouchableOpacity>

            <TouchableOpacity style={CurrentScreen!=3?[styles.heading,styles.executedheading]:[styles.heading,styles.notexecutedheading]} onPress={()=>{setCurrentScreen(3)}}>

                <Text style={CurrentScreen!=3?{fontWeight:'500',fontSize:14,lineHeight:15,color:'#14A223'}:{fontWeight:'500',fontSize:14,lineHeight:15,color:'#FFFFFF'}}>Executed</Text>
                <View style={CurrentScreen!=3?{height:24,width:24,borderRadius:24,marginLeft:10,backgroundColor:'#14A223',alignSelf:'center'}:{height:24,width:24,borderRadius:24,marginLeft:10,backgroundColor:'#FFFFFF',alignSelf:'center'}}>
                    <Text style={CurrentScreen!=3?{alignSelf:'center',marginTop:4,color:'#FFFFFF',fontWeight:"500",fontSize:12,lineHeight:15}:{alignSelf:'center',marginTop:4,color:'#14A223',fontWeight:"500",fontSize:12,lineHeight:15}}>16</Text>
                </View>
            </TouchableOpacity>


            </ScrollView>

            <Text style={{fontWeight:'400',fontSize:12,lineHeight:15,marginLeft:20,marginTop:16}}>Enter Customer Code or Name or Executive's Name</Text>
            <View style={{flexDirection:'row'}}>  
             <View style={styles.searchbar}>
                <TextInput
                placeholder="Enter text to search"
                placeholderTextColor={'#00000080'}
                
                style={styles.textinput}
                />
          <TouchableOpacity>
                <Image source={require('../images/search.png')} style={{marginLeft:101,marginTop:18}}/>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Image source={require('../images/filter.png')} style={{marginLeft:12,marginTop:8}}/>
            </TouchableOpacity>
            

            </View>
            
          { CurrentScreen==1 && customerdetailStatus==false && <FlatList data={Data} renderItem={renderItem}/> }
          { CurrentScreen==1 && customerdetailStatus==true && <CustomerDetails status={setStatus}/>}   
          { CurrentScreen==2 && <Planned/> }
          { CurrentScreen==3 &&  <Executed/> }
        



        
        </SafeAreaView>

    );
}

export default Visit;