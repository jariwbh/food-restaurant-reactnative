import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/loginScreen/LoginScreen'
import RegisterScreen from '../screens/registerScreen/RegisterScreen'
import ForgotPasswordScreen from '../screens/forgotPasswordScreen/ForgotPasswordScreen'
import TabNavigationsScreen from './TabNavigation'
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack"

const AppNavigator = createStackNavigator({
    Login: LoginScreen,
    Register: RegisterScreen,
    ForgotPassword: ForgotPasswordScreen,
    TabNavigations: TabNavigationsScreen
},
    {
        initialRouteName: "Login",
        headerMode: "none"
    });

const AppContainer = createAppContainer(AppNavigator);

export default class NavigationApp extends React.Component {
    render() {
        return <NavigationContainer>
            <AppContainer />
        </NavigationContainer>;
    }
}