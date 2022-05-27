import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Text, ScrollView, Pressable, Button } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import database from '@react-native-firebase/database';
import { firebase } from '@react-native-firebase/auth';


const Register = ({  navigation }) => {

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    setDate(date)
    hideDatePicker();
  };

  const[name,setName] = useState('')
  const[gender, setGender] = useState('male')
  const[mother,setMother] = useState('')
  const[father,setFather] = useState('')
  const[contact,setContact] = useState('')
  const[email,setEmail] = useState('')
  const[qualification,setQualification] = useState('')
  const[date,setDate] = useState('')
  const[address,setAddress] = useState('')

  const getData =() => {
    
    firebase.database().ref('register').on('value', function (snapshot){
        console.log(snapshot)
    })
  
  }
  const valuenull = () => {
    setName('')
    setMother('')
    setFather('')
    setQualification('')
    setDate('')
    setAddress('')
    setContact('')
    setEmail('')
  }
  const handleForm = () => {
    
      database().ref('/register').push().set({
      name:name,
      gender:gender,
      mother:mother,
      father:father,
      contact:contact,
      email:email,
      qualification:qualification,
      dob:date,
      address:address,
      status:0,
    }).then(() => {
        getData()
        console.log("data inserted")
        navigation.navigate('IsRegister')
        valuenull()

    }).catch((error) => {
      console.log(error)
    })
  }


  return (
    <>
      <ScrollView>
        <View style={style.conatiner}>

          <View style={style.formdiv}>
            <View style={style.form}>
              <View style={style.shadow}>
                <View style={style.inputdiv}>
                  <Text style={style.label}>Name</Text>
                  <TextInput style={style.input} placeholderTextColor="grey" value={name}  onChangeText={(text) => setName(text) } placeholder="Enter your name" />
                </View>
                <View style={style.inputdiv}>
                  <Text style={style.label}>Mother Name</Text>
                  <TextInput style={style.input} placeholderTextColor="grey" value={mother}  onChangeText={(text) => setMother(text) } placeholder="Enter your mother name" />
                </View>
                <View style={style.inputdiv}>
                  <Text style={style.label}>Father Name</Text>
                  <TextInput style={style.input} placeholderTextColor="grey" value={father}  onChangeText={(text) => setFather(text) } placeholder="Enter your father name" />
                </View>
                <View style={style.inputdiv}>
                  <Text style={style.label}>Contact</Text>
                  <TextInput style={style.input} placeholderTextColor="grey" value={contact} onChangeText={(text) => setContact(text) } placeholder="Enter your contact" keyboardType='numeric' />
                </View>
                <View style={style.inputdiv}>
                  <Text style={style.label}>Email</Text>
                  <TextInput style={style.input} placeholderTextColor="grey" value={email}  onChangeText={(text) => setEmail(text) } placeholder="Enter your email" />
                </View>
                <View style={style.inputdiv}>
                  <Text style={style.label}>Qualification</Text>
                  <TextInput style={style.input} placeholderTextColor="grey" value={qualification}  onChangeText={(text) => setQualification(text) } placeholder="Enter your qualification" />
                </View>
                <View style={style.inputdiv}>
                  <Text style={style.label}>Select Date of birth</Text>
                  <Button title="Show Date Picker" onPress={showDatePicker} />
                  <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    value={date}
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                  />
                </View>
                <View style={style.inputdiv}>
                  <Text style={style.label}>Select Gender</Text>
                  <View style={style.input} >
                    <Picker
                      style={{ color: 'grey', marginTop: -4, marginLeft: -15, fontSize: 1 }}
                      selectedValue={gender}
                      mode='dropdown'
                      dropdownIconColor="black"
                      onValueChange={(itemValue, itemIndex) =>
                        setGender(itemValue)
                      }>
                      <Picker.Item label="Male" value="male" />
                      <Picker.Item label="Female" value="female" />
                      <Picker.Item label="Other" value="other" />
                    </Picker>

                  </View>
                </View>

                <View style={style.inputdiv}>
                  <Text style={style.label} >Address</Text>
                  <TextInput multiline={true} placeholderTextColor="grey" value={address} onChangeText={(text) => setAddress(text) } numberOfLines={8} style={style.address} placeholder="Enter your address" />
                </View>
                <Pressable style={style.button} onPress={() => handleForm() }>
                  <Text style={style.btntext}>Apply for Admission</Text>
                </Pressable>
              </View>
            </View>
          </View>

        </View>
      </ScrollView>

    </>
  )
}
const style = StyleSheet.create({

  conatiner: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: 320,
    height: 45,
    borderColor: 'grey',
    backgroundColor: '#f6f6f6',
    borderRadius: 9,
    paddingLeft: 10,
    zIndex: 3,
    elevation: .5,
    marginTop: 5,
    color: 'black'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 4,
    width: 320,
    marginBottom: 30,
    elevation: 10,
    backgroundColor: 'black',
    marginTop: 5
  },
  btntext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

  address: {
    width: 320,
    borderColor: 'grey',
    backgroundColor: '#f6f6f6',
    borderRadius: 9,
    padding: 10,
    zIndex: 3,
    elevation: .5,
    marginTop: 5,
    textAlignVertical: 'top',
    color:'black'
  },

  inputdiv: {
    marginBottom: 10,
    marginTop: 3
  },
  label: {
    fontWeight: '700',
    fontSize: 14,
    color: '#393536'
  },
  text: {
    fontSize: 13,
    color: 'grey',
    fontWeight: '400',
    marginTop: 10,
    textAlign: 'right',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },

})

export default Register