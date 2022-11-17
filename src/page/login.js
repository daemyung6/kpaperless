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

import SwitchButton from '../comp/switchButton.js';
import { alert, setPage } from '../App.js';



export function Page() {
    const [auto_login_value, set_auto_login] = useState(false);
    function auto_login_onclick() {
        set_auto_login(!auto_login_value);
    }
    const [save_userID_value, set_save_userID] = useState(false);
    function save_userID_onclick() {
        set_save_userID(!save_userID_value)
    }

    const [user_id, set_user_id] = useState('');
    const [password, set_password] = useState('');

    function onChangeUserID(text) {
        set_user_id(text);
    }

    // const [isClickInput, setisClickInput] = useState(false);

    // Keyboard.addListener('keyboardDidShow', function () {
    //     setisClickInput(true);
    // });
    // Keyboard.addListener('keyboardDidHide', function () {
    //     setisClickInput(false);
    // });

    function onClickLoginButton() {
        alert({
            img: 'login',
            bold: '등록되지 않은 회원입니다.\n정식 딜러 인증을 위해 회원가입을 해주세요',
            thin: '본 서비스는 회원가입 후 이용이 가능합니다',
            callback: function () {
                console.log('callback')
            }
        })
    }

    const styles = StyleSheet.create({
        outter: {
            position: 'absolute',
            bottom: 0,
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
            fontFamily: config.font.Poppins[600],
            marginTop: - 66 * config.ratio.height,
            fontSize: 63 * config.ratio.width,
            textAlign: 'center',
            color: 'black'
        },
        subtitle: {
            fontFamily: config.font.Poppins[400],
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
            fontFamily: config.font.Poppins[500],
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
            marginTop: 65 * config.ratio.height,
            flexDirection: 'row',
        },
        btBox_text: {
            color: '#15686D',
            fontSize: 27 * config.ratio.height,
        },
        btBox_text_margin: {
            width: 13 * config.ratio.width
        },
        btBox_bt_margin: {
            marginLeft: 33 * config.ratio.width
        },
        logiButton: {
            width: 900 * config.ratio.width,
            height: 94 * config.ratio.height,
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: config.appHeight,
            backgroundColor: '#002DCC',
            marginTop: 0,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 83 * config.ratio.height,
        },
        logiButton_text: {
            fontFamily: config.font.Poppins[600],
            fontSize: 39 * config.ratio.width,
            color: 'white'
        },
        footer: {
            width: 900 * config.ratio.width,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 33 * config.ratio.height,
            flexDirection: 'row',
            justifyContent: "center",
            alignItems: "center",
        },
        footer_text: {
            color: 'rgba(0, 0, 0, 0.8)',
            fontFamily: config.font.Poppins[400],
            fontSize: 27 * config.ratio.width
        },
        link_bt: {
            fontFamily: config.font.Poppins[700],
            color: '#15686D',
            fontSize: 27 * config.ratio.width,
        },
        footer_bar: {
            width: 3 * config.ratio.width,
            height: 56 * config.ratio.height,
            marginLeft: 44 * config.ratio.width,
            marginRight: 44 * config.ratio.width,
            backgroundColor: '#002DCC'
        }
    });

    return (
        <ScrollView style={styles.outter} onClick={function () { console.log(23) }}>
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
                    onChangeText={onChangeUserID}
                    value={user_id}
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
                <Text style={styles.btBox_text}>자동로그인</Text>
                <View style={styles.btBox_text_margin} />
                <SwitchButton
                    style={styles.btBox_bt}
                    value={auto_login_value}
                    onPress={auto_login_onclick}
                />
                <View style={styles.btBox_bt_margin} />
                <Text style={styles.btBox_text}>사원번호 저장</Text>
                <View style={styles.btBox_text_margin} />
                <SwitchButton
                    value={save_userID_value}
                    onPress={save_userID_onclick}
                />
            </View>
            <TouchableOpacity style={styles.logiButton} onPress={onClickLoginButton}>
                <Text style={styles.logiButton_text}>Login</Text>
            </TouchableOpacity>
            <View style={styles.footer}>
                <Text style={styles.footer_text}>Don’t have an account ? </Text>
                <TouchableOpacity onPress={function() {
                    setPage('createUser');
                }}>
                    <Text style={styles.link_bt}>Sign Up</Text>
                </TouchableOpacity>
                <View style={styles.footer_bar} />
                <TouchableOpacity>
                    <Text style={styles.link_bt}>Forget Password</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}