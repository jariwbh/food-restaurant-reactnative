import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/loginScreen/LoginScreen'
import RegisterScreen from '../screens/registerScreen/RegisterScreen'
import ForgotPasswordScreen from '../screens/forgotPasswordScreen/ForgotPasswordScreen'
import TabNavigationsScreen from './TabNavigation'

const Stack = createStackNavigator();

export default class NavigationApp extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <NavStack />
            </NavigationContainer>
        );
    }
}

function NavStack() {
    return (
        <Stack.Navigator
            initialRouteName="Login" headerMode="none">

            <Stack.Screen
                name="Login"
                component={LoginScreen}
            />
            <Stack.Screen
                name="Register"
                component={RegisterScreen}
            />
            <Stack.Screen
                name="ForgotPassword"
                component={ForgotPasswordScreen}
            />
            <Stack.Screen
                name="TabNavigations"
                component={TabNavigationsScreen}
            />
        </Stack.Navigator>
    )
}