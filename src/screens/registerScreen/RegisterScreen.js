import React, { Component } from 'react'
import { View, StyleSheet, Image, Text, TextInput, Button, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import { FontAwesome, MaterialCommunityIcons, Zocial } from '@expo/vector-icons';

export default class RegisterScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../../assets/icons/membrozlogo.png')}
                    style={styles.Image} />

                <View style={styles.inputView}>
                    <FontAwesome name="user" size={24} color="#F67600" style={styles.userStyle} />
                    <TextInput
                        style={styles.inputText}
                        placeholder="Username"
                        placeholderTextColor="#737373"
                        onChangeText={text => this.setState({ 'username': text })}
                    />

                </View>

                <View style={styles.inputView} >
                    <MaterialCommunityIcons name="account-key" size={24} color="#F67600" style={styles.passStyle} />
                    <TextInput
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="Password"
                        placeholderTextColor="#737373"
                        onChangeText={text => this.setState({ ' password': text })}

                    />
                </View>
                <View style={styles.inputView}>
                    <Zocial name="email" size={24} color="#F67600" style={styles.emailStyle} />
                    <TextInput
                        style={styles.inputText}
                        placeholder="Email"
                        placeholderTextColor="#737373"
                        onChangeText={text => this.setState({ 'email': text })}
                    />

                </View>
                <View style={styles.inputView}>
                    <FontAwesome name="phone" size={24} color="#F67600" style={styles.phoneStyle} />
                    <TextInput
                        style={styles.inputText}
                        placeholder="Phone Number"
                        placeholderTextColor="#737373"
                        onChangeText={text => this.setState({ 'phone_number': text })}
                    />

                </View>

                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.loginText}>Register</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} >
                    <Text style={styles.baseText}>
                        Already an account ?
                    <Text style={styles.innerText}> Log in</Text>
                    </Text>

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
    Image: {
        marginBottom: 80,
        width: 280,
        height: 120,


    },
    phoneStyle: {
        padding: 8,
        margin: 10,
        height: 30,
        width: 30,
        marginLeft: 10,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    imageStyle: {
        padding: 8,
        margin: 15,
        height: 20,
        width: 20,
        marginLeft: 20,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    inputView: {
        marginBottom: 20,
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

    },
    forgot: {
        color: "#000000",
        fontSize: 15
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
        borderWidth: 0.5,
        borderColor: '#000',
    },
    loginText: {
        color: "white",
        fontWeight: 'bold',
    },
    signupText: {
        color: "#000000",
        fontSize: 15
    },
    baseText: {
        fontWeight: 'normal',
        color: '#737373'
    },
    innerText: {
        color: '#F67600'
    },
    userStyle: {
        padding: 8,
        margin: 5,
        height: 40,
        width: 40,
        marginLeft: 5,
        // resizeMode: 'stretch',
        alignItems: 'center',
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
    emailStyle: {
        padding: 8,
        margin: 5,
        height: 40,
        width: 40,
        marginLeft: 5,
        // resizeMode: 'stretch',
        alignItems: 'center',
    },
    phoneStyle: {
        padding: 8,
        margin: 5,
        height: 40,
        width: 40,
        marginLeft: 5,
        // resizeMode: 'stretch',
        alignItems: 'center',
    },

});
