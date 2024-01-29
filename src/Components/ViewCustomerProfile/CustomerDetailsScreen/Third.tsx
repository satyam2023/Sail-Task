import React, { useState } from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import styles from './Style';
import { useDispatch } from 'react-redux';
import { setCompetitorButtonStatus } from '../../../Redux/Slice2';

interface ThirdProps{
  
}
const Third:React.FC<ThirdProps> = ({}:ThirdProps) => {
  // const [addCompetitorStatus,setAddCompetitorStatus]=useState<boolean>(false);
  // console.log("Competitor Status::",addCompetitorStatus);
  const dispatch=useDispatch();
  function handleAddCompetitor(){
    dispatch(setCompetitorButtonStatus(true))
  //  setAddCompetitorStatus(true);
  }
  return (
    <>
   <View style={{height:465}}>
      <TouchableOpacity style={styles.btn}>
          <Text style={[styles.Txt,{width:90}]}>Competitor 1</Text>
          <TouchableOpacity >
          <Image source={require('../../images/edit.png')} style={{height:16,width:16,marginLeft:176,marginTop:21}}/>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image source={require('../../images/Arrow.png')} style={{height:24,width:24,transform:[{rotate:'90deg'}],marginLeft:8,marginTop:16}}/>
          </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn,{backgroundColor:'#E9EBF1',marginTop:12}]} onPress={()=>{handleAddCompetitor()}}>
      
      <Text style={[styles.Txt,{width:220}]}> +  Add Competitor</Text>
      </TouchableOpacity>

    </View>

    </>
  )
}

export default Third;