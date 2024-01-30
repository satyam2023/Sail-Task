import React, { useState } from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import ProfileHeader from '../CustomerComponents/ProfileHeader'
import ProfileFooter from '../CustomerComponents/ProfileFooter'
import First from './First'
import Second from './Second'
import Third from './Third'
import LastScreen from './LastScreen'
import MainHeader from '../../MainScreenHeader/Mainheader'
import AddCompetitor from './CompetitorDetails/AddCompetitor'
import { useSelector } from 'react-redux'
import RepresentativeDetails from './RepresentativeDetails/RepresentativeDetails'
import RepresentativeFooter from './RepresentativeDetails/RepresentativeFooter'
interface MainScreenCustomerProps{
  props:any
}

const MainScreenCustomer:React.FC<MainScreenCustomerProps> = ({props}:MainScreenCustomerProps) => {

    const [CurrentScreen,setCurrentScreen]=useState<number>(1);
   const [Competitor,setCompetitorStatus]=useState<boolean>(false);
   const [Reprsentative,setRepresentative]=useState<boolean>(false);
    function CompetitorScreen(param:boolean){
      setCompetitorStatus(param);
    }

    function RepresentativeScreen(param:boolean){
      setRepresentative(param);

    }
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
        {CurrentScreen==2 && <Second  RepresentativeScreen={RepresentativeScreen}/>}
        {CurrentScreen==3 && <Third CompetitorScreen={CompetitorScreen}/>}
        </ScrollView>
    <ProfileFooter CurrentScreen={CurrentScreen} setScreen={setScreen}/>
</View>:<LastScreen navigationProps={props}/>}
</>:<><MainHeader navigationProps={props} heading={"View Customer Profile"}/>
 {Competitor&&<AddCompetitor />}
 {Reprsentative && <>
 <RepresentativeDetails />
 <RepresentativeFooter RepresentativeScreen={RepresentativeScreen}/>
 </>}
 
 </>
}
</>  
  )
}

export default MainScreenCustomer;