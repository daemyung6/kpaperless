import React, {useState} from 'react';
import config from '../config.js';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Keyboard,
} from 'react-native';

import SwitchButton from '../comp/switchButton.js';


export default function Login() {
    const [auto_login_value, set_auto_login] = useState(false);
    function auto_login_onclick() {
        set_auto_login(!auto_login_value);
    }
    const [save_userID_value, set_save_userID] = useState(false);
    function save_userID_onclick() {
        set_save_userID(!save_userID_value)
    }

    const [isClickInput, setisClickInput] = useState(false);

    Keyboard.addListener('keyboardDidShow', function() {
        setisClickInput(true);
    });
    Keyboard.addListener('keyboardDidHide', function() {
        setisClickInput(false);
    });

    const styles = StyleSheet.create({
        outter: {
            position: 'absolute',
            bottom: !isClickInput ? undefined : config.APP_HEIGHT / 6,
            width: '100%',
            height: '100%',
    
        },
        backgroundImg: {
            position: 'absolute',
            left: 0,
            top: 0,
            width: '37%',
            height: undefined,
            aspectRatio: 452 / 370,
        },
        mainImg: {
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: config.ratio.height * 44,
            height: 944 * config.ratio.height,
            width: undefined,
            aspectRatio: 1 / 1,
            borderColor: 'black'
        },
        title: {
            fontFamily: 'Poppins-Bold',
            marginTop: - 66 * config.ratio.height,
            fontSize: 63 * config.ratio.width,
            textAlign: 'center',
            color: 'black'
        },
        subtitle: {
            fontFamily: 'Poppins-Regular',
            marginTop: '-0.03%',
            fontSize: 37 * config.ratio.width,
            textAlign: 'center',
            color: 'black'
        },
        inputBox: {
            width: 901 * config.ratio.width,
            height: 103 * config.ratio.height,
            backgroundColor: 'white',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 31 * config.ratio.width,
            borderRadius: config.height,
            flexDirection: "row",
            flexWrap: "wrap",
            alignContent: 'center',
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center'
        },
        inputBox_input: {
            width: (901 - (103 * 2)) * config.ratio.width,
            height: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
            fontFamily: 'Poppins-Regular',
            color: 'rgba(0, 0, 0, 0.51)',
            fontSize: 27 * config.ratio.width
        },
        inputBox_icon: {
            position: 'absolute',
            left: config.ratio.width * 32,
            width: undefined,
            height: config.ratio.width * 53,
            aspectRatio: 1 / 1,
        },
        inputBox_clearButton: {
            position: 'absolute',
            right: config.ratio.width * 32,
            width: undefined,
            height: config.ratio.width * 70,
            aspectRatio: 1 / 1,
        },
        inputBox_pw_hide_icon: {
            position: 'absolute',
            right: config.ratio.width * 123,
            width: config.ratio.width * 53,
            height: undefined,
            aspectRatio: 1 / 1,
        },
        btBox: {
            width: 900 * config.ratio.width,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        btBox_label:{
            flexDirection: "row",
            flexWrap: "wrap",
            color: '#15686D'
        },
    });

    return (
        <View style={styles.outter} onClick={function () { console.log(23) }}>
            <Image
                style={styles.backgroundImg}
                source={require('../img/login-background.png')}
            />
            <Image
                style={styles.mainImg}
                source={require('../img/login-key.png')}
            />
            <Text style={styles.title}>Welcome K-PAPERLESS</Text>
            <Text style={styles.subtitle}>LOGIN</Text>
            <View style={styles.inputBox}>
                <TextInput
                    style={styles.inputBox_input}
                    placeholder='사원번호를 입력해 주세요'
                    
                />
                <Image
                    style={styles.inputBox_icon}
                    source={require('../img/login-user-icon.png')}
                />
                <Image
                    style={styles.inputBox_clearButton}
                    source={require('../img/login-clear-icon.png')}
                />
            </View>
            <View style={styles.inputBox}>
                <TextInput
                    style={styles.inputBox_input}
                    placeholder='비밀번호를 입력해 주세요'
                    secureTextEntry={true}
                />
                <Image
                    style={styles.inputBox_icon}
                    source={require('../img/login-password-icon.png')}
                />
                <Image
                    style={styles.inputBox_pw_hide_icon}
                    source={require('../img/login-pw-hide-icon.png')}
                />
                <Image
                    style={styles.inputBox_clearButton}
                    source={require('../img/login-clear-icon.png')}
                />
            </View>
            <View style={styles.btBox}>
                <Text>자동로그인</Text>
                <SwitchButton value={auto_login_value} onPress={auto_login_onclick} />
                <Text>사원번호 저장</Text>
                <SwitchButton value={save_userID_value} onPress={save_userID_onclick} />
            </View>
        </View>
    )
}