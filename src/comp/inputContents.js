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

import { alert, onDatePick } from '../App.js';
import * as util from '../util.js';

const styles = StyleSheet.create({
    outter: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    page_title: {
        fontFamily: config.font.Poppins[600],
        color: 'black',
        fontSize: 46 * config.ratio.width,
        textAlign: 'center',
        marginTop: 47 * config.ratio.height,
    },
    input_box: {
        width: 970 * config.ratio.width,
        height: 80 * config.ratio.width,
        borderColor: '#002DCC',
        borderBottomWidth: 2,
        marginLeft: 'auto',
        marginRight: 'auto',
        flexDirection: 'row',
    },
    input_box_small: {
        width: 462 * config.ratio.width
    },
    
    input_box_text: {
        fontFamily: config.font.Inter[400],
        fontSize: 26 * config.ratio.width,
        color: 'black',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    input_box_text_date: {
        marginTop: 15 * config.ratio.width,
        color: 'black'
    },
    input_box_placeholder: {
        marginTop: 15 * config.ratio.width,
        color: 'rgba(84, 89, 94, 0.6)'
    },
    inputBox_clearButton: {
        position: 'absolute',
        right: config.ratio.width * 32,
        width: config.ratio.width * 70,
        height: config.ratio.width * 70,
    },
    won: {
        position: 'absolute',
        right: config.ratio.width * 0,
        top: config.ratio.width * 10,
        fontFamily: config.font.Inter[600],
        color: '#54595E',
        fontSize: 40 * config.ratio.width
    },
    inputBox_clearButton_img: {
        width: undefined,
        height: config.ratio.width * 70,
        aspectRatio: 1 / 1,
    },
    get_vehicle_info_text: {
        fontFamily: config.font.Poppins[600],
        fontSize: 32 * config.ratio.width,
        color: 'white',
    },
    input_title: {
        fontFamily: config.font.Inter[600],
        color: '#54595E',
        width: 970 * config.ratio.width,
        height: 55 * config.ratio.width,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 40 * config.ratio.width,
        marginTop: 45 * config.ratio.width,
    },
    row_col: {
        flexDirection: 'row',
        width : 970 * config.ratio.width,
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'space-between'
    },
    row_col_item: {
        width: 462 * config.ratio.width
    },
    inputBox_date_img: {
        width: undefined,
        height: config.ratio.width * 46,
        aspectRatio: 46 / 46,
        right: 0,
        top: 15 * config.ratio.width,
        position: 'absolute'
    },
    option_list: {
        width : 970 * config.ratio.width,
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    option_label_text: {
        fontFamily: config.font.Inter[600],
        fontSize: 40 * config.ratio.width,

    },
    option_label: {
        alignItems: 'center',
        flexDirection: 'row',
    }
});

export default function InputContents({name, issmall, value, setValue, placeholder, close, type}) {
    close = close === undefined ? true : close;

    let lastText = value;
    if(type === 'money') {
        return <View style={styles.row_col_item}>
        <Text style={styles.input_title}>{name}</Text>
        <View style={[styles.input_box, issmall && styles.input_box_small]}>
            <TextInput 
                style={styles.input_box_text} 
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                textContentType=''
                keyboardType='number-pad'
            />
            {
                close && <TouchableOpacity 
                    style={styles.inputBox_clearButton}
                    onPress={function() {setValue('')}}
                >
                    <Image
                        style={[styles.inputBox_clearButton, styles.inputBox_clearButton_img]}
                        source={require('../img/login-clear-icon.png')}
                    />
                </TouchableOpacity>
            }
            <Text style={styles.won}>원</Text>
            </View>
        </View>
    }
    if(type === 'text') {
        return <View style={styles.row_col_item}>
        <Text style={styles.input_title}>{name}</Text>
        <View style={[styles.input_box, issmall && styles.input_box_small]}>
            <TextInput 
                style={styles.input_box_text} 
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                textContentType=''
            />
            {
                close && <TouchableOpacity 
                    style={[styles.inputBox_clearButton, {right: -40 * config.ratio.width}]}
                    onPress={function() {setValue('')}}
                >
                    <Image
                        style={[styles.inputBox_clearButton, styles.inputBox_clearButton_img]}
                        source={require('../img/login-clear-icon.png')}
                    />
                </TouchableOpacity>
            }
            </View>
        </View>
    }
    if(type === 'date') {
        function onclick() {
            let date;
            if(value == '') {
                date = new Date();
            }
            else {
                date = new Date(value);
            }

            onDatePick(
                date, 
                function(date) {
                    console.log(date);
                    let dateStr = util.dateToString(date);
                    setValue(dateStr.substring(0, 10))
                }
            )
        }

        return <TouchableOpacity style={styles.row_col_item} onPress={onclick}>
            <Text style={styles.input_title}>{name}</Text>
            <View style={[styles.input_box, issmall && styles.input_box_small]}>
                {
                    value.length !== 0 
                    ? <Text style={[styles.input_box_text_date]} >{value}</Text>
                    : <Text style={[styles.input_box_placeholder]} >{placeholder}</Text>
                }
                
                <Image
                    style={styles.inputBox_date_img}
                    source={require('../img/date-icon.png')}
                />
            </View>
        </TouchableOpacity>
    }
}