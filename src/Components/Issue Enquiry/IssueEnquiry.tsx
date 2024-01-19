import React, { useEffect, useRef, useState } from "react"
import { FlatList, Image, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CommonButton from "./CommonButton";
import styles from "./Styles";
import { LocationData, DataOfIssue } from "./IssueData";
const IssueEnquiry: React.FC<{}> = (props: any) => {
    const Data = [{ text: "User Enquiry" }, { text: "Issue Enquiry" }, { text: "Nearby Customers" }];
    const [CurrentLocation, setCurrentLocation] = useState<String>("Select Branch Location");
    const [locationStatus, setLocationStatus] = useState<boolean>(false);
    const [FocusStatus, setFocusStatus] = useState<boolean>(false);
    const [LocationFOcusStatus, setLocationFocusStatus] = useState<boolean>(false);
    const [SearchBtnStatus, setSearchBtnStatus] = useState<boolean>(false);
    const [searchresult, setsearchresult] = useState<boolean>(false);
    const [data, setdata] = useState({
        issue: '',
        pending: '',
        date: '',

    })
    const details = {
        name: useRef('')
    }

    useEffect(() => {
        console.log("run effect")
        if (CurrentLocation != "Select Location" && details.name.current.length != 0)
            setSearchBtnStatus(true)
    }, [CurrentLocation, FocusStatus])

    function renderItem(item: any) {
        return (<CommonButton text={item.item.text} />);
    }

    function RenderItem(item: any) {
        return (
            <TouchableOpacity onPress={() => {
                setCurrentLocation(item.item.location)
                setLocationStatus(false);
                setLocationFocusStatus(true);
            }}>
                <Text style={{ marginLeft: 16, borderBottomWidth: 1, borderColor: '#E6E6E6' }}>{item.item.location}</Text>
            </TouchableOpacity>
        );
    }


    function SearchingData() {
        for (let i = 0; i < DataOfIssue.length; i++) {
            if (DataOfIssue[i].name == details.name.current || DataOfIssue[i].phonenumber == details.name.current) {
                setdata({
                    issue: DataOfIssue[i].issue,
                    date: DataOfIssue[i].issuedate,
                    pending: DataOfIssue[i].pendingwith,
                })

                setsearchresult(true);
                break;
            }
        }

    }


    return (
        <SafeAreaView >
            <StatusBar backgroundColor={'#233972'} barStyle={'light-content'} />
            <View style={{ height: 60, width: '100%', backgroundColor: '#233972', flexDirection: 'row' }}>
                <TouchableOpacity style={{ marginLeft: 21, marginTop: 18 }} onPress={() => props.navigation.navigate('MainScreen')}>
                    <Image source={require('../images/Arrow.png')} style={{ tintColor: '#FFFFFF', width: 9, height: 15, transform: [{ rotate: '180deg' }], }} />
                </TouchableOpacity>
                <Text style={{ marginTop: 13, color: '#FFFFFF', marginLeft: 16, width: 62, height: 36, fontWeight: "600", fontSize: 16 }}>Enquiry</Text>
            </View>
            <FlatList data={Data} renderItem={renderItem}
                horizontal={true} showsHorizontalScrollIndicator={false}
                style={{ marginLeft: 20 }} />

                <View style={{flexDirection:'row',marginTop:36,marginLeft:20,}}>
                    <TouchableOpacity style={{height:14}}>
                          <Text style={{fontWeight:"500",fontSize:14,lineHeight:14,color:'#233972',marginLeft:46}}>
                          Open Issues
                          </Text>
                          
                    </TouchableOpacity>
                    <TouchableOpacity style={{height:14,width:112,marginLeft:77}} onPress={()=>props.navigation.navigate('MainScreen')}>
                        <Text style={{fontWeight:"500",fontSize:14,lineHeight:14,color:'#00000080'}} >
                        Resolved Issues
                          </Text>
                    </TouchableOpacity>
                </View>
                <View style={{height:3,width:177,backgroundColor:'#233972',marginTop:16,marginLeft:20}}/>
            <View style={styles.TextInput}>
                {FocusStatus ?
                    <Text style={{
                        color: '#110F2480', position: 'absolute', top: 9, left: 27, fontWeight: '400', fontSize: 12, height: 15, lineHeight: 12
                    }}>
                        Enter Customer Code or Name   </Text>
                    : <></>}
                <TextInput placeholder="Enter Customer Code or Name"
                    placeholderTextColor={!FocusStatus ? '#110F2480' : '#FFFFFF'}
                    style={!FocusStatus ? { marginLeft: 16, color: '#110F24', fontWeight: "400", fontSize: 14, lineHeight: 15 } : { marginLeft: 24, color: '#110F24', fontWeight: "400", fontSize: 14, lineHeight: 15, position: 'absolute', top: 5 }}
                    onFocus={() => { setFocusStatus(true) }}
                    onChangeText={(text: string) => { details.name.current = text; }}
                    cursorColor={'transparent'}
                >

                </TextInput>
            </View>
            <View style={styles.location}>
                {LocationFOcusStatus ?
                    <Text style={{
                        color: '#110F2480', position: 'absolute', top: 9, left: 24, fontWeight: '400', fontSize: 12, lineHeight: 12, height: 15
                    }}>
                        Select Branch Location   </Text>
                    : <></>}
                <Text style={CurrentLocation == "Select Branch Location" ? { width: 160, height: 18, marginLeft: 16, fontWeight: '400', fontSize: 14, lineHeight: 17.5, marginTop: 19 } : { width: 160, height: 18, marginLeft: 24, fontWeight: '400', color: '#110F24', fontSize: 14, lineHeight: 17.5, marginTop: 24, }}>
                    {CurrentLocation}
                </Text>

                <TouchableOpacity onPress={() => { setLocationStatus(!locationStatus) }}>
                    <Image source={require('../images/Arrow.png')} style={{ tintColor: '#110F2480', transform: [{ rotate: '90deg' }], marginLeft: 133, marginTop: 16 }} />
                </TouchableOpacity>
            </View>
            {locationStatus == true && <FlatList data={LocationData} renderItem={RenderItem}
                style={{ marginHorizontal: 20, backgroundColor: '#FFFFFF', marginTop: 5, borderRadius: 20 }} />}

            {!searchresult ? <TouchableOpacity style={!SearchBtnStatus ? styles.searchbtn : styles.searchbtns} onPress={SearchingData}>
                <Text style={!SearchBtnStatus ?{ width: 106, color: '#110F2480', height: 18, marginHorizontal: 152, fontWeight: '500', fontSize: 14, lineHeight: 17.5, marginTop: 19 }:{ width: 106, color: '#233972', height: 18, marginHorizontal: 152, fontWeight: '500', fontSize: 14, lineHeight: 17.5, marginTop: 19 }}>
                    Search
                </Text>
            </TouchableOpacity> : <View style={{ height: 123, width: 353, borderRadius: 10, backgroundColor: '#FFFFFF', marginLeft: 20, marginTop: 24 }}>
                  
                  <View style={{marginTop:16}}>
                <Text style={{width:71,height:14,marginLeft:16,color:'#666666',fontWeight:'400',fontSize:14,lineHeight:14}}>
                    Issue Type
                </Text>
                    <Text style={{ fontWeight: '500', fontSize: 14, lineHeight: 16, marginLeft: 16, height: 16, width: 248, color: '#110F24', marginTop: 8}}>
                       {data.issue} 
                    </Text>
                    </View>

                    <View>
                        
                    </View>
                    
                    
                
                

              

            </View>}

        </SafeAreaView>
    );

}

export default IssueEnquiry;