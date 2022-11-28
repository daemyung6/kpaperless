import React, { useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity ,
    View,
    Image,
    Button
} from 'react-native';
import config from '../config.js';
import { closeConfirm } from '../App.js';

const imgList = {
    login : {
        src : require('../img/alert-img-login.png'),
        width: 399.6,
        height: 397.83,
    },
    error : {
        src : require('../img/alert-img-error.png'),
        width: 316,
        height: 316,
    },
}

function Confirm({data}) {
    const{text, callback} = data;

    const innerWidth = 753 * config.ratio.width;
    const styles = StyleSheet.create({
        outter: {
            top: 0,
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(105, 105, 105, 0.5)',
            justifyContent: "center",
            alignItems: "center",
        },
        inner: {
            position: 'absolute',
            width: innerWidth,
            height: 380 * config.ratio.height,
            backgroundColor: 'rgba(220, 220, 220, 0.85)',
            borderRadius: 25 * config.ratio.width
        },
        closeButton: {
            position: 'absolute',
            top: 24 * config.ratio.width,
            right: 24 * config.ratio.width,
        },
        closeButton_image: {
            width: 46 * config.ratio.width,
            height: 46 * config.ratio.width,
        },
        main_img_box: {
            width: '100%',
            height: 447 * config.ratio.height,
            justifyContent: "center",
            alignItems: "center",
        },
        bold: {
            fontSize: 27 * config.ratio.width,
            fontFamily: config.font.Inter[600],
            borderColor: 'black'
        },
        text_box: {
            width: '100%',
            height: 275 * config.ratio.width,
            justifyContent: 'center',
            alignItems: 'center',
        },
        okButton : {
            width: 249 * config.ratio.width,
            height: 66 * config.ratio.height,
            backgroundColor: '#1334A9',
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5 * config.ratio.width,
        },
        cancleButton : {
            width: 249 * config.ratio.width,
            height: 66 * config.ratio.height,
            backgroundColor: '#707070',
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5 * config.ratio.width,
        },
        okButton_text: {
            fontFamily: config.font.Inter[700],
            color: 'white',
            fontSize: 25 * config.ratio.width
        },
        bt_line: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 600 * config.ratio.width,
            position: 'absolute',
            bottom: 40 * config.ratio.width,
            right: 75 * config.ratio.width,
        }
        
    })
    function onclickCloseButton(flag) {
        closeConfirm();
        if(typeof callback === 'function') {
            callback(flag);
        }
    }

    return (
        <View style={styles.outter}>
            <View style={styles.inner} >

                <View style={styles.text_box}>
                    <Text style={styles.bold}>{text}</Text>
                </View>

                <View style={styles.bt_line}>
                    <TouchableOpacity 
                        style={styles.okButton}
                        onPress={function() {
                            onclickCloseButton(true)
                        }}
                    >
                        <Text style={styles.okButton_text}>확인</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.cancleButton}
                        onPress={function() {
                            onclickCloseButton(false)
                        }}
                    >
                        <Text style={styles.okButton_text}>취소</Text>
                    </TouchableOpacity>
                </View>
                
            
                <TouchableOpacity 
                    style={styles.closeButton} 
                    onPress={onclickCloseButton}
                >
                    <Image 
                        source={require('../img/alert-close-bt.png')} 
                        style={styles.closeButton_image}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Confirm;