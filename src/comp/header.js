import React, { useState } from 'react';
import config from '../config.js';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Keyboard,
    TouchableOpacity,
    ScrollView
} from 'react-native';

/**
 * 
 * @param {title, subtitle, onBack} props 
 * @returns 
 */
export default function Header(props) {
    const styles = StyleSheet.create({
        header: {
            width: '100%',
            height: 270 * config.ratio.height,
            backgroundColor: '#002DCC',
        },
        header_title: {
            fontFamily: config.font.Poppins[600],
            fontSize: 63 * config.ratio.width,
            color: 'white',
            textAlign: 'center',
            marginTop: 99 * config.ratio.height,
            letterSpacing: 10 * config.ratio.width
        },
        header_subtitle: {
            fontFamily: config.font.Poppins[400],
            fontSize: 37 * config.ratio.width,
            color: 'white',
            textAlign: 'center',
            marginTop: -30 * config.ratio.height
        },
        header_backbt: {
            width: 29 * config.ratio.width,
            height: 47 * config.ratio.width,
            position: 'absolute',
            top: 151 * config.ratio.height,
            left: 55 * config.ratio.width,
        },
        header_backbt_icon: {
            width: 47,
            height: config.ratio.width * 53,
            aspectRatio: 29 / 47,
        }
    });

    return (
        <View style={styles.header} >
            <Text style={styles.header_title}>{props.title}</Text>
            <Text style={styles.header_subtitle}>{props.subtitle}</Text>
            <TouchableOpacity 
                style={styles.header_backbt}
                onPress={props.onBack}
            > 
                <Image 
                    style={styles.header_backbt_icon}
                    source={require('../img/back-icon.png')}
                /> 
            </TouchableOpacity>
        </View>
    )
}