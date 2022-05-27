import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Pressable } from 'react-native';


const Home = ({ navigation }) => {
    return (
        <>
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.textsection}>
                        <View style={styles.textdiv}>
                            <Text style={styles.text}>
                                Skill Hai! To Future Hai!
                            </Text>
                            <Text style={styles.subtext}>
                                "CWS is an on-demand marketplace for top Programming engineers, developers, consultants, architects, programmers, and tutors. Get your projects built by vetted web programming freelancers or learn from expert mentors with team training & coaching experiences in Project based training."
                            </Text>
                        </View>
                    </View>

                    <View style={styles.course}>
                        <View style={styles.coursetitle}>
                            <Text style={styles.coursetext}>Our Course's</Text>
                            <Pressable onPress={() => navigation.navigate('Course')}>
                                <Text style={{ marginRight: 5, marginTop: 4, fontSize: 13, fontWeight: '700',color:'grey' }}>View All</Text>
                            </Pressable>
                        </View>

                        <View style={styles.courseboxdiv}>
                            <ScrollView horizontal>

                                <Pressable onPress={() => navigation.navigate('Single')}>
                                    <View style={styles.coursebox}>
                                        <Image
                                            source={require('../images/c1.png')}
                                            style={styles.image}
                                        />
                                        <View style={{ borderTopWidth: .4, borderTopColor: 'grey' }}>
                                            <Text style={{ fontSize: 11, fontWeight: '700', textAlign: 'center', marginTop: 10,color:'grey' }}>Python with Data Structure</Text>
                                        </View>
                                    </View>
                                </Pressable>
                                <Pressable onPress={() => navigation.navigate('Single')}>
                                    <View style={styles.coursebox}>
                                        <Image
                                            source={{ uri:"https://codewithsadiq.com/public/images/course/1639916450.jpg" }}
                                            style={styles.image}
                                        />
                                        <View style={{ borderTopWidth: .4, borderTopColor: 'grey' }}>
                                            <Text style={{ fontSize: 11, fontWeight: '700', textAlign: 'center', marginTop: 10,color:'grey' }}>Python with Data Structure</Text>
                                        </View>
                                    </View>
                                </Pressable>
                                <Pressable onPress={() => navigation.navigate('Single')}>
                                    <View style={styles.coursebox}>
                                        <Image
                                            source={{ uri:'https://codewithsadiq.com/public/images/course/1639915439.jpg' }}
                                            style={styles.image}
                                        />
                                        <View style={{ borderTopWidth: .4, borderTopColor: 'grey' }}>
                                            <Text style={{ fontSize: 11, fontWeight: '700', textAlign: 'center', marginTop: 10,color:'grey' }}>Python with Data Structure</Text>
                                        </View>
                                    </View>
                                </Pressable>
                                <Pressable onPress={() => navigation.navigate('Single')}>
                                    <View style={styles.coursebox}>
                                        <Image
                                            source={{ uri:'https://codewithsadiq.com/public/images/course/1639916867.jpg' }}
                                            style={styles.image}
                                        />
                                        <View style={{ borderTopWidth: .4, borderTopColor: 'grey' }}>
                                            <Text style={{ fontSize: 11, fontWeight: '700', textAlign: 'center', marginTop: 10,color:'grey' }}>Python with Data Structure</Text>
                                        </View>
                                    </View>
                                </Pressable>

                            </ScrollView>
                        </View>
                    </View>


                    <View style={styles.course}>
                        <View style={styles.coursetitle}>
                            <Text style={styles.coursetext}>Our Achievement's</Text>
                            <Pressable onPress={() => navigation.navigate('Achievement')}>
                                <Text style={{ marginRight: 5, marginTop: 4, fontSize: 13, fontWeight: '700',color:'grey' }}>View All</Text>
                            </Pressable>
                        </View>

                        <View style={styles.courseboxdiv}>
                            <ScrollView horizontal>

                                <View style={styles.coursebox}>
                                    <Image
                                        source={require('../images/l1.png')}
                                        style={styles.image}
                                    />
                                    <View style={{ borderTopWidth: .4, borderTopColor: 'grey' }}>
                                        <Text style={{ fontSize: 11, fontWeight: '700', textAlign: 'center', marginTop: 10,color:'grey' }}>Python with Data Structure</Text>
                                    </View>
                                </View>
                                <View style={styles.coursebox}>
                                    <Image
                                        source={require('../images/l1.png')}
                                        style={styles.image}
                                    />
                                    <View style={{ borderTopWidth: .4, borderTopColor: 'grey' }}>
                                        <Text style={{ fontSize: 11, fontWeight: '700', textAlign: 'center', marginTop: 10,color:'grey' }}>Python with Data Structure</Text>
                                    </View>
                                </View>
                                <View style={styles.coursebox}>
                                    <Image
                                        source={require('../images/l1.png')}
                                        style={styles.image}
                                    />
                                    <View style={{ borderTopWidth: .4, borderTopColor: 'grey' }}>
                                        <Text style={{ fontSize: 11, fontWeight: '700', textAlign: 'center', marginTop: 10,color:'grey' }}>Python with Data Structure</Text>
                                    </View>
                                </View>
                                <View style={styles.coursebox}>
                                    <Image
                                        source={require('../images/l1.png')}
                                        style={styles.image}
                                    />
                                    <View style={{ borderTopWidth: .4, borderTopColor: 'grey' }}>
                                        <Text style={{ fontSize: 11, fontWeight: '700', textAlign: 'center', marginTop: 10,color:'grey' }}>Python with Data Structure</Text>
                                    </View>
                                </View>

                            </ScrollView>
                        </View>


                    </View>
                </ScrollView>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    courseboxdiv: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: -1,
    },
    coursebox: {
        height: 180,
        width: 130,
        backgroundColor: 'white',
        marginLeft: 8,
        borderRadius: 8,


    },
    image: {
        height: 120,
        width: 130,
        borderRadius: 8,

    },
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    textsection: {
        padding: 18,
        maxHeight: 'auto',
        backgroundColor: '#292d36',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30

    },
    textdiv: {
        marginTop: 25,
        marginLeft: 6
    },
    text: {
        fontSize: 24,
        fontWeight: '400',
        color: 'white'
    },
    subtext: {
        fontSize: 12,
        marginTop: 8,
        color: 'grey',
        marginBottom: 25,
        color: '#cfcdcd'
    },
    course: {
        padding: 15,
        backgroundColor: '#efefef'
    },
    coursetitle: {
        borderLeftColor: 'grey',
        borderLeftWidth: 5,
        marginTop: 5,
        marginLeft: 5,
        borderRadius: 3,
        display: 'flex',
        flexDirection: 'row'
    },
    coursetext: {
        fontSize: 17,
        marginLeft: 4,
        fontWeight: '700',
        flex: 1,
        color:'black'

    }


});
export default Home