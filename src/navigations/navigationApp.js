import React from 'react';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/loginScreen/LoginScreen'
import RegisterScreen from '../screens/registerScreen/RegisterScreen'
import ForgotPasswordScreen from '../screens/forgotPasswordScreen/ForgotPasswordScreen'
import TabNavigationsScreen from './TabNavigation'
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack"
import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import RecipeScreen from '../screens/Recipe/RecipeScreen'
import RecipesListScreen from '../screens/RecipesList/RecipesListScreen'
import IngredientScreen from '../screens/Ingredient/IngredientScreen'
import SearchScreen from '../screens/Search/SearchScreen'
import IngredientsDetailsScreen from '../screens/IngredientsDetails/IngredientsDetailsScreen'
import HomeScreen from '../screens/homeScreen/HomeScreen'
import MyProfileScreen from '../screens/myProfileScreen/MyProfileScreen'

// const Tab = createBottomTabNavigator();

// function TabNavigation() {
//     return (
//         <Tab.Navigator
//             screenOptions={({ route }) => ({
//                 tabBarIcon: ({ focused, color, size }) => {
//                     if (route.name === 'Home') {
//                         return (
//                             <SimpleLineIcons
//                                 name={focused ? 'home' : 'home'}
//                                 size={20}
//                                 color={color}
//                             />
//                         );
//                     } else if (route.name === 'Menu') {
//                         return (
//                             <Ionicons
//                                 name={focused ? 'ios-list-box' : 'ios-list'}
//                                 size={20}
//                                 color={color}
//                             />
//                         );
//                     } else if (route.name === 'MyProfile') {
//                         return (
//                             <SimpleLineIcons
//                                 name={focused ? 'user' : 'user'}
//                                 size={20}
//                                 color={color}
//                             />
//                         );
//                     }
//                 },
//             })}
//             tabBarOptions={{
//                 activeTintColor: '#F4AC2E',
//                 inactiveTintColor: '#808B96',
//             }}
//         >
//             <Tab.Screen name="Home" component={HomeScreen} />
//             <Tab.Screen name="Menu" component={RecipesListScreen} />
//             <Tab.Screen name="MyProfile" component={MyProfileScreen} />
//         </Tab.Navigator>
//     );
// }

const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    MyProfile: MyProfileScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
    ForgotPassword: ForgotPasswordScreen,
    Categories: CategoriesScreen,
    Recipe: RecipeScreen,
    RecipesList: RecipesListScreen,
    Ingredient: IngredientScreen,
    Search: SearchScreen,
    IngredientsDetails: IngredientsDetailsScreen
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