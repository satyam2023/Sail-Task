import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import styles from '../Style/Styles';


const CommonBox = () => {
    const [visible,setVisible]=useState<boolean>(false);
  return (
    <View>
    <View style={{width:353,height:72,backgroundColor:'#FFFFFF',flexDirection:'row',marginTop:16,marginLeft:19}}>
                <Image source={require('../../images/Notify.png')} style={styles.img}/>
                <View style={{width:248,marginLeft:16.5}}>
                <Text style={styles.companytext}>Visit Planned with Sahil Sharma</Text>
                <Text style={styles.customertext}>24 Apr</Text>
               
                </View>
                <TouchableOpacity onPress={()=>{setVisible(!visible)}}>
                <Image source={require('../../images/Arrow.png')} style={{
                  transform: [!visible?{ rotate: '90deg' }:{rotate: '270deg'}],marginLeft:0,marginTop:24,
                   width:24,height:24,tintColor:'#110F2480'
                }}/>
                </TouchableOpacity>
                
            </View> 

            {visible && 
           <View style={{marginLeft:20,backgroundColor:'#FFFFFF',width:353,paddingBottom:20}}>
             <View style={{flexDirection:'row'}}>
                <View style={{marginLeft:16}}>
                   <Text style={{fontWeight:"500",}}>
                      Customer Code
                   </Text>
                   <Text style={{fontWeight:"500",color:'#000000'}}>
                   1234-3444-334
                   </Text>
                </View>
                 <View style={{marginLeft:90}}>
                 <Text style={{fontWeight:"500",}}>
                      Visiting Executive
                   </Text>
                   <Text style={{fontWeight:"500",color:'#000000'}}>
                   Jai Kishor
                   </Text>
                    
                    </View>
             </View>
             <View style={{flexDirection:'row',marginTop:16}}>
                <View style={{marginLeft:16}}>
                   <Text style={{fontWeight:"500",}}>
                      Mode of conduct
                   </Text>
                   <Text style={{fontWeight:"500",color:'#000000'}}>
                   Online
                   </Text>
                </View>
                 <View style={{marginLeft:80}}>
                 <Text style={{fontWeight:"500",}}>
                      Remarks
                   </Text>
                   <Text style={{fontWeight:"500",color:'#000000'}}>
                   Meeting Successful
                   </Text>
                    
                    </View>
             </View>
             <View style={{flexDirection:'row',marginTop:16}}>
                <View style={{marginLeft:16}}>
                   <Text style={{fontWeight:"500",}}>
                      Reason
                   </Text>
                   <Text style={{fontWeight:"500",color:'#000000'}}>
                   Visited for Final Agreement
                   </Text>
                </View>
                 
             </View>


           </View>
            }
            
            </View>
  )
}

export default CommonBox;