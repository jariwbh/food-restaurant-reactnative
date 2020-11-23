import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import SliderScreen from '../../components/Slider/SliderScreen'
import { MaterialIcons } from '@expo/vector-icons';
import { Card } from 'react-native-elements'


export default class Home extends Component {
    render() {
        return (
            <View style={styles.continer}>

                <View style={styles.design}>

                    <SliderScreen />
                    <Text style={styles.textview}>Recipes By Caregories</Text>
                    <View style={styles.cardstyle}>
                        <Card style={styles.cardlayout}>
                            <TouchableOpacity style={styles.button}>
                                <MaterialIcons
                                    name={'free-breakfast'}
                                    size={30}
                                    style={styles.icon}
                                />
                                <Text style={styles.buttontext}>BreakFast &nbsp;&nbsp; <Text style={styles.innerText}>24 Recipes</Text>
                                </Text>
                            </TouchableOpacity>
                        </Card>
                        <Card >

                            <TouchableOpacity style={styles.button}>
                                <MaterialIcons
                                    name={'free-breakfast'}
                                    size={30}
                                    style={styles.icon}
                                />
                                <Text style={styles.buttontext}>Lunch &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <Text style={styles.innerText}>106 Recipes</Text>
                                </Text>

                            </TouchableOpacity>

                        </Card>
                        <Card >

                            <TouchableOpacity style={styles.button}>
                                <MaterialIcons
                                    name={'free-breakfast'}
                                    size={30}
                                    style={styles.icon}
                                />
                                <Text style={styles.buttontext}>Dinner &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <Text style={styles.innerText}>24 Recipes</Text>
                                </Text>

                            </TouchableOpacity>

                        </Card>



                    </View>
                </View>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    continer: {
        flex: 1,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: 120,
        height: 50,
    },
    design: {
        marginTop: 24,
    },
    image: {
        height: '30%',
        width: '50%',

    },
    icon: {
        // height: '40%',
        // width: '40%',
        marginLeft: 10
    },
    textview: {
        marginTop: 10,
        marginLeft: 5,
        fontSize: 25,
        fontWeight: 'bold'
    },
    buttontext: {
        marginLeft: 10,
        fontSize: 20,

    },
    cardstyle: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    innerText: {
        fontSize: 12,
        alignItems: 'center',
    },

});