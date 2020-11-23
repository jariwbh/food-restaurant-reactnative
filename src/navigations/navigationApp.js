import React from 'react';
import LoginScreen from '../screens/loginScreen/LoginScreen'
import RegisterScreen from '../screens/registerScreen/RegisterScreen'
import ForgotPasswordScreen from '../screens/forgotPasswordScreen/ForgotPasswordScreen'
// import CategoriesScreen from '../screens/Categories/CategoriesScreen';
// import RecipeScreen from '../screens/Recipe/RecipeScreen'
// import RecipesListScreen from '../screens/RecipesList/RecipesListScreen'
// import SearchScreen from '../screens/Search/SearchScreen'
import HomeScreen from '../screens/homeScreen/HomeScreen'
// import MyProfileScreen from '../screens/myProfileScreen/MyProfileScreen'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

const AppNavigator = createSwitchNavigator({
    Home: HomeScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
    ForgotPassword: ForgotPasswordScreen,
    // Categories: CategoriesScreen,
    // Recipe: RecipeScreen,
    // RecipesList: RecipesListScreen,
    // Ingredient: IngredientScreen,
    // Search: SearchScreen,
    // IngredientsDetails: IngredientsDetailsScreen
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