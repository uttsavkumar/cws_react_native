import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { Button, StyleSheet, View, Text, Pressable } from 'react-native'
import Achievement from './Achievement'
import Course from './Course'
import Home from './Home'
// import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

const Main = () => {
  
  const navigation = useNavigation()
  //Avatar fn
  const Avatar = () => {
    return (
      <>
        <Pressable onPress={() => navigation.navigate('Profile')}>
          <View style={style.avatar}>
            <Text style={{ marginRight: 10,color:'black' }}>Account</Text>
          </View>
        </Pressable>
      </>
    )
  }
  // Drawer creation

  const Drawer = createDrawerNavigator()
  return (
    <>
      <Drawer.Navigator>
        <Drawer.Screen name='Home' component={Home} options={{
          headerRight: () => (
            <Avatar />
          )
        }} />
        <Drawer.Screen name='Course' component={Course} options={{
          headerRight: () => (
            <Avatar />
          )
        }} />
        <Drawer.Screen name='Achievement' component={Achievement} options={{
          headerRight: () => (
            <Avatar />
          )
        }} />
      </Drawer.Navigator>
    </>
  )
}
const style = StyleSheet.create({
  // avatar: {
  //   width: 40,
  //   height: 40,
  //   borderRadius: 20,
  //   marginRight: 15,
  //   alignItems:'center',
  //   borderWidth:.5,
  //   borderColor:'black'

  // }
})

export default Main