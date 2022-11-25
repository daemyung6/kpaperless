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
        },
        margin: {
            height: config.ratio.height * 45
        }
    });

    return (
        <ScrollView style={styles.outter} >
            <Header title={'회원가입'} subtitle={'Sign up'} onBack={onClickBack}/>
            <View style={styles.margin} />
            <StatusBar
                style={styles.StatusBar}
                items={[
                    '회원유형선택',
                    '회원약관동의',
                    '본인인증',
                    '회원정보입력',
                    '회원가입완료',
                ]}
                idx={nowStep}
            />
        </ScrollView>
    )
}