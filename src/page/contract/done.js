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

import { setPage } from '../../App.js';

import { onClickBack, grobal_styles, setOnClickBack } from '../contract.js'; 


export default function Done({nextPage, contractData, setContractData}) {
    setOnClickBack(function() {
        nextPage(-1)
    })

    function onClick_Page_ok_bt() {
        setPage('main');
    }

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
        main_img: {
            width: undefined,
            height: config.ratio.width * 767,
            aspectRatio: 1 / 1,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 135 * config.ratio.width
        },
        body: {
            fontFamily: config.font.Inter[600],
            fontSize: 40 * config.ratio.width,
            textAlign: 'center',
            color: 'black'
        }
    });

    let text = 
`성공적으로 서명하여
계약서 등록번호 22-30-000001의
계약이 완료되었습니다`


    return (
        <View style={styles.outter} >
            <Header 
                title={'계 약 완 료'} 
                subtitle={`계약서 등록번호 ${contractData.name}`} 
                onBack={onClickBack}
            />
            <ScrollView >
               <Image
                    style={styles.main_img}
                    source={require('../../img/dont-main-img.png')} 
                />
                <Text style={styles.body}>{text}</Text>
            </ScrollView>

            <TouchableOpacity style={grobal_styles.page_ok_bt} onPress={onClick_Page_ok_bt}>
                <Text style={grobal_styles.page_ok_bt_text} >확인</Text>
            </TouchableOpacity>
        </View>
     
    )
}
