import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { TouchableOpacityBase } from "react-native-windows";
import styles from "./style/style"; 
import InputText from "../InputText/InputText";
interface CardProps{
   setQr:Function
   searchData:string
}
const ProductCard:React.FC<CardProps>=forwardRef(({setQr,searchData}:CardProps,ref:any)=>{
   const [searchResult,setSearchResult]=useState<boolean>(false);

function handleSearch(){
 Data.filter((Data)=>{
  console.log("SearchDetails::",searchData)
  if(Data.heading==searchData){
    console.log("Becoming True")
    setSearchResult(true);
  }

 })
}

   useImperativeHandle(ref, () => ({
    handleClicked: handleSearch,
}));
    const Data=[{heading:'Pig Iron',
                  image:require('../images/StainlessSteel.png')},
                {heading:'Cold Rolled Product',
                  image:require('../images/StainlessSteel.png')},
                  {heading:'Pipes',
                  image:require('../images/StainlessSteel.png')},
                  {heading:'Semis',
                  image:require('../images/StainlessSteel.png')},
                  {heading:'Sail TMT Bars',
                  image:require('../images/StainlessSteel.png')},
                  {heading:'Galvanised Products',
                  image:require('../images/StainlessSteel.png')},
                  {heading:'Wirerods',
                  image:require('../images/StainlessSteel.png')},
                  {heading:'PM Plates',
                  image:require('../images/StainlessSteel.png')},
                  {heading:'Railway Products',
                  image:require('../images/StainlessSteel.png')},
                  {heading:'Wheels and Axles',
                  image:require('../images/StainlessSteel.png')},
                  {heading:'Hot Rolled Products',
                  image:require('../images/StainlessSteel.png')},
                  {heading:'Stainless Steel Products',
                  image:require('../images/StainlessSteel.png')},
                  {heading:'Electrical Steels',
                  image:require('../images/StainlessSteel.png')},
                  {heading:'SAIL SEQR TMT Bars',
                  image:require('../images/StainlessSteel.png')},
                ];

function renderitem(item:any)  {
    return(
        
          <View style={styles.card}>
          <Image source={require('../images/StainlessSteel.png')} style={{alignSelf:'center',marginTop:4}}/>
          <Text style={styles.txt}>{item.item.heading}</Text>
          <Text style={styles.dwd}>Download Catalogue</Text>
          <TouchableOpacity onPress={()=>{setQr(true)}}>
          <Text style={[styles.dwd,{marginTop:0}]}>Show QR Code</Text>
          </TouchableOpacity>
          </View>

      
    );
  }

    return(
        <>
       
       { !searchResult?<FlatList data={Data} renderItem={renderitem} style={{marginBottom:220}} numColumns={2}/>
          :
          <View style={styles.card}>
          <Image source={require('../images/StainlessSteel.png')} style={{alignSelf:'center',marginTop:4}}/>
          <Text style={styles.txt}>{searchData}</Text>
          <Text style={styles.dwd}>Download Catalogue</Text>
          <TouchableOpacity onPress={()=>{setQr(true)}}>
          <Text style={[styles.dwd,{marginTop:0}]}>Show QR Code</Text>
          </TouchableOpacity>
          </View>
          }
        </>
    );
});
export default ProductCard;