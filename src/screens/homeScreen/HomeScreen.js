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
        title: 'Food Receipe',
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

        headerStyle: {
            backgroundColor: '#F67600',
        },
        headerTintColor: '#fff',
    });
    render() {
        return (
            <View>
                <ScrollView>
                    <View style={styles.design}>
                        <Text style={styles.textview}>Recipes By Caregories</Text>
                        <SliderScreen />

                        <Text style={styles.textview}>Recipes By Caregories</Text>
                        <SafeAreaView style={{ flex: 1, marginTop: 10, marginLeft: 10 }}>
                            <TouchableOpacity style={styles.button}>
                                <MaterialIcons
                                    name={'free-breakfast'}
                                    size={30}
                                    style={styles.icon}
                                />
                                <Text style={styles.buttontext}>BreakFast</Text>
                            </TouchableOpacity>
                        </SafeAreaView>
                        <Card >

                            <TouchableOpacity style={styles.button}>
                                <MaterialIcons
                                    name={'free-breakfast'}
                                    size={30}
                                    style={styles.icon}
                                />
                                <Text style={styles.buttontext}>BreakFast</Text>
                            </TouchableOpacity>

                        </Card>
                        <Card >

                            <TouchableOpacity style={styles.button}>
                                <MaterialIcons
                                    name={'free-breakfast'}
                                    size={30}
                                    style={styles.icon}
                                />
                                <Text style={styles.buttontext}>BreakFast</Text>
                            </TouchableOpacity>

                        </Card>



                    </View>
                </ScrollView>
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
        marginTop: 0,
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
