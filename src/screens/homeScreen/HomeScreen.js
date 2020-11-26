import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView, SafeAreaView, Button } from 'react-native'
import SliderScreen from '../../components/Slider/SliderScreen'
import { FontAwesome5, Octicons } from '@expo/vector-icons';
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
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EditProfileScreen from '../../screens/EditProfileScreen/EditProfileScreen'


class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Food Recipe',
        headerStyle: {
            backgroundColor: '#F67600',

        },
        headerTintColor: '#fff',
        headerTitleStyle: { alignSelf: 'center' },
        headerLeft: (
            <View style={styles.nestedButtonView}>
                <MenuImage
                    onPress={() => {
                        navigation.openDrawer();
                    }}
                />
            </View>
        ),
        headerRight: () => (
            <View style={{ flexDirection: 'row', marginRight: 10 }}>
                <Octicons name="search" size={20} color="#ffff" onPress={() => navigation.navigate('Search')} />
            </View>
        )
    });


    render() {

        return (

            <View style={styles.continer}>

                <View style={styles.design}>

                    <SliderScreen />

                    <View style={styles.categoryContainer}>
                        <TouchableOpacity
                            style={styles.categoryBtn}
                            onPress
                        // onPress={(getItems) => this.props.navigation.navigate('RecipesList')}
                        >
                            <View style={styles.categoryIcon}>

                                <Ionicons name="ios-restaurant" size={35} color='#F67600' />
                            </View>
                            <Text style={styles.categoryBtnTxt}>Dinner</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.categoryBtn}
                            onPress={() => this.props.navigation.navigate('RecipesList')}
                        >
                            <View style={styles.categoryIcon}>
                                <MaterialCommunityIcons
                                    name="food-fork-drink"
                                    size={35}
                                    color='#F67600'
                                />
                            </View>
                            <Text style={styles.categoryBtnTxt}>BreakFast</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryBtn} onPress={() => this.props.navigation.navigate('RecipesList')}>
                            <View style={styles.categoryIcon}>
                                <MaterialCommunityIcons name="food" size={35} color='#F67600' />
                            </View>
                            <Text style={styles.categoryBtnTxt}>Snacks Corner</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.categoryContainer, { marginTop: 10 }]}>
                        <TouchableOpacity style={styles.categoryBtn} onPress={() => this.props.navigation.navigate('RecipesList')}>
                            <View style={styles.categoryIcon}>
                                <MaterialIcons name="room-service" size={35} color='#F67600' />

                            </View>
                            <Text style={styles.categoryBtnTxt}>Lunch</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryBtn} onPress={() => this.props.navigation.navigate('RecipesList')}>
                            <View style={styles.categoryIcon}>
                                <Ionicons name="md-restaurant" size={35} color='#F67600' />

                            </View>
                            <Text style={styles.categoryBtnTxt}>Veg Corner</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryBtn} onPress={() => this.props.navigation.navigate('RecipesList')}>
                            <View style={styles.categoryIcon}>
                                <MaterialCommunityIcons name="food-fork-drink" size={35} color='#F67600' />
                            </View>
                            <Text style={styles.categoryBtnTxt}>Non-Veg Corner</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>




        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    design: {
        marginTop: 0,
    },
    image: {
        height: '30%',
        width: '50%',

    },
    textview: {
        marginTop: 10,
        marginLeft: 5,
        fontSize: 25,
        fontWeight: 'bold',

    },
    categoryContainer: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 10,
    },
    categoryBtn: {
        flex: 1,
        width: '30%',
        marginHorizontal: 0,
        alignSelf: 'center',
    },
    categoryIcon: {
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 70,
        height: 70,
        backgroundColor: '#fdeae7' /* '#FF6347' */,
        borderRadius: 50,
    },
    categoryBtnTxt: {
        alignSelf: 'center',
        marginTop: 5,
        color: '#de4f35',
    },
    cardsWrapper: {
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
    },
    card: {
        height: 100,
        marginVertical: 10,
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    cardImgWrapper: {
        flex: 1,
    },
    cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
    },
    cardInfo: {
        flex: 2,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: '#fff',
    },
    cardTitle: {
        fontWeight: 'bold',
    },
    cardDetails: {
        fontSize: 12,
        color: '#444',
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
        Edit: EditProfileScreen,
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
