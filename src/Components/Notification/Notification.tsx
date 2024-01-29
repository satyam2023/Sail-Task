import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import MainHeader from '../MainScreenHeader/Mainheader';
import CommonBox from './CommonBox/CommonBox';

const Notification:React.FC<{}> = (props:any) => {
  return (
 <ScrollView style={{height:'100%',backgroundColor:'#F9F9FC'}}>
<MainHeader navigationProps={props} heading={"Notifications"}/>
<Text style={{fontWeight:'400',fontSize:12,lineHeight:16,color:'#110F24',marginTop:32,marginLeft:20}}>Today</Text>
<CommonBox/>
<Text style={{fontWeight:'400',fontSize:12,lineHeight:16,color:'#110F24',marginTop:24,marginLeft:20}}>Yesterday</Text>
<CommonBox/>
<CommonBox/>
<CommonBox/>
<CommonBox/>
<CommonBox/>
 </ScrollView>
  )
}

export default Notification;