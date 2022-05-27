import React from 'react'
import { View, StyleSheet, Text, Pressable, TextInput, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { useState } from 'react';
import auth, { firebase } from '@react-native-firebase/auth';


const Login = ({ navigation }) => {
  const[otp, setOtp] = useState(false)
  const[phone,setPhone] =useState('');
  const[otpvalue,setOtpValue] = useState('')
  const[confirm,setConfirm] = useState(null)
  const[user,setUser] = useState(false);

  async function signInWithPhoneNumber(phoneNumber) {
    const no = '+91'+phoneNumber
    const confirmation = await auth().signInWithPhoneNumber(no);
    setConfirm(confirmation);
  }
  async function confirmCode() {
    try {
      await confirm.confirm(otpvalue).then(() => (
        firebase.auth().onAuthStateChanged((user) => {
          if(user){
             console.log(user)
             setUser(true)
             navigation.navigate('Main')   
          }
        })
      ))

    } catch (error) {
      console.log('Invalid code.');
    }
  }

  const handleotp = () => {
    
    if(otp === false){
      signInWithPhoneNumber(phone)
      setOtp(true)
    }
    else{
      confirmCode()
    }
  
  }
  return (
    <>
    <ScrollView>
      <View style={style.container}>
        <View style={style.imagediv}>
          <Image source={require('../images/login.png')} style={style.image} />
        </View>
        <View style={style.border}></View>

          <View style={{ height:355 }}>
            <View style={style.textdiv}>
              <Text style={style.heading}>Hey,</Text>
              <Text style={style.sub}>Login Now.</Text>

            </View>
            <View style={style.inputmaindiv}>
              <View style={style.inputdiv}>
                <TextInput style={style.input} placeholderTextColor={'grey'} placeholder="Enter your verified phone no." keyboardType='numeric' onChangeText={(text) => setPhone(text)} />
              </View>
              {otp &&
                <View style={style.inputdiv}>
                  <TextInput style={style.input} placeholderTextColor={'grey'} placeholder="Enter OTP" keyboardType='numeric' onChangeText={(text) => setOtpValue(text)}/>
                </View>
              }
            </View>

            <View style={style.buttondiv}>
              <Pressable style={style.button} onPress={() => handleotp()}>
                <Text style={style.btntext}>{otp === false ? "Request OTP" : "Login"}</Text>
              </Pressable>
            </View>

            <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 5, marginTop: 18 }}>
              <Text style={style.text}>if you are new / </Text>
              <Pressable onPress={() => navigation.navigate('Register')}>
                <Text style={{ fontWeight: '500', fontSize: 13, color: 'black', marginLeft: 4, textDecorationLine: 'underline', }}>Register Now !</Text>
              </Pressable>
            </View>
          </View>
        

      </View>
      </ScrollView>
    </>
  )
}

const style = StyleSheet.create({
  image: {
    height: 185,
    width: 320
  },
  imagediv: {
    alignItems: 'center',
  },
  border: {
    borderWidth: .5,
    marginTop: 50,
    width: 420,
    padding: 0,
    marginLeft: -40,
    borderColor: '#909090'
  },
  container: {
    height:'auto',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 35
  },
  textdiv: {
    marginTop: 15
  },
  heading: {
    fontSize: 21,
    fontWeight: '700',
    color:'black'
  },
  sub: {
    fontSize: 21,
    fontWeight: '700',
    marginTop: -3,
    color:'black'
  },
  text: {
    fontSize: 12,
    color: 'grey',
    fontWeight: '400',
  },
  text1: {
    fontSize: 12,
    color: 'grey',
    fontWeight: '400',
    marginTop: 0,

  },
  input: {
    width: 290,
    height: 52,
    borderColor: 'grey',
    backgroundColor: '#f6f6f6',
    borderRadius: 9,
    padding: 15,
    zIndex: 3,
    elevation: 3,
    color:'black'

  },
  
  inputmaindiv: {
    marginTop: 30
  },
  inputdiv: {
    paddingBottom: 9,
    justifyContent: 'center'
  },

  buttondiv: {
    marginTop: 2
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 4,
    width: 290,
    backgroundColor: 'black',
  },
  btntext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },



})
export default Login