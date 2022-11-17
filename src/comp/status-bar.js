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

export default function StatusBar({items, idx}) {
    return (
        <View style={styles.outter} >
            {(function() {
                let arr = [];
                for (let i = 0; i < items.length; i++) {
                    arr.push(<Item  
                        name={items[i]}
                        isFirst={i === 0}
                        isLast={i === items.length - 1}
                    />)                   
                }
                return arr;
            })()}
        </View>
    )
}

function Item({name, isFirst, isLast}) {
    return (
        <View style={styles.item}>
                <Text style={styles.name}>{name}</Text>
                <View style={styles.button}>
                    <View style={styles.line} />
                    <View style={styles.line} />
                    <View style={styles.ball} />
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
        textAlign: 'center'
    },
    item: {
        flex: 1,
        height: '100%'
    },
    item: {
        flex: 1,
        height: '100%'
    }
});