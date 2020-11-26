
import React, { Component } from 'react';
import { View, SafeAreaView, StyleSheet, Image, } from 'react-native';
import { Avatar, Title, Caption, Text, TouchableRipple, } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { FontAwesome5 } from '@expo/vector-icons';
// import Share from 'react-native-share';

export default class MyProfile extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'MyProfile',
        headerStyle: {
            backgroundColor: '#F67600',

        },
        headerTintColor: '#fff',
        headerTitleStyle: { alignSelf: 'center' },
        headerRight: () => (
            <View style={{ flexDirection: 'row', marginRight: 10 }}>
                <FontAwesome5 name="user-edit" size={20} color="#fff" onPress={() => navigation.navigate('Edit')} />
            </View>
        ),


    });
    // static myCustomShare = async () => {
    //     const shareOptions = {
    //         message: 'Order your next meal from FoodFinder App. I\'ve already ordered more than 10 meals on it.',
    //         url: files.appLogo,
    //         // urls: [files.image1, files.image2]
    //     }

    //     try {
    //         const ShareResponse = await Share.open(shareOptions);
    //         console.log(JSON.stringify(ShareResponse));
    //     } catch (error) {
    //         console.log('Error => ', error);
    //     }
    // };
    render() {
        return (
            <SafeAreaView style={styles.container} >

                <View style={styles.userInfoSection}>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <Avatar.Image
                            source={{
                                uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
                            }}
                            size={80}
                        />
                        <View style={{ marginLeft: 20 }}>
                            <Title style={[styles.title, {
                                marginTop: 15,
                                marginBottom: 5,
                            }]}>John Doe</Title>
                            <Caption style={styles.caption}>@j_doe</Caption>
                        </View>
                    </View>
                </View>
                {/* <View style={styles.header}>

                    <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
                    <View style={styles.bodyContent}>
                        <Text style={styles.name}>John Doe</Text>

                    </View>
                    <Feather name="edit" size={24} color="#F67600" style={styles.editstyle} />
                </View> */}

                <View style={styles.userInfoSection}>
                    <View style={styles.row}>
                        <Icon name="map-marker-radius" color='#F67600' size={20} />
                        <Text style={{ color: "#777777", marginLeft: 20 }}>Kolkata, India</Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name="phone" color='#F67600' size={20} />
                        <Text style={{ color: "#777777", marginLeft: 20 }}>+91-900000009</Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name="email" color='#F67600' size={20} />
                        <Text style={{ color: "#777777", marginLeft: 20 }}>john_doe@email.com</Text>
                    </View>
                </View>

                {/* <View style={styles.infoBoxWrapper}>
                    <View style={[styles.infoBox, {
                        borderRightColor: '#dddddd',
                        borderRightWidth: 1
                    }]}> */}
                {/* <Title>₹140.50</Title>
                        <Caption>Wallet</Caption> */}
                {/* </View> */}
                {/* <View style={styles.infoBox}>
                        <Title>12</Title>
                        <Caption>Orders</Caption>
                    </View> */}
                {/* </View> */}

                <View style={styles.menuWrapper}>
                    <TouchableRipple onPress={() => { }}>
                        <View style={styles.menuItem}>
                            <Icon name="heart-outline" color='#F67600' size={25} />
                            <Text style={styles.menuItemText}>My Order</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => { }}>
                        <View style={styles.menuItem}>
                            <FontAwesome name="credit-card" color='#F67600' size={25} />
                            <Text style={styles.menuItemText}>Payment</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => { }}>
                        <View style={styles.menuItem}>
                            <Icon name="share-outline" color='#F67600' size={25} />
                            <Text style={styles.menuItemText}>Tell Your Friends</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => { }}>
                        <View style={styles.menuItem}>
                            <Icon name="account-check-outline" color='#F67600' size={25} />
                            <Text style={styles.menuItemText}>Support</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => { }}>
                        <View style={styles.menuItem}>
                            <Icon name="settings-outline" color='#F67600' size={25} />
                            <Text style={styles.menuItemText}>Settings</Text>
                        </View>
                    </TouchableRipple>
                </View>
            </SafeAreaView>
        );
    };
}

// export default MyProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },
    header: {
        backgroundColor: "#F67600",
        height: 300,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 50
    },
    // editstyle: {
    //     width: 50,
    //     height: 50,
    //     borderRadius: 60,
    //     backgroundColor: "#ffffff",
    //     alignSelf: 'flex-end',
    //     position: 'absolute',
    //     marginTop: 281,
    //     borderColor: "white",
    //     borderWidth: 4,
    //     padding: 10

    // },
    // name: {
    //     fontSize: 22,
    //     color: "#FFFFFF",
    //     fontWeight: '600',
    // },
    // body: {
    //     marginTop: 40,

    // },
    // bodyContent: {
    //     flex: 1,
    //     alignItems: 'center',
    //     padding: 10,

    // },
    // name: {
    //     fontSize: 28,
    //     color: "#696969",
    //     fontWeight: "600",
    //     marginTop: 220
    // },
});
