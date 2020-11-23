import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import SliderScreen from '../../components/Slider/SliderScreen'
import { MaterialIcons } from '@expo/vector-icons';
import CategoriesScreen from '../../screens/Categories/CategoriesScreen';
import RecipeScreen from '../../screens/Recipe/RecipeScreen'
import RecipesListScreen from '../../screens/RecipesList/RecipesListScreen'
import IngredientScreen from '../../screens/Ingredient/IngredientScreen'
import SearchScreen from '../../screens/Search/SearchScreen'
import IngredientsDetailsScreen from '../../screens/IngredientsDetails/IngredientsDetailsScreen'
import MyProfileScreen from '../../screens/myProfileScreen/MyProfileScreen'
import DrawerContainer from '../../screens/DrawerContainer/DrawerContainer';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer'
import MenuImage from '../../components/MenuImage/MenuImage';

class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Home',
        headerLeft: (
            <View style={styles.nestedButtonView}>
                <MenuImage
                    onPress={() => {
                        navigation.openDrawer();
                    }}
                />
                <TouchableOpacity style={styles.headerButtonContainer} >
                    <Image
                        style={styles.headerButtonImage}
                        source={require('../../../assets/icons/search.png')}
                        onPress={() => { this.props.navigation.navigate('Search'); }}
                    />
                </TouchableOpacity>
            </View>
        ),
    });
    render() {
        return (
            <View>
                <ScrollView>
                    <View style={styles.design}>
                        <SliderScreen />
                        <Text style={styles.textview}>Recipes By Caregories</Text>
                        <SafeAreaView style={{ flex: 1, marginTop: 10, marginLeft: 10 }}>
                            <TouchableOpacity style={styles.button}>
                                <MaterialIcons
                                    name={'free-breakfast'}
                                    size={30}
                                />
                                <Text style={styles.buttontext}>BreakFast</Text>
                            </TouchableOpacity>
                        </SafeAreaView>
                        <SafeAreaView style={{ flex: 1, marginTop: 10, marginLeft: 10 }}>
                            <TouchableOpacity style={styles.button}>
                                <MaterialIcons
                                    name={'free-breakfast'}
                                    size={30}
                                />
                                <Text style={styles.buttontext}>BreakFast</Text>
                            </TouchableOpacity>
                        </SafeAreaView>
                        <SafeAreaView style={{ flex: 1, marginTop: 10, marginLeft: 10 }}>
                            <TouchableOpacity style={styles.button}>
                                <MaterialIcons
                                    name={'free-breakfast'}
                                    size={30}
                                />
                                <Text style={styles.buttontext}>BreakFast</Text>
                            </TouchableOpacity>
                        </SafeAreaView>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        borderRadius: 5,
        flexDirection: 'row',
        width: 140,
        height: 70,
        padding: 10,
        borderWidth: 2,
        borderColor: '#F67600',
        borderTopLeftRadius: 1,
        borderStyle: 'solid'
    },
    design: {
        marginTop: 24,
    },
    image: {
        height: '30%',
        width: '50%'
    },
    icon: {
        height: '40%',
        width: '40%',
    },
    textview: {
        marginTop: 10,
        marginLeft: 5,
        fontSize: 25,
        fontWeight: 'bold'
    },
    buttontext: {
        marginLeft: 5,
        fontSize: 20,
    },
    headerButtonImage: {
        // justifyContent: 'flex-end',
        // textAlign: 'right',
        width: 20,
        height: 20,
        margin: 20,
        marginLeft: 380
    },
    nestedButtonView: {
        flexDirection: 'row',
    },
});

const SwitchNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Categories: CategoriesScreen,
        Recipe: RecipeScreen,
        RecipesList: RecipesListScreen,
        Ingredient: IngredientScreen,
        Search: SearchScreen,
        IngredientsDetails: IngredientsDetailsScreen,
        MyProfile: MyProfileScreen,
    },
    {
        initialRouteName: 'Home'
    }
)

const DrawerStack = createDrawerNavigator(
    {
        Main: SwitchNavigator
    },
    {
        drawerPosition: 'left',
        initialRouteName: 'Main',
        drawerWidth: 250,
        contentComponent: DrawerContainer
    },
);

export default HomeScreen = createAppContainer(DrawerStack)