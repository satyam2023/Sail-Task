import React, {  } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    StatusBar} from 'react-native';
//import { RootStackParamList } from '../../Views/Screens/Route';
import styles from './Style';

// type HomeProps = NativeStackScreenProps<RootStackParamList,'Home','SignUp'>;

const HomeScreen = (props:any) => {
    console.log('here are props:::::::', props)
    return (
        <View style={styles.container}>
        <StatusBar backgroundColor={'#FFF'} barStyle={'dark-content'} />
        
        <View style={styles.logocontainer}>
       
        <Image source={require('../images/Sail.png')}  style={styles.imgsail}/> 
        </View>
         <View style={styles.toptxtcontainer}>
            <Text style={styles.toptxt}>Track your sales meeting hassle free</Text>
         <Text style={styles.lowertxt}>Effortlessly organize and elevate your meetings</Text> 
         </View>
            <Image source={require('../images/Handshake.png')}  style={styles.imghand}/>
            <TouchableOpacity style={styles.btn} onPress={() => {props.navigation.navigate('SignUp')}}  >
                <Text style={styles.txt}>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signbtn}>
                <Text style={styles.txtofSign}>Sign In</Text>
            </TouchableOpacity >
            
        </View>

    );
}

export default HomeScreen;



