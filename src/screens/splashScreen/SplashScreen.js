import React, { useEffect } from 'react'
import { View, Image, StyleSheet } from 'react-native'

export default SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('login')
        }, 3000)
    }, [])
    return (
        <View>
            <Image source={require('../../../assets/images/splash.png')} style={styles.Splash} />
        </View>
    )
};

const styles = StyleSheet.create({
    Splash: {
        resizeMode: "contain",
        flex: 1,
        width: 200
    }
})
