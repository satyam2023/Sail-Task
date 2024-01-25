import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Header from "./Header";
import Styles from "./Style";
import InputText from "../InputText/InputText";
import RepresentativeDetails from "./RepresentativeDetails";
interface RepresenatativeProps{
    NavigationProps:any
    SetFooter:Function
    ref:any
    
}
const CustomerRepresentative:React.FC<RepresenatativeProps> = forwardRef(({ NavigationProps,SetFooter }: RepresenatativeProps, ref) => {
    const [customerRepresentative,setCustomerRepresentative]=useState<boolean>(true);
    const [representativeAddStatus,setrepresentativeAddStatus]=useState<boolean>(false);

function handleClick(){
   setCustomerRepresentative(true);
   setrepresentativeAddStatus(true);
} 

    useImperativeHandle(ref, () => ({
        Clicked:handleClick
    }));

    return(<SafeAreaView>
       {customerRepresentative?<View>
         <Header heading="Add Customer Representative"  navigationProps={NavigationProps} CurrentScreen={2} topheading="Create Customer Profile"/>
      { !representativeAddStatus?<TouchableOpacity style={Styles.addRepresentativeBtn} onPress={()=>{setCustomerRepresentative(false); SetFooter("Representative")}}>
          <Image style={[{marginLeft:24,marginTop:21}]} source={require('../images/+.png')}/>
        <Text style={Styles.addBtnText}>Add Customer Representative
        </Text>
        </TouchableOpacity>:
        <View >
            <TouchableOpacity style={[Styles.addRepresentativeBtn,{backgroundColor:'#F9F9FC',borderStyle:'dashed',borderColor:'#233972',borderWidth:1}]} onPress={()=>{setCustomerRepresentative(false); SetFooter("Representative")}}>
         
        <Text style={[Styles.addBtnText,{marginLeft:24,width:189}]}>Customer Representative 1
        </Text>
        <Image style={[{marginLeft:100,marginTop:21,}]} source={require('../images/edit.png')}/>
        </TouchableOpacity>

<TouchableOpacity style={[Styles.addRepresentativeBtn,{backgroundColor:'#F9F9FC'}]} onPress={()=>{setCustomerRepresentative(false); SetFooter("Representative")}}>
          <Image style={[{marginLeft:24,marginTop:21,}]} source={require('../images/+.png')}/>
        <Text style={Styles.addBtnText}> Add Customer Representative
        </Text>
        </TouchableOpacity>

            </View>
        
        }
        </View>:
        <RepresentativeDetails NavigationProps={NavigationProps} SetFooter={SetFooter}/>
        }
    </SafeAreaView>);
})
export default CustomerRepresentative