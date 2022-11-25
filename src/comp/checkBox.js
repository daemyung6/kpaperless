import React, { useState } from 'react';
import {
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import config from '../config.js';

export default function CheckBox({value, onPress, style}) {
    function onclick() {
        onPress();
    }

    const styles = StyleSheet.create({
        outter: {
            width: 50 * config.ratio.width,
            height: 50 * config.ratio.width,
            backgroundColor: value ? '#002DCC' : 'white',
            borderWidth: 2 * config.ratio.width,
            borderColor: 'black'
        },
    })

    return (
        <TouchableOpacity 
            style={[styles.outter, style]} 
            onPress={onclick}
        >
        </TouchableOpacity>
    )
}