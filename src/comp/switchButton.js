import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    TouchableOpacity ,
    View,
} from 'react-native';
import config from '../config.js';

function SwitchButton(props) {

    function onclick() {
        props.onPress();
    }

    const styles = StyleSheet.create({
        outter: {
            width: 110 * config.ratio.width,
            height: 40 * config.ratio.width,
            backgroundColor: props.value ? '#002DCC' : '#ACACAC',
            borderRadius: 20
        },
        text: {
            fontFamily: 'Poppins-Regular',
            color: 'white',
            marginLeft: !props.value ? 10 * config.ratio.width : 48 * config.ratio.width,
            fontSize: 27 * config.ratio.width
        },
        bt: {
            width: (40) * config.ratio.width,
            height: (40) * config.ratio.width,
            borderColor: '#002DCC',
            borderWidth: 4 * config.ratio.width,
            backgroundColor: 'white',
            borderRadius: (40 - 8) * config.ratio.width,
            position: 'absolute',
            right: !props.value ? 0 : undefined,
        }
    })

    return (
        <TouchableOpacity 
            style={styles.outter} 
            onPress={onclick}
            activeOpacity={1}
        >
            <Text style={styles.text}>{props.value ? 'ON' : 'OFF'}</Text>
            <View style={styles.bt}></View>
            
        </TouchableOpacity>
    )
}

export default SwitchButton;