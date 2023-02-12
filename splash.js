import React from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const image = {
  uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/496ecb14589707.562865d064f9e.png',
};
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function MainPage({navigation}) {
  return (
    <>
      <View style={{marginTop:100,height:200,display:'flex',justifyContent:'center',alignContent:'center',alignItems:'center' }}>
        <Image
          source={{
            uri: 'https://www.iconsdb.com/icons/preview/green/shop-xxl.png',
          }}
          style={{width: 190, height: 190, marginHorizontal: 2}}></Image>
      </View>
      <View style={{display:'flex',justifyContent:'center',alignContent:'center',alignItems:'center' }}>

        <Text style={{color:"#61B846",fontSize:30,fontWeight:700,letterSpacing:4,marginTop:20}}>SAYLANI WELFARE</Text>
        <Text style={{color:"#024F9D",fontSize:20,fontWeight:400,marginTop:10}}>ONLINE SHOPPING STORE</Text>
      </View>


      <TouchableOpacity   
      onPress={() => navigation.navigate('login')}
      style={{borderRadius:50,backgroundColor:'#61B846',width:150,alignContent:'center',alignSelf:'center',marginTop:100,justifyContent:'center'}}>
        <Text style={{textAlign:'center',fontSize:20,fontWeight:700,paddingHorizontal:20,paddingVertical:20,color:'white',justifyContent:'center'}}>Get Started</Text>
        </TouchableOpacity>



    </>
  );
}
