import React, { useRef, useState } from "react";
import { FlatList, Image, ScrollView, TouchableOpacity, View, useWindowDimensions } from "react-native";
import HeaderMain from "../HeaderForMainScreen/HeaderMain";
import ProductCard from "./ProductCard";
import styles from "./style/style";
import InputText from "../InputText/InputText";
import Footer from "../MainFooter/Footer";
import BottomDrawer from "../MainScreen/BottomDrawer/BottomDrawer";


const ProductCatalog:React.FC<{}>=(props:any)=>{
    
                  
    const details={
        searchDetails:useRef('')
    }

   
    const BottomDrawerRef= useRef<any>();
    function PlusClicked() {
        console.log("Bottom PLus Clicked Succesful:::")
        console.log("abiut ref",BottomDrawerRef.current)
        BottomDrawerRef.current.handleClicked();
       
    }
    

    const numColumns = 3;
    return(
       <>
       <View >
        <HeaderMain navigationProps={props} topheading="Product Catalogue"/>
        
        <View style={ styles.inputbox } >
                <View style={{ backgroundColor: '#E6E6E6', width: 0 }}>
                   <TouchableOpacity>
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
                    maxLength={15}
                />
            </View>
            
         <ProductCard/>
         
            
       </View>
       <Footer  color="#E6E6E6" navigationprops={props} PlusClicked={PlusClicked}/>
      <BottomDrawer Navigationprops={props} ref={BottomDrawerRef}/>
      
       </>
      
    );
}
export default ProductCatalog;