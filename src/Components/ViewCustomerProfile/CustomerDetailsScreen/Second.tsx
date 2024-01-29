import React from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import styles from './Style'
const Second:React.FC<{}> = () => {
  return (
    <SafeAreaView style={{height:465}}>
      <TouchableOpacity style={styles.btn}>
          <Text style={styles.Txt}>Customer Representative</Text>
          <TouchableOpacity>
          <Image source={require('../../images/Mobile.png')} style={{height:16,width:16,marginLeft:8,marginTop:21}}/>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image source={require('../../images/edit.png')} style={{height:16,width:16,marginLeft:52,marginTop:21}}/>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image source={require('../../images/Arrow.png')} style={{height:24,width:24,transform:[{rotate:'90deg'}],marginLeft:8,marginTop:16}}/>
          </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn,{backgroundColor:'#E9EBF1',marginTop:12}]}>
      
          <Text style={[styles.Txt,{width:220}]}> +  Add Customer Representative</Text>
      </TouchableOpacity>



    </SafeAreaView>
  )
}

export default Second