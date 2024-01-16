import React from "react";
import { StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import styles from "./Styles";
const Visit:React.FC<{}>=(props:any)=>{
    return(
        <SafeAreaView style={{backgroundColor:'#F9F9FC',height:'100%'}}>
            <StatusBar backgroundColor={'#233972'} barStyle={'light-content'}/>
            <View style={{height:60,width:'100%',backgroundColor:'#233972',flexDirection:'row'}}>
             <TouchableOpacity onPress={()=>props.navigation.navigate('MainScreen')}>
                 <Image source={require('../images/Arrow.png')} style={{tintColor:'#FFFFFF',width:9,height:15,transform: [{ rotate: '180deg' }],marginLeft:20,marginTop:18}}/>
                 </TouchableOpacity> 
                <Text style={{marginTop:13,color:'#FFFFFF',marginLeft:16,width:44,height:36,fontWeight:"600",fontSize:16}}>Visits</Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={styles.heading}>
                <Text style={{fontWeight:'500',fontSize:14,lineHeight:15,color:'#FFFFFF'}}>Upcoming</Text>
                <View style={{height:24,width:24,borderRadius:24,marginLeft:10,backgroundColor:'#FFFFFF',alignSelf:'center'}}>
                    <Text style={{alignSelf:'center',marginTop:4,color:'#5CC7D7',fontWeight:"500",fontSize:12,lineHeight:15}}>16</Text>
                </View>

            </TouchableOpacity>
            <TouchableOpacity style={[styles.heading,styles.plannedheading]}>
                <Text style={{fontWeight:'500',fontSize:14,lineHeight:15,color:'#233972'}}>Planned</Text>
                <View style={{height:24,width:24,borderRadius:24,marginLeft:10,backgroundColor:'#FFFFFF',alignSelf:'center'}}>
                    <Text style={{alignSelf:'center',marginTop:4,color:'#233972',fontWeight:"500",fontSize:12,lineHeight:15}}>16</Text>
                </View>

            </TouchableOpacity>
            <TouchableOpacity style={[styles.heading,styles.executedheading]}>
                <Text style={{fontWeight:'500',fontSize:14,lineHeight:15,color:'#14A223'}}>Executed</Text>
               

            </TouchableOpacity>
            </View>

            <Text style={{fontWeight:'400',fontSize:12,lineHeight:15,marginLeft:20,marginTop:16}}>Enter Customer Code or Name or Executive's Name</Text>
            <View style={{flexDirection:'row'}}>  
             <View style={styles.searchbar}>
                <TextInput
                placeholder="Enter text to search"
                placeholderTextColor={'#00000080'}
                style={styles.textinput}
                />
          <TouchableOpacity>
                <Image source={require('../images/search.png')} style={{marginLeft:121}}/>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Image source={require('../images/filter.png')} style={{marginLeft:12,marginTop:8}}/>
            </TouchableOpacity>
            

            </View>


        
        </SafeAreaView>

    );
}

export default Visit;