import React, { useRef, useState } from "react";
import { FlatList, Image, SafeAreaView, ScrollView, TouchableOpacity, View, useWindowDimensions } from "react-native";
import HeaderMain from "../HeaderForMainScreen/HeaderMain";
import ProductCard from "./ProductCard";
import styles from "./style/style";
import InputText from "../InputText/InputText";
import QR from "./QR";
import BottomBar from "../Visit/PlannedVisit/BottomBarPlanned";
import Footer from "./Footer/Footer";


const ProductCatalog:React.FC<{}>=(props:any)=>{
    const [qrStatus,setQrStatus]=useState<boolean>(false);
              
    function setQr(param:boolean){
        setQrStatus(param);
    }

    const details={
        searchDetails:useRef('')
    }

    console.log("SearchDetails::",details.searchDetails.current);

   
    const ProductRef= useRef<any>();
    function SearchClicked() {
        ProductRef.current.handleClicked();
       
    }

    return(
       <SafeAreaView style={{backgroundColor:'#F9F9FC',height:'100%'}}>
       <View >
        <HeaderMain navigationProps={props} topheading="Product Catalogue"/>
        { !qrStatus?
        <>
        <View style={ styles.inputbox } >
                <View style={{ backgroundColor: '#E6E6E6', width: 0 }}>
                   <TouchableOpacity onPress={SearchClicked}>
                    <Image source={require('../images/search.png')} style={styles.img} />
                    </TouchableOpacity>
                    </View>

                   
                 <InputText
                    placeholder="Search"
                    ChangeText={(text: any) => {
                        details.searchDetails.current=text;
                       
                    }}
                    keyboardType="numeric"
                    secureText={false}
                    maxLength={20}
                />
            </View>
            
         <ProductCard setQr={setQr} searchData={"Pipes"} ref={ProductRef}/>
         </>:
         <QR/>
         }
     
         <Footer color={'#F9F9FC'} navigationprops={props}/>
       
         
            
       </View>
     
       </SafeAreaView>
      
    );
}
export default ProductCatalog;