import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements'

export default class BottomNavigator extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: '#f8f4f4'
            }}>
                <View style={{ position: 'absolute', alignSelf: 'center', backgroundColor: '#f8f4f4', width: 70, height: 70, borderRadius: 35, bottom: 25, zIndex: 10 }}>
                    <Icon
                        name='add'
                        type='material'
                        color='#f00'
                        // containerStyle={{ alignSelf: 'center' }}
                        reverse
                        size={28}
                        onPress={() => { }}
                    />
                </View>

            </View>
        );
    }
}
