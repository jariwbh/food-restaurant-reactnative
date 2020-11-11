import React, { Component } from 'react'
import { ImageBackground, Image, View, StyleSheet, FlatList, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { emailValidator, passwordValidator } from '../../components/core/utils'

export default class Login extends Component {
    state = {
        email: "",
        password: ""
    }

    render() {
        return (
            <ImageBackground source={require('../../../assets/images/background.png')} style={styles.backgroundImage}>
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
                <TouchableOpacity style={styles.loginBtn} mode="contained" onPress={() => this.props.navigation.navigate('TabNavigations')}>
                    <Text style={styles.loginText} >LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgotPassword')}>
                    <Text style={styles.forgot}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')} >
                    <Text style={styles.signupText} >Sign Up for Food Recipes</Text>
                </TouchableOpacity>
                <Image source={require('../../../assets/images/logo.png')}
                    style={{ width: 50, height: 50 }} />
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
        marginTop: 5,
        marginBottom: 10
    },
    loginText: {
        color: "white",
        fontWeight: 'bold',
    },
    signupText: {
        color: "#ffffff",
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 20
    },
    // inputFood: {
    // fontWeight: "bold",
    // height: 100,
    // color: "black",
    // fontSize: 50,
    // },
    // logo: {
    // fontWeight: "bold",
    // fontSize: 50,
    // color: "#fb5b5a",
    // marginBottom: 40
    // },
});

// export default LoginScreen