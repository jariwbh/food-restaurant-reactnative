import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import SliderScreen from '../../components/Slider/SliderScreen'
import { MaterialIcons } from '@expo/vector-icons';
import img from '../../../assets/images/coffee.png'
import { color } from 'react-native-reanimated';

export default class Home extends Component {
    render() {
        return (
            <View>
                <ScrollView>
                    <View style={styles.design}>
                        {/* <Image style={styles.image}
                            source={require('../../../assets/images/logo.png')}
                        />
                         */}
                        <SliderScreen />
                        <Text style={styles.textview}>Recipes By Caregories</Text>
                        <SafeAreaView style={{ flex: 1, marginTop: 10, marginLeft: 10 }}>
                            <TouchableOpacity style={styles.buttonstyle}>
                                <MaterialIcons
                                    name={'free-breakfast'}
                                    size={30}
                                />
                                <Text style={styles.buttontext}>BreakFast</Text>
                            </TouchableOpacity>
                        </SafeAreaView>
                        <SafeAreaView style={{ flex: 1, marginTop: 10, marginLeft: 10 }}>
                            <TouchableOpacity style={styles.buttonstyle}>
                                <MaterialIcons
                                    name={'free-breakfast'}
                                    size={30}
                                />
                                <Text style={styles.buttontext}>BreakFast</Text>
                            </TouchableOpacity>
                        </SafeAreaView>
                        <SafeAreaView style={{ flex: 1, marginTop: 10, marginLeft: 10 }}>
                            <TouchableOpacity style={styles.buttonstyle}>
                                <MaterialIcons
                                    name={'free-breakfast'}
                                    size={30}
                                />
                                <Text style={styles.buttontext}>BreakFast</Text>
                            </TouchableOpacity>
                        </SafeAreaView>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonstyle: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#009D6E',
        borderRadius: 5,
        flexDirection: 'row',
        width: 140,
        height: 50,
    },
    design: {
        marginTop: 24,
    },
    image: {
        height: '30%',
        width: '50%'
    },
    icon: {
        height: '40%',
        width: '40%',
    },
    textview: {
        marginTop: 10,
        marginLeft: 5,
        fontSize: 25,
        fontWeight: 'bold'
    },
    buttontext: {
        marginLeft: 5,
        fontSize: 20
    }
});