
import React, { Component } from 'react'
import { View, StyleSheet, FlatList, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import Background from '../../components/Background/Background'

export default class Login extends Component {
    state = {
        email: "",
        password: ""
    }
    render() {
        return (

            <Background>


                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Email"
                        placeholderTextColor="#000000"
                        onChangeText={text => this.setState({ email: text })}
                    />

                </View>
                <View style={styles.inputView} >
                    <TextInput
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="Password"
                        placeholderTextColor="#000000"
                        onChangeText={text => this.setState({ password: text })}

                    />
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgotPassword')}>
                    <Text style={styles.forgot}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')} >
                    <Text style={styles.signupText} >Signup</Text>
                </TouchableOpacity>

            </Background>

        )
    }
}

const styles = StyleSheet.create({
    inputView: {
        width: "100%",
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
        fontSize: 15,
        fontWeight: 'bold',
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
        fontSize: 15,
        fontWeight: 'bold',
    }
});
