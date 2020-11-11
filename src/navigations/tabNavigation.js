import * as React from 'react';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homeScreen/HomeScreen'
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
                            <SimpleLineIcons
                                name={focused ? 'home' : 'home'}
                                size={20}
                                color={color}
                            />
                        );
                    } else if (route.name === 'Menu') {
                        return (
                            <Ionicons
                                name={focused ? 'ios-list-box' : 'ios-list'}
                                size={20}
                                color={color}
                            />
                        );
                    } else if (route.name === 'MyProfile') {
                        return (
                            <SimpleLineIcons
                                name={focused ? 'user' : 'user'}
                                size={20}
                                color={color}
                            />
                        );
                    }
                },
            })}
            tabBarOptions={{
                activeTintColor: '#F4AC2E',
                inactiveTintColor: '#808B96',
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Menu" component={MenuScreen} />
            <Tab.Screen name="MyProfile" component={MyProfileScreen} />
        </Tab.Navigator>
    );
}
