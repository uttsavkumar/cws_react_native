import React from 'react'
import { View, Text, StyleSheet, Image,Pressable } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const SingleCourse = () => {
    return (
        <>
            <View style={style.container}>
                <ScrollView>
                <View  style={{ alignItems:'center',marginTop:-50 }}>
                    <Image
                        source={{ uri: "https://codewithsadiq.com/public/images/course/1639916450.jpg" }}
                        style={style.image}
                    />
                </View>
                <View style={style.border}></View>
                <View style={style.text}>
                    <Text style={style.heading}>Laravel Web Development with Php</Text>

                    <Text style={style.desctitle}>Description</Text>
                    <Text style={style.desc}>
                        Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things..
                    </Text>

                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: 20 }}>
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

                <Pressable style={style.button}>
                    <Text style={style.btntext}>Apply for Course</Text>
                </Pressable>
                </ScrollView>
            </View>
        </>
    )
}
const style = StyleSheet.create({
    border:{
        borderWidth:.3,
        borderColor:'grey'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        backgroundColor: 'white'
    },
    image: {
        width: 300,
        height: 300,

    },
    text: {
        backgroundColor: 'white',
        height: 400,
        padding: 20
    },
    heading: {
        fontSize: 17,
        fontWeight: '700',
        color:'black'
    },
    desctitle: {
        marginTop: 13,
        fontSize: 15,
        fontWeight: '700',
        color:'black'
    },
    desc: {
        marginTop: 3,
        fontSize: 13,
        fontWeight: '400',
        color: 'grey'
    },
    price: {
        marginTop: 15,
        marginLeft: 20,
        fontSize: 13,
        fontWeight: '400',
        color: 'grey'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        paddingHorizontal: 35,
        borderRadius: 4,
        width: 320,
        position:'absolute',
        marginVertical:590,
        backgroundColor: 'black',
        elevation:5,
        marginLeft:30
      },
      btntext: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
})

export default SingleCourse