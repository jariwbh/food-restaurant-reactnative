import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import Background from '../../components/Background/Background'


export default class ForgotPasswordScreen extends Component {
    state = {

        password: ""
    }
    render() {
        return (

            <Background>

                <View style={styles.inputView} >
                    <TextInput
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="Reset Password"
                        placeholderTextColor="#000000"
                        onChangeText={text => this.setState({ password: text })}

                    />
                </View>

                <TouchableOpacity style={styles.loginBtn} onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.loginText}>Reset Password</Text>
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
        fontSize: 15,
        fontWeight: 'bold',


    },

});
