import React, { useEffect, useRef, useState } from "react"
import { FlatList, Image, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CommonButton from "./CommomButton";
import Footer from "../MainFooter/Footer";
import styles from "./Style";
import {LocationData,DataOfPerson} from "./LocationData";
import { HandledEventPhase } from "react-native-windows";
const Enquiry:React.FC<{}>=(props:any)=>{
    const Data=[{text:"User Enquiry"},{text:"Issue Enquiry"},{text:"Nearby Customers"}];
    const [CurrentLocation,setCurrentLocation]=useState<String>("Select Location");
    const [locationStatus,setLocationStatus]=useState<boolean>(false);
    const [FocusStatus,setFocusStatus]=useState<boolean>(false);
    const [LocationFOcusStatus,setLocationFocusStatus]=useState<boolean>(false);
    const [SearchBtnStatus,setSearchBtnStatus]=useState<boolean>(false);
    const [searchresult,setsearchresult]=useState<boolean>(false);
    const [data,setdata]=useState( {
       name:'',
       phone:'',
       place:'',

      })
    const details={
        name:useRef('')
    }
    console.log("search button status::",SearchBtnStatus);
    console.log("name length",details.name.current.length);

    useEffect(()=>{
        console.log("run effect")
        if(CurrentLocation!="Select Location" && details.name.current.length!=0 )
        setSearchBtnStatus(true)
    },[CurrentLocation,FocusStatus])

   function renderItem(item:any){ 
    function handlenavigation(){
            
        if(item.item.text=="User Enquiry"){
           
            props.navigation.navigate('Enquiry')
        }
        else if(item.item.text=="Issue Enquiry"){
            props.navigation.navigate('IssueEnquiry')
        }
        else if(item.item.text=="Nearby Customers"){
            props.navigation.navigate('NearByCustomer');
        }
        
    } 
    return(
        <TouchableOpacity onPress={handlenavigation}> 
        <CommonButton text={item.item.text}/>
        </TouchableOpacity>);
   }

   function RenderItem(item:any){
    return(  
        <TouchableOpacity onPress={()=>{
            setCurrentLocation(item.item.location)
            setLocationStatus(false);
           setLocationFocusStatus(true);
        }}>
            <Text style={{marginLeft:16,borderBottomWidth:1,borderColor:'#E6E6E6'}}>{item.item.location}</Text> 
             </TouchableOpacity> 
    );
   }
  

   function SearchingData(){
         for(let i=0;i<DataOfPerson.length;i++){
            if(DataOfPerson[i].name==details.name.current){
                setdata({
                name:DataOfPerson[i].name,
                phone:DataOfPerson[i].phonenumber,
                place:DataOfPerson[i].location
                } )

                setsearchresult(true);
                break;
            }
         }
         
   }

   
    return(
        <SafeAreaView >
            <StatusBar backgroundColor={'#233972'} barStyle={'light-content'}/>
            <View style={{height:60,width:'100%',backgroundColor:'#233972',flexDirection:'row'}}>
             <TouchableOpacity style={{marginLeft:21,marginTop:18}} onPress={()=>props.navigation.navigate('MainScreen')}>
                 <Image source={require('../images/Arrow.png')} style={{tintColor:'#FFFFFF',width:9,height:15,transform: [{ rotate: '180deg' }],}}/>
                 </TouchableOpacity> 
                <Text style={{marginTop:13,color:'#FFFFFF',marginLeft:16,width:62,height:36,fontWeight:"600",fontSize:16}}>Enquiry</Text>
            </View>
            <FlatList data={Data} renderItem={renderItem} 
            horizontal={true} showsHorizontalScrollIndicator={false}
            style={{marginLeft:20}} />
           <View style={styles.TextInput}>
               { FocusStatus ?         
                <Text style={{color:'#110F2480',position:'absolute',top:9,left:27,fontWeight:'400',fontSize:12,height:15,lineHeight:12
        }}>
               Enter Name    </Text>
             :<></>}
                     <TextInput placeholder="Enter Name"
                     placeholderTextColor={!FocusStatus?'#110F2480':'#FFFFFF'}
                     style= { !FocusStatus?{marginLeft:16,color:'#110F24',fontWeight:"400",fontSize:14,lineHeight:15}:{marginLeft:24,color:'#110F24',fontWeight:"400",fontSize:14,lineHeight:15,position:'absolute',top:5}}
                     onFocus={()=>{setFocusStatus(true)}}
                     onChangeText={(text:string)=>{details.name.current=text;}} 
                     >

            </TextInput>
           </View>
           <View style={styles.location}>
           { LocationFOcusStatus ?         
                <Text style={{color:'#110F2480',position:'absolute',top:9,left:24,fontWeight:'400',fontSize:12,lineHeight:12,height:15
        }}>
               Select Location    </Text>
             :<></>}
            <Text style={CurrentLocation=="Select Location"?{width:106,height:18,marginLeft:16,fontWeight:'400',fontSize:14,lineHeight:17.5,marginTop:19}:{width:106,height:18,marginLeft:24,fontWeight:'400',color:'#110F24',fontSize:14,lineHeight:17.5,marginTop:24,}}>
                {CurrentLocation}
            </Text>
            
            <TouchableOpacity onPress={()=>{setLocationStatus(!locationStatus)}}>
            <Image source={require('../images/Arrow.png')} style={{tintColor:'#110F2480',transform: [{ rotate: '90deg' }] ,marginLeft:187,marginTop:16}}/>
            </TouchableOpacity> 
            </View>
            {locationStatus==true && <FlatList data={LocationData} renderItem={RenderItem}
             style={{marginHorizontal:20,backgroundColor:'#FFFFFF',marginTop:5,borderRadius:20}}/> }
           
           {!searchresult?<TouchableOpacity style={!SearchBtnStatus?styles.searchbtn:styles.searchbtns}  onPress={SearchingData}>
            <Text style={{width:106,color:'#110F2480',height:18,marginHorizontal:152,fontWeight:'400',fontSize:14,lineHeight:17.5,marginTop:19}}>
                Search
            </Text>
           </TouchableOpacity>:<View style={{height:92,width:353,borderRadius:10,backgroundColor:'#FFFFFF',flexDirection:'row',marginLeft:21,marginTop:24}}>
             
             <View style={{}}> 
                <Text style={{fontWeight:'500',fontSize:14,lineHeight:16,marginLeft:16,height:16,width:248,color:'#110F24',marginTop:16}}>
                  {data.name}
              </Text>
              <Text style={{fontWeight:'500',fontSize:14,lineHeight:14,marginLeft:16,height:14,width:248,color:'#110F2480',marginTop:8}}>
                  {data.place}
              </Text>
              <Text style={{fontWeight:'500',fontSize:14,lineHeight:14,marginLeft:16,height:14,width:248,color:'#110F2480',marginTop:8}}>
                  {data.phone}
              </Text>
              </View>
             
             <Image source={require('../images/Mobile.png')} style={{marginVertical:30,marginLeft:37}}/>

           </View>}
           
        </SafeAreaView>
    );

}

export default Enquiry;