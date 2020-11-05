import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/splashScreen/SplashScreen'
import LoginScreen from '../screens/loginScreen/Login'
import RegisterScreen from '../screens/registerScreen/RegisterScreen'

const Stack = createStackNavigator();

export default class NavigationApp extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Register">
                    <Stack.Screen
                        name="Splash"
                        component={SplashScreen}
                    />
                    <Stack.Screen
                        name="Login"
                        component={LoginScreen}
                    />
                    <Stack.Screen
                        name="Register"
                        component={RegisterScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}