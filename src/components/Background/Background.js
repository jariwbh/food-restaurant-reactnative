import React from 'react';
import { ImageBackground, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { background } from '../../components/Images/Image'

const Background = ({ children }) => (
    <ImageBackground source={background}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            {children}
        </KeyboardAvoidingView>
    </ImageBackground>
);

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    container: {
        flex: 1,
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'center',
    }
});

export default Background;
