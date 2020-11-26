import React from 'react';
import LoginScreen from '../screens/loginScreen/LoginScreen'
import RegisterScreen from '../screens/registerScreen/RegisterScreen'
import ForgotPasswordScreen from '../screens/forgotPasswordScreen/ForgotPasswordScreen'
import HomeScreen from '../screens/homeScreen/HomeScreen'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

const AppNavigator = createSwitchNavigator({
    Home: HomeScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
    ForgotPassword: ForgotPasswordScreen,


},
    {
        initialRouteName: "Login",
        headerMode: "none"
    });

const AppContainer = createAppContainer(AppNavigator);

export default class NavigationApp extends React.Component {
    render() {
        return (
            <AppContainer />
        )
    }
}