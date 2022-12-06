import React, { useState } from 'react';
import config from '../../config.js';
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

import Header from '../../comp/header.js';

import { onClickBack, grobal_styles, setOnClickBack } from '../contract.js'; 
import { WebView } from 'react-native-webview';
import html from '../../sign.html.js';


export default function Per_2({nextPage, contractData, setContractData}) {
    setOnClickBack(function() {
        nextPage(-1)
    })

    function onClick_Page_ok_bt() {
        nextPage(1);
    }

    const [zoom, setZoom] = useState(100);
    const [isSign, set_isSign] = useState(false);
    const [isClickType, set_isClickType] = useState(false);
    const [signData1, set_signData1] = useState('')
    const [signData2, set_signData2] = useState('');

    let WebViewRef;
    function getWebViewRef(e) {
        WebViewRef = e;
    }

    const styles = StyleSheet.create({
        outter: {
            position: 'absolute',
            width: '100%',
            height: '100%',
        },
        canvas_view: {
            width: config.ratio.width * 866 * (zoom / 100),
            height: config.ratio.width * 1349 * (zoom / 100),
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        canvas_view_img: {
            width: undefined,
            height: config.ratio.width * 1362 * (zoom / 100),
            aspectRatio: 940 / 1362,
        },
        control: {
            flexDirection: 'row',
            position: 'absolute',
            top: 270 * config.ratio.width,
            left: 70 * config.ratio.width,
            padding: 0* config.ratio.width, 
            backgroundColor: '#EEEEEE',
            borderRadius: 10 * config.ratio.width, 
            alignItems: 'center',
            padding: 10 * config.ratio.width
        },
        control_click_text: {
            fontFamily: config.font.Poppins[700],
            fontSize: 50 * config.ratio.width,
            color: 'black'
        },
        popup: {
            top: 0,
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(105, 105, 105, 0.5)',
            justifyContent: "center",
            alignItems: "center",
        },
        popup_inner: {
            position: 'absolute',
            width: 1117 * config.ratio.width,
            height: 694 * config.ratio.height,
            backgroundColor: 'rgba(220, 220, 220, 0.85)',
            borderRadius: 25 * config.ratio.width,
        },
        popup_title: {
            fontFamily: config.font.Inter[600],
            textAlign: 'center',
            marginTop: 45 * config.ratio.width,
            marginBottom: 18 * config.ratio.width,
        },
        popup_web_box: {
            width: 931 * config.ratio.width,
            height: 413 * config.ratio.width,
            backgroundColor: 'white',
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        bt_line: {
            bottom: 26 * config.ratio.width,
            width: 814 * config.ratio.width,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginRight: 'auto',
            marginLeft: 'auto'
        },
        bt: {
            width: 220 * config.ratio.width,
            height: 66 * config.ratio.width, 
            backgroundColor: '#72757E',
            justifyContent: 'center',
            alignItems: 'center'

        },
        bt_text: {
            fontFamily: config.font.Inter[700],
            color: 'white',
            fontSize: 25 * config.ratio.width
        },
        popup_text: {
            fontFamily: config.font.Inter[400],
            fontSize: 20 * config.ratio.width,
            marginTop: 20 * config.ratio.width,
            marginBottom: 40 * config.ratio.width,
            textAlign: 'center'
        },
        sign_bt1: {
            position: 'absolute',
            top: '95%',
            left: '90%',
        },
        sign_bt2: {
            position: 'absolute',
            top: '95%',
            left: '40%',
        },
        
        sign_img: {
            width: undefined,
            height: config.ratio.width * 66 * (zoom / 100),
            aspectRatio: 66 / 66,
        },
        signData1: {
            position: 'absolute',
            top: '80%',
            left: '50%',
            width: undefined,
            height: config.ratio.width * 413 * (zoom / 100),
            aspectRatio: 931 / 413,
        },
        signData2: {
            position: 'absolute',
            top: '80%',
            left: '-10%',
            width: undefined,
            height: config.ratio.width * 413 * (zoom / 100),
            aspectRatio: 931 / 413,
        }
    });


    return (<>
        <View style={styles.outter} >
            <Header 
                title={'성 능 점 검 표'} 
                subtitle={`계약서 등록번호 ${contractData.name}`} 
                onBack={onClickBack}
            />
            <ScrollView >
                <ScrollView horizontal={zoom < 120 ? false : true}>
                    <View style={styles.canvas_view}>
                        <Image style={styles.canvas_view} source={require('../../img/per-2.png')} />
                    </View>
                </ScrollView>
            </ScrollView>

            <View style={styles.control}>
                <TouchableOpacity onPress={function() {
                    setZoom(zoom - 10)
                }}>
                    <Text style={styles.control_click_text}>-</Text>
                </TouchableOpacity>

                <Text style={[styles.control_click_text, {
                    marginLeft: 50 * config.ratio.width,
                    marginRight: 50 * config.ratio.width,
                }]}>{zoom}%</Text>

                <TouchableOpacity onPress={function() {
                    setZoom(zoom + 10)
                }}>
                    <Text style={styles.control_click_text}>+</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={grobal_styles.page_ok_bt} onPress={onClick_Page_ok_bt}>
                <Text style={grobal_styles.page_ok_bt_text} >확인</Text>
            </TouchableOpacity>
        </View>
    </>)
}
