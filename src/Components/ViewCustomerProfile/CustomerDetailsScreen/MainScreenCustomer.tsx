import React, { useState } from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import ProfileHeader from '../CustomerComponents/ProfileHeader'
import ProfileFooter from '../CustomerComponents/ProfileFooter'
import First from './First'
import Second from './Second'
import Third from './Third'
import LastScreen from './LastScreen'
import MainHeader from '../../MainScreenHeader/Mainheader'
import AddCompetitor from './CompetitorDetails/AddCompetitor'
import { useSelector } from 'react-redux'
interface MainScreenCustomerProps{
  props:any
}

const MainScreenCustomer:React.FC<MainScreenCustomerProps> = ({props}:MainScreenCustomerProps) => {

    const [CurrentScreen,setCurrentScreen]=useState<number>(1);
   // const [competitor,setCompetitorStatus]=useState<boolean>(false);
    function setScreen(param:number){
      setCurrentScreen(param);
    }

   const competitor=useSelector((state:any)=>state.button.CompetitorButtonStatus);


  return (
  
  <>
  { !competitor?<>{ (CurrentScreen!=4)?
  <View style={{backgroundColor:'#F9F9FC'}}>
    <ProfileHeader navigationProps={props} CurrentScreen={CurrentScreen} />
    <ScrollView style={ CurrentScreen==1?{top:258,width:'100%',marginBottom:250}:{top:180,width:'100%',marginBottom:250}}>
        {CurrentScreen == 1 && <First/>}
        {CurrentScreen==2 && <Second />}
        {CurrentScreen==3 && <Third />}
        </ScrollView>
    <ProfileFooter CurrentScreen={CurrentScreen} setScreen={setScreen}/>
</View>:<LastScreen navigationProps={props}/>}
</>:<><MainHeader navigationProps={props} heading={"View Customer Profile"}/>
 <AddCompetitor /></>
}
</>  
  )
}

export default MainScreenCustomer;