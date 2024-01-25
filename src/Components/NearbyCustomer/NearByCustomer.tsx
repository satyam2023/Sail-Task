import React from "react"
import { FlatList, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { Image } from "react-native";
import Data from "./Data";
import CommonButton from "./CommonButton";


const NearbyCustomer:React.FC<{}>=(props:any)=>{
    const Details = [{ text: "User Enquiry" }, { text: "Issue Enquiry" }, { text: "Nearby Customers" }];
    

                function renderitem(item:any){
                    return(
                        <View style={{height:70,width:353,borderRadius:10,backgroundColor:'#FFFFFF',marginTop:12,marginLeft:20,flexDirection:'row'}}>
                            <Image source={item.item.image} style={{marginVertical:22.3,marginLeft:22.3,}}/>
                            <View style={{marginLeft:24.67,marginTop:16}}>
                            <Text style={{width:80,fontWeight:'400',fontSize:14,lineHeight:14,color:'#110F24'}}>{item.item.name}</Text>
                            <Text  style={{width:248,fontWeight:'400',fontSize:12,lineHeight:16,color:'#110F2480'}}>{item.item.location}</Text>
                            </View>
                        </View>
                    )
                }

                function renderItem(item: any) {
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
                    return (<TouchableOpacity onPress={handlenavigation}>
                    <CommonButton text={item.item.text} />
                    </TouchableOpacity>);
                }
    return(
        <SafeAreaView>
            <StatusBar backgroundColor={'#233972'} barStyle={'light-content'} />
            <View style={{ height: 60, width: '100%', backgroundColor: '#233972', flexDirection: 'row' }}>
                <TouchableOpacity style={{ marginLeft: 21, marginTop: 18 }} onPress={() => props.navigation.navigate('MainScreen')}>
                    <Image source={require('../images/Arrow.png')} style={{ tintColor: '#FFFFFF', width: 9, height: 15, transform: [{ rotate: '180deg' }], }} />
                </TouchableOpacity>
                <Text style={{ marginTop: 13, color: '#FFFFFF', marginLeft: 16, width: 62, height: 36, fontWeight: "600", fontSize: 16 }}>Enquiry</Text>
            </View>
            <FlatList data={Details} renderItem={renderItem}
                horizontal={true} showsHorizontalScrollIndicator={false}
                style={{ marginLeft: 20 }} />
        <FlatList data={Data} renderItem={renderitem}  showsVerticalScrollIndicator={false} style={{marginBottom:85, marginTop:12}}/>
        </SafeAreaView>
    )


}

export default NearbyCustomer;