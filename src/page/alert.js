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

const imgList = {
    login : {
        src : require('../img/alert-img-login.png'),
        width: 399.6,
        height: 397.83,
    }
}

function Alert(props) {
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
            width: 753 * config.ratio.width,
            height: 696 * config.ratio.height,
            backgroundColor: 'rgba(240, 240, 240, 0.6)',
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
        }
        
    })
    function onclickCloseButton() {
        console.log(123);
    }

    return (
        <View style={styles.outter}>
            <View style={styles.inner} >
                <View style={styles.main_img_box} >
                    <Image 
                        source={imgList[props.data.img].src} 
                        style={styles.main_img}
                    />
                </View>
                <Text style={styles.bold}>{props.data.bold}</Text>
                <Text style={styles.thin}>{props.data.thin}</Text>
                
                <TouchableOpacity>
                    <Text>확인</Text>
                </TouchableOpacity>
            
                <TouchableOpacity style={styles.closeButton} onPress={onclickCloseButton}>
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