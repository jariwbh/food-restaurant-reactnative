import React, { Component } from 'react'
import { ImageBackground, Image, View, StyleSheet, FlatList, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { emailValidator, passwordValidator } from '../../components/core/utils'
import { MaterialCommunityIcons, Zocial } from '@expo/vector-icons';

export default class Login extends Component {
    state = {
        email: "",
        password: ""
    }

    render() {
        return (
            <View style={styles.container}>
                <View >

                    <Image source={require('../../../assets/icons/membrozlogo.png')}
                        style={styles.Image} />
                </View>
                <View style={styles.inputView}>
                    <Zocial name="email" size={24} color="#F67600" style={styles.emailStyle} />
                    <TextInput
                        style={styles.inputText}
                        placeholder="Email"
                        type='clear'
                        placeholderTextColor="#737373"
                        onChangeText={text => this.setState({ email: text })}


                    />

                </View>
                <View style={styles.inputView} >

                    <MaterialCommunityIcons name="account-key" size={24} color="#F67600" style={styles.passStyle} />
                    <TextInput
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="Password"
                        placeholderTextColor="#737373"
                        onChangeText={text => this.setState({ password: text })}
                    />
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgotPassword')}>
                    <Text style={styles.forgot}>Forgot Password ?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.loginBtn} onPress={() => this.props.navigation.navigate('Home')}>

                    <Text style={styles.loginText} >Login</Text>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')} >
                    <Text style={styles.baseText}>
                        Don't have an account ?
                    <Text style={styles.innerText} > Create Account</Text>
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
    emailStyle: {
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
        paddingLeft: 3,
        color: "black",
    },
    forgot: {
        color: "#737373",
        fontSize: 15,
        fontWeight: 'normal',
        marginLeft: 200,
        marginBottom: 10,
        textDecorationLine: 'underline',


    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#F67600",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15,
        marginBottom: 10,
        borderWidth: 0.5,
    },
    loginText: {
        color: "white",
        fontWeight: 'bold',
    },
    baseText: {
        fontWeight: 'normal',
        color: '#737373'
    },
    innerText: {
        color: '#F67600'
    },


});

// export default LoginScreen