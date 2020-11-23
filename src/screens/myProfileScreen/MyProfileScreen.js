import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Feather, AntDesign, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default class MyProfile extends Component {
    static navigationOptions = () => ({
        headerStyle: {
            backgroundColor: '#F67600',
        },
        headerTintColor: '#fff',
    });
    render() {
        return (
            <View >
                <View style={styles.header}>

                    <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
                    <View style={styles.bodyContent}>
                        <Text style={styles.name}>John Doe</Text>

                    </View>
                    <Feather name="edit" size={24} color="#F67600" style={styles.editstyle} />
                </View>
                <View style={styles.cardstyle} >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('MyProfile')}>
                        <FontAwesome name="first-order" size={24} color="#F67600" style={styles.logstyle} />
                        <Text style={styles.inputText} >My Order</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.cardstyle} >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('MyProfile')}>
                        <MaterialCommunityIcons name="percent" size={24} color="#F67600" style={styles.logstyle} />
                        <Text style={styles.inputText} >Offers</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.cardstyle} >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('MyProfile')}>
                        <Feather name="phone-call" size={24} color="#F67600" style={styles.logstyle} />
                        <Text style={styles.inputText} >Contact Us</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.cardstyle} >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('MyProfile')}>
                        <AntDesign name="questioncircleo" size={24} color="#F67600" style={styles.logstyle} />
                        <Text style={styles.inputText} >About Us</Text>
                    </TouchableOpacity>

                </View>


                <View style={styles.cardstyle} >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('MyProfile')}>
                        <AntDesign name="logout" size={24} color="#F67600" style={styles.logstyle} />
                        <Text style={styles.inputText} >Log Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

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
        marginTop: 100
    },
    editstyle: {
        width: 50,
        height: 50,
        borderRadius: 60,
        backgroundColor: "#ffffff",
        alignSelf: 'flex-end',
        position: 'absolute',
        marginTop: 281,
        borderColor: "white",
        borderWidth: 4,
        padding: 10

    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    body: {
        marginTop: 40,

    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,

    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: "600",
        marginTop: 220
    },

    cardstyle: {
        height: 5,
        marginTop: 10,
        padding: 20,
        margin: 20,


    },
    inputText: {
        height: 50,
        paddingLeft: 70,
        color: "black",
        margin: -20

    },
    logStyle: {

        margin: 3,
        height: 50,
        width: 50,
        alignItems: 'center',
    },
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E',
    },

});

