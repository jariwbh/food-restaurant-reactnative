import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput, Button, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'

export default class RegisterScreen extends Component {
    render() {
        return (
            <ImageBackground source={require('../../../assets/images/background.png')} style={styles.backgroundImage}>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Username"
                        placeholderTextColor="#000000"
                        onChangeText={text => this.setState({ 'username': text })}
                    />

                </View>
                <View style={styles.inputView} >
                    <TextInput
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="Password"
                        placeholderTextColor="#000000"
                        onChangeText={text => this.setState({ ' password': text })}

                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Email"
                        placeholderTextColor="#000000"
                        onChangeText={text => this.setState({ 'email': text })}
                    />

                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Phone Number"
                        placeholderTextColor="#000000"
                        onChangeText={text => this.setState({ 'phone_number': text })}
                    />

                </View>

                <TouchableOpacity style={styles.loginBtn} onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.loginText}>SIGNUP</Text>
                </TouchableOpacity>

            </ImageBackground>

        )
    }
}
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputView: {
        width: "80%",
        backgroundColor: "#ffffff",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20,

    },
    inputText: {
        height: 50,
        color: "black",

    },
    forgot: {
        color: "#000000",
        fontSize: 15
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#563522",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    loginText: {
        color: "white",
        fontWeight: 'bold',
    },
    signupText: {
        color: "#000000",
        fontSize: 15
    }
});
