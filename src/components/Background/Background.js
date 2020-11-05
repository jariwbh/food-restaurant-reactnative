import React from 'react';
import { ImageBackground, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { background } from '../../components/Images/Image'

const Background = ({ children }) => (
    <ImageBackground source={background} style={styles.background}>
        <KeyboardAvoidingView behavior="padding">
            {children}
        </KeyboardAvoidingView>
    </ImageBackground>
);

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%'
    }
});

export default Background;
