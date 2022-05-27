import { useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View, StyleSheet, Image, Pressable } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import IsRegister from './IsRegister'
import Login from './Login'
import Main from './Main'
import Register from './Register'
import SingleCourse from './SingleCourse'
import YourProfile from './YourProfile'

const LandingContent = () => {
    const navigation = useNavigation();

    return (
        <>
            <View style={style.container}>
                <ScrollView horizontal>
                    <View style={style.content}>
                        <View style={style.imagediv}>
                            <Image source={require('../images/l1.png')} style={style.image} resizeMode="contain" />
                        </View>
                        <View style={style.textdiv}>
                            <Text style={style.heading}>Communicate with other's</Text>
                            <Text style={style.sub}>Friendly work enviroment </Text>
                            <Text style={style.subsub}>With Experience Developer's</Text>
                        </View>
                    </View>
                    <View style={style.content}>
                        <View style={style.imagediv}>
                            <Image source={require('../images/l2.png')} style={style.image} />
                        </View>
                        <View style={style.textdiv}>
                            <Text style={style.heading}>Learn Computer's Basic</Text>
                            <Text style={style.sub}>Learn how computer</Text>
                            <Text style={style.subsub}>work at Beginner's level</Text>
                        </View>
                    </View>
                    <View style={style.content}>
                        <View style={style.imagediv}>
                            <Image source={require('../images/l3.png')} style={{ width: 200, height: 250 }} />
                        </View>
                        <View style={style.textdiv}>
                            <Text style={style.heading}>Build your Logic</Text>
                            <Text style={style.sub}>Friendly work enviroment </Text>
                            <Text style={style.subsub}>With Experience Developer's</Text>
                        </View>
                    </View>
                </ScrollView>

                <View style={style.footer}>
                    <View style={style.buttondiv}>
                        <Pressable style={style.button} onPress={() => navigation.navigate('Register')}>
                            <Text style={style.btntext}>Register</Text>
                        </Pressable>
                        <Pressable style={style.button} onPress={() => navigation.navigate('Login')}>
                            <Text style={style.btntext}>Sign In</Text>
                        </Pressable>

                    </View>
                </View>
            </View>
        </>
    )
}
const Landing = () => {
    // Stack Creation
    const Stack = createStackNavigator()

    return (
        <>
            <Stack.Navigator >
                <Stack.Screen name='Landing' options={{ headerShown: false }} component={LandingContent} />
                <Stack.Screen name='Register' component={Register} />
                <Stack.Screen name='IsRegister' component={IsRegister} options={{ headerShown: false }} />
                <Stack.Screen name='Login' component={Login} />

                <Stack.Screen name='Main' component={Main} options={{ headerShown: false }} />
                <Stack.Screen name='Single' component={SingleCourse} options={{ title: 'Laravel', headerTitleAlign: 'center' }} />
                <Stack.Screen name='Profile' component={YourProfile} />
            </Stack.Navigator>


        </>
    )
}
const style = StyleSheet.create({
    button: {
        width: 190,
        elevation: 10,
        backgroundColor: 'black',
        height: 80,

    },
    btntext: {
        fontSize: 17,
        padding: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    image: {
        width: 320,
        height: 250,
        overflow: 'hidden'
    },
    imagediv: {
        alignItems: 'center',
        marginTop: 100,
    },
    textdiv: {
        padding: 40,
        marginTop: 60
    },
    heading: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 19,
    },
    sub: {
        fontSize: 14,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 8,
        color: 'grey',

    },
    subsub: {
        fontSize: 16,
        marginLeft: 30,
        marginRight: 10,
        color: 'grey',
    },
    buttondiv: {
        display: 'flex',
        flexDirection: 'row'
    },
    footer: {
        position: 'relative',

    }

})
// <Button title='Login' onPress={() => navigation.navigate('Login')}
export default Landing