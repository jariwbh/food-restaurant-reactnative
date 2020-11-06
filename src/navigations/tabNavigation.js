import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homeScreen/Home'
import MyProfileScreen from '../screens/myProfileScreen/MyProfileScreen'
import MenuScreen from '../screens/menuScreen/MenuScreen'

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'Home') {
                        return (
                            <Ionicons
                                name={
                                    focused
                                        ? 'ios-information-circle'
                                        : 'ios-information-circle-outline'
                                }
                                size={size}
                                color={color}
                            />
                        );
                    } else if (route.name === 'Menu') {
                        return (
                            <Ionicons
                                name={focused ? 'ios-list-box' : 'ios-list'}
                                size={size}
                                color={color}
                            />
                        );
                    } else if (route.name === 'MyProfile') {
                        return (
                            <Ionicons
                                name={focused ? 'ios-list-box' : 'ios-list'}
                                size={size}
                                color={color}
                            />
                        );
                    }
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarBadge: 3 }} />
            <Tab.Screen name="Menu" component={MenuScreen} />
            <Tab.Screen name="MyProfile" component={MyProfileScreen} />
        </Tab.Navigator>
    );
}
