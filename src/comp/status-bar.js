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

export default function StatusBar({style, items, idx}) {
    return (
        <View style={style}>
        <View style={styles.outter} >
            {(function() {
                let arr = [];
                for (let i = 0; i < items.length; i++) {
                    arr.push(<Item  
                        name={items[i]}
                        isFirst={i === 0}
                        isLast={i === items.length - 1}
                        isSelect={idx === i}
                        key={i}
                    />)                   
                }
                return arr;
            })()}
        </View></View>
    )
}

function Item({name, isFirst, isLast, isSelect}) {

    return (
        <View style={styles.item}>
                <Text style={[styles.name, isSelect && styles.name_active]}>{name}</Text>
                <View style={styles.button}>
                    <View style={styles.button_back}>
                        <View style={[styles.line, isFirst && styles.hide_line]} />
                        <View style={[styles.line, isLast  && styles.hide_line]} />
                    </View>
                    <View style={styles.button_front}>
                        <View style={[styles.ball, isSelect && styles.ball_active]} >
                            { isSelect && <View style={styles.ball_inner} /> }
                        </View> 
                    </View>
                </View>
        </View>
    )
}
const styles = StyleSheet.create({
    outter: {
        width: '100%',
        height: 99 * config.ratio.height,
        flexDirection: 'row',
        justifyContent: "center",
    },
    name: {
        fontFamily: config.font.Inter[700],
        textAlign: 'center',
        letterSpacing: config.ratio.width * 6
    },
    name_active: {
        color: '#1334A9'
    },
    item: {
        flex: 1,
        height: '100%'
    },
    button: {
        width: '100%',
        height: config.ratio.width * 44,
        position: 'absolute',
        bottom: 0,
    },
    button_back: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        alignContent: 'center',
        alignItems: "center",
        flexDirection: "row",
    },
    button_front: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        alignContent: 'center',
        alignItems: "center",
    },
    line: {
        width: '50%',
        height: 1,
        backgroundColor: '#002DCC',
    },
    hide_line: {
        backgroundColor: undefined
    },
    ball: {
        width: config.ratio.width * 40,
        height: config.ratio.width * 40,
        borderRadius: config.ratio.width * 40,
        borderWidth: 1,
        borderColor: '#707070',
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "center",
    },
    ball_active: {
        borderColor: '#002DCC',
    },
    ball_inner: {
        width: config.ratio.width * 22,
        height: config.ratio.width * 22,
        borderRadius: config.ratio.width * 40,
        backgroundColor: '#002DCC',
    }
});