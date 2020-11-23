import React, { Component } from 'react'
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class ForgotPasswordScreen extends Component {
    state = {
        password: ""
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../../assets/icons/membrozlogo.png')}
                    style={styles.Image} />
                <View style={styles.inputView} >
                    <MaterialCommunityIcons name="account-key" size={24} color="#F67600" style={styles.passStyle} />
                    <TextInput
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="Reset Password"
                        placeholderTextColor="#737373"
                        onChangeText={text => this.setState({ password: text })}

                    />
                </View>
                <TouchableOpacity style={styles.loginBtn} onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.loginText}>Reset Password</Text>
                </TouchableOpacity>
            </View>

        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    passStyle: {
        padding: 8,
        margin: 5,
        height: 40,
        width: 40,
        marginLeft: 5,
        // resizeMode: 'stretch',
        alignItems: 'center',

    },

    inputView: {
        width: "80%",
        flexDirection: 'row',
        backgroundColor: "#f2f2f2",
        borderWidth: 0.5,
        borderColor: '#000',
        height: 50,
        borderRadius: 25,
        margin: 10,
    },
    inputText: {
        height: 50,
        color: "black",
        paddingLeft: 3,

    },
    Image: {
        marginBottom: 80,
        width: 280,
        height: 120,
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#F67600",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10,
        borderColor: '#000',
        borderWidth: 0.5,
    },
    loginText: {
        color: "white",
        fontSize: 15,
        fontWeight: 'bold',

    },


});
