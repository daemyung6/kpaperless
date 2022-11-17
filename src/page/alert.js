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
import { closeAlert } from '../App.js';

const imgList = {
    login : {
        src : require('../img/alert-img-login.png'),
        width: 399.6,
        height: 397.83,
    }
}

function Alert(props) {
    let img = 'login';
    let bold = '';
    let thin = '';

    if(
        (typeof props.data.img !== 'undefined') &&
        (typeof imgList[props.data.img] !== 'undefined')   
    ) {
        img = props.data.img;
    }

    if(typeof props.data.bold !== 'undefined') {
        bold = props.data.bold
    }

    if(typeof props.data.thin !== 'undefined') {
        thin = props.data.thin
    }



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
            height: 696 * config.ratio.height,
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
        main_img: {
            width: imgList[props.data.img].height * config.ratio.height,
            height: undefined,
            aspectRatio: imgList[props.data.img].width / imgList[props.data.img].height,
        },
        bold: {
            fontSize: 27 * config.ratio.width,
            fontFamily: config.font.Inter[600],
            textAlign: 'center',
        },
        thin: {
            fontSize: 20 * config.ratio.width,
            fontFamily: config.font.Inter[400],
            textAlign: 'center',
        },
        okButton : {
            position: 'absolute',
            width: 629 * config.ratio.width,
            height: 66 * config.ratio.height,
            left: (innerWidth - 629 * config.ratio.width) / 2,
            bottom: 30 * config.ratio.height,
            backgroundColor: '#1334A9',
            justifyContent: "center",
            alignItems: "center",
        },
        okButton_text: {
            fontFamily: config.font.Inter[700],
            color: 'white',
            fontSize: 25 * config.ratio.width
        },
        
    })
    function onclickCloseButton() {
        closeAlert();
        if(typeof props.data.callback === 'function') {
            props.data.callback();
        }
    }

    return (
        <View style={styles.outter}>
            <View style={styles.inner} >
                <View style={styles.main_img_box} >
                    <Image 
                        source={imgList[img].src} 
                        style={styles.main_img}
                    />
                </View>
                <Text style={styles.bold}>{props.data.bold}</Text>
                <Text style={styles.thin}>{props.data.thin}</Text>
                
                <TouchableOpacity 
                    style={styles.okButton}
                    onPress={onclickCloseButton}
                >
                    <Text style={styles.okButton_text}>확인</Text>
                </TouchableOpacity>
            
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

export default Alert;