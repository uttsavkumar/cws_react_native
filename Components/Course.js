import React from 'react'
import { View,StyleSheet,Image,Text,Pressable } from 'react-native'

const Course = ({navigation}) => {
  return (
    <>
      <View style={style.container}>
       <Pressable onPress={() => navigation.navigate('Single')} >
       <View style={style.carddiv}>
          <View style={{ display:'flex',flexDirection:'row-reverse',marginTop:20 }}>
          <View>
           <View style={{ marginTop:10,marginLeft:5,marginRight:10,overflow:'hidden' }}>
              <Text style={style.heading}>Python with Data Structure</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', marginTop: 25 }}>
                        <Text style={style.desctitle}>Course Fee</Text>
                        <Text style={style.price}>
                            Rs. 8500
                        </Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: -5 }}>
                        <Text style={style.desctitle}>Duration </Text>
                        <Text style={style.price}>
                            4 months
                        </Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: -5 }}>
                        <Text style={style.desctitle}>Instructor</Text>
                        <Text style={style.price}>
                            Syed Sadique Hussain
                        </Text>
                    </View>
           </View>
            <View style={style.imagediv}>
                <Image
                source={require('../images/c1.png')} style={style.image}
                />
            </View>
          </View>
        </View>
       </Pressable>
       <Pressable onPress={() => navigation.navigate('Single')} >
       <View style={style.carddiv}>
          <View style={{ display:'flex',flexDirection:'row-reverse',marginTop:20 }}>
          <View>
           <View style={{ marginTop:10,marginLeft:5,marginRight:10,overflow:'hidden' }}>
              <Text style={style.heading}>Python with Data Structure</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', marginTop: 25 }}>
                        <Text style={style.desctitle}>Course Fee</Text>
                        <Text style={style.price}>
                            Rs. 8500
                        </Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: -5 }}>
                        <Text style={style.desctitle}>Duration </Text>
                        <Text style={style.price}>
                            4 months
                        </Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: -5 }}>
                        <Text style={style.desctitle}>Instructor</Text>
                        <Text style={style.price}>
                            Syed Sadique Hussain
                        </Text>
                    </View>
           </View>
            <View style={style.imagediv}>
                <Image
                source={require('../images/c1.png')} style={style.image}
                />
            </View>
          </View>
        </View>
       </Pressable>
       <Pressable onPress={() => navigation.navigate('Single')} >
       <View style={style.carddiv}>
          <View style={{ display:'flex',flexDirection:'row-reverse',marginTop:20 }}>
          <View>
           <View style={{ marginTop:10,marginLeft:5,marginRight:10,overflow:'hidden' }}>
              <Text style={style.heading}>Python with Data Structure</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', marginTop: 25 }}>
                        <Text style={style.desctitle}>Course Fee</Text>
                        <Text style={style.price}>
                            Rs. 8500
                        </Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: -5 }}>
                        <Text style={style.desctitle}>Duration </Text>
                        <Text style={style.price}>
                            4 months
                        </Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: -5 }}>
                        <Text style={style.desctitle}>Instructor</Text>
                        <Text style={style.price}>
                            Syed Sadique Hussain
                        </Text>
                    </View>
           </View>
            <View style={style.imagediv}>
                <Image
                source={require('../images/c1.png')} style={style.image}
                />
            </View>
          </View>
        </View>
       </Pressable>
      </View>
    </>
  )
}
const style = StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    backgroundColor:'white',
    flex:1
  },
  carddiv:{
   width:320,
   height:190,
   marginTop:15,
   borderRadius:15,
   backgroundColor:'white',
   borderColor:'grey',
   elevation:2.5,
   
  },
  image:{
    height:130,
    width:120,
    alignSelf:'center',
   
  },
  heading: {
    fontSize: 15,
    fontWeight: '700',
    color:'black'
},
price: {
  marginTop: 12,
  marginLeft: 20,
  fontSize: 12,
  fontWeight: '400',
  color: 'grey'
},
desctitle: {
  marginTop: 10,
  fontSize: 12,
  fontWeight: '700'
},
})
export default Course