import React from 'react'
import LottieView from 'lottie-react-native';
import { View,Text } from 'react-native';
import {LogBox} from "react-native";

LogBox.ignoreLogs([
"exported from 'deprecated-react-native-prop-types'.",
])
const IsRegister = () => {
  return (
    <>
    <View style={{ alignItems:'center' }}>
        <Text style={{ fontSize:20,position:'absolute',top:200,fontWeight:'700',color:'black' }}>Registered Successfull!!!</Text>
    </View>
    <LottieView source={require('../animation/animation1.json')} autoPlay loop />
    <View style={{ alignItems:'center' }}>
        <Text style={{ fontSize:15,position:'absolute',top:500,fontWeight:'700',color:'grey' }}>Your request is under Review!!!</Text>
    </View>
    </>
  )
}

export default IsRegister