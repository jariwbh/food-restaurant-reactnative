import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import SliderScreen from '../../components/Slider/SliderScreen'
import { MaterialIcons } from '@expo/vector-icons';
import CategoriesScreen from '../../screens/Categories/CategoriesScreen';
import RecipeScreen from '../../screens/Recipe/RecipeScreen'
import RecipesListScreen from '../../screens/RecipesList/RecipesListScreen'
import SearchScreen from '../../screens/Search/SearchScreen'
import MyProfileScreen from '../../screens/myProfileScreen/MyProfileScreen'
import DrawerContainer from '../../screens/DrawerContainer/DrawerContainer';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer'
import MenuImage from '../../components/MenuImage/MenuImage';
import { Card } from 'react-native-elements';

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
            <View style={styles.continer}>

                <View style={styles.design}>

                    <SliderScreen />
                    <Text style={styles.textview}>Recipes By Caregories</Text>
                    <View style={styles.cardstyle}>
                        <Card style={styles.cardlayout}>
                            <TouchableOpacity style={styles.button}>
                                <MaterialIcons
                                    name={'free-breakfast'}
                                    size={30}
                                    style={styles.icon}
                                />
                                <Text style={styles.buttontext}>BreakFast &nbsp;&nbsp; <Text style={styles.innerText}>24 Recipes</Text>
                                </Text>
                            </TouchableOpacity>
                        </Card>
                        <Card >

                            <TouchableOpacity style={styles.button}>
                                <MaterialIcons
                                    name={'free-breakfast'}
                                    size={30}
                                    style={styles.icon}
                                />
                                <Text style={styles.buttontext}>Lunch &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <Text style={styles.innerText}>106 Recipes</Text>
                                </Text>

                            </TouchableOpacity>

                        </Card>
                        <Card >

                            <TouchableOpacity style={styles.button}>
                                <MaterialIcons
                                    name={'free-breakfast'}
                                    size={30}
                                    style={styles.icon}
                                />
                                <Text style={styles.buttontext}>Dinner &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <Text style={styles.innerText}>24 Recipes</Text>
                                </Text>

                            </TouchableOpacity>

                        </Card>
                    </View>
                    <View style={styles.cardstyle}>
                        <Card style={styles.cardlayout}>
                            <TouchableOpacity style={styles.button}>
                                <MaterialIcons
                                    name={'free-breakfast'}
                                    size={30}
                                    style={styles.icon}
                                />
                                <Text style={styles.buttontext}>Veg Menu &nbsp;&nbsp; <Text style={styles.innerText}>24 Recipes</Text>
                                </Text>
                            </TouchableOpacity>
                        </Card>
                        <Card >

                            <TouchableOpacity style={styles.button}>
                                <MaterialIcons
                                    name={'free-breakfast'}
                                    size={30}
                                    style={styles.icon}
                                />
                                <Text style={styles.buttontext}>Non-veg  &nbsp;&nbsp;&nbsp;&nbsp;  <Text style={styles.innerText}>106 Recipes</Text>
                                </Text>

                            </TouchableOpacity>

                        </Card>
                        <Card >

                            <TouchableOpacity style={styles.button}>
                                <MaterialIcons
                                    name={'free-breakfast'}
                                    size={30}
                                    style={styles.icon}
                                />
                                <Text style={styles.buttontext}>ice-cream   <Text style={styles.innerText}>24 Recipes</Text>
                                </Text>

                            </TouchableOpacity>

                        </Card>
                    </View>
                    <View style={styles.cardstyle}>
                        <Card style={styles.cardlayout}>
                            <TouchableOpacity style={styles.button}>
                                <MaterialIcons
                                    name={'free-breakfast'}
                                    size={30}
                                    style={styles.icon}
                                />
                                <Text style={styles.buttontext}>Starter &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Text style={styles.innerText}>24 Recipes</Text>
                                </Text>
                            </TouchableOpacity>
                        </Card>
                        <Card >

                            <TouchableOpacity style={styles.button}>
                                <MaterialIcons
                                    name={'free-breakfast'}
                                    size={30}
                                    style={styles.icon}
                                />
                                <Text style={styles.buttontext}>Drinks  &nbsp;&nbsp;&nbsp;&nbsp;  <Text style={styles.innerText}>106 Recipes</Text>
                                </Text>

                            </TouchableOpacity>

                        </Card>
                        <Card >

                            <TouchableOpacity style={styles.button}>
                                <MaterialIcons
                                    name={'free-breakfast'}
                                    size={30}
                                    style={styles.icon}
                                />
                                <Text style={styles.buttontext}>Main-cours   <Text style={styles.innerText}>24 Recipes</Text>
                                </Text>

                            </TouchableOpacity>

                        </Card>
                    </View>
                </View>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    continer: {
        flex: 1,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: 120,
        height: 50,
    },
    design: {
        marginTop: 24,
    },
    image: {
        height: '30%',
        width: '50%',

    },
    icon: {
        // height: '40%',
        // width: '40%',
        marginLeft: 10
    },
    textview: {
        marginTop: 10,
        marginLeft: 5,
        fontSize: 25,
        fontWeight: 'bold'
    },
    buttontext: {
        marginLeft: 10,
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
    cardstyle: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    innerText: {
        fontSize: 12,
        alignItems: 'center',
    },

});

const SwitchNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Categories: CategoriesScreen,
        Recipe: RecipeScreen,
        RecipesList: RecipesListScreen,
        Search: SearchScreen,
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
