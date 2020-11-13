import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Card } from 'react-native-elements'

export default class Profile extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
                    <View style={styles.bodyContent}>
                        <Text style={styles.name}>John Doe</Text>
                    </View>
                    <Feather name="edit" size={24} color="#F67600" style={styles.editstyle} />
                </View>
                <View style={styles.cardstyle}>
                    <Card>
                        <Text>My Order</Text>

                    </Card>
                    <Card >

                        <Text>Offers</Text>

                    </Card>
                    <Card >

                        <Text>Contact Us</Text>

                    </Card>
                    <Card >

                        <Text>About Us</Text>

                    </Card>
                    <Card >

                        <Text>Log Out</Text>

                    </Card>


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
        height: 100,
        marginTop: 50,
        padding: 20,
        margin: 20,

    }
    // info: {
    //     fontSize: 16,
    //     color: "#00BFFF",
    //     marginTop: 10
    // },
    // description: {
    //     fontSize: 16,
    //     color: "#696969",
    //     marginTop: 10,
    //     textAlign: 'center'
    // },
    // buttonContainer: {
    //     marginTop: 10,
    //     height: 45,
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     marginBottom: 20,
    //     width: 250,
    //     borderRadius: 30,
    //     backgroundColor: "#563522",
    // }, btnText: {
    //     color: "white",
    //     fontWeight: 'bold',
    // },
});

