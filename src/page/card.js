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

import { alert, setPage } from '../App.js';
import Header from '../comp/header.js';
import StatusBar from '../comp/status-bar.js';


export function onClickBack() {
    setPage('main');
}
export function Page() {
    const [nowStep, setNowStep] = useState(0);

    const styles = StyleSheet.create({
        outter: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0
        },
        main_img: {
            width: config.ratio.width * 1200,
            height: undefined,
            aspectRatio: 1200 / 1654,
        },
        main_img2: {
            width: config.ratio.width * 1200,
            height: undefined,
            aspectRatio: 1200 / 1920,
        },
        bt: {
            position: 'absolute',
            width: 400 * config.ratio.width,
            height: 900 * config.ratio.width,
            top: 526 * config.ratio.width,
            right: 0 * config.ratio.width,
        },
        bt2: {
            position: 'absolute',
            width: 900 * config.ratio.width,
            height: 280 * config.ratio.width,
            bottom: 0 * config.ratio.width,
            right: 130 * config.ratio.width,
        },
        bt3: {
            position: 'absolute',
            width: 300 * config.ratio.width,
            height: 300 * config.ratio.width,
            top: 0 * config.ratio.width,
            right: 0 * config.ratio.width,
        }
    });

    const [isView, set_isView] = useState(false)

    return (<>
        <View style={styles.outter} >
            <Header title={'모 바 일 사 원 증'} subtitle={''} onBack={onClickBack}/>
            <Image style={styles.main_img} source={require('../img/card.png')} />

            
        </View>
    </>)
}