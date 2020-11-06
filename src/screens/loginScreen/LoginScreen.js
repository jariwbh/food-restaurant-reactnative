
import React, { Component, useState } from 'react'
import { ImageBackground, View, StyleSheet, FlatList, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { emailValidator, passwordValidator } from '../../components/core/utils'
// export default class Login extends Component {
//     state = {
//         email: "",
//         password: ""
//     }
const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });

    const _onLoginPressed = () => {
        const emailError = emailValidator(email.value);
        const passwordError = passwordValidator(password.value);

        if (emailError || passwordError) {
            setEmail({ ...email, error: emailError });
            setPassword({ ...password, error: passwordError });
            return;
        }

        // navigation.navigate('Home');
    };
    // render() {
    console.log(email.value);
    console.log(password.value);
    return (
        <ImageBackground source={require('../../../assets/images/background.png')} style={styles.backgroundImage}>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Email"
                    // placeholderTextColor="#000000"
                    // onChangeText={text => this.setState({ email: text })}
                    label="Email"
                    returnKeyType="next"
                    value={email.value}
                    onChangeText={text => setEmail({ value: text, error: '' })}
                    error={!!email.error}
                    errorText={email.error}
                    autoCapitalize="none"
                    autoCompleteType="email"
                    textContentType="emailAddress"
                    keyboardType="email-address"
                />

            </View>
            <View style={styles.inputView} >
                <TextInput
                    secureTextEntry
                    style={styles.inputText}
                    placeholder="Password"
                    // placeholderTextColor="#000000"
                    // onChangeText={text => this.setState({ password: text })}
                    label="Password"
                    returnKeyType="done"
                    value={password.value}
                    onChangeText={text => setPassword({ value: text, error: '' })}
                    error={!!password.error}
                    errorText={password.error}
                    secureTextEntry

                />
            </View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgotPassword')}>
                <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn} mode="contained" onPress={_onLoginPressed}>
                <Text style={styles.loginText} >LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')} >
                <Text style={styles.signupText} >Signup</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}
// }

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center'
    },
    // container: {
    //     flex: 1,
    //     backgroundColor: '#F67600',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
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
    },
    // inputFood: {
    //     fontWeight: "bold",
    //     height: 100,
    //     color: "black",
    //     fontSize: 50,
    // },
    // logo: {
    //     fontWeight: "bold",
    //     fontSize: 50,
    //     color: "#fb5b5a",
    //     marginBottom: 40
    // },
});

export default LoginScreen