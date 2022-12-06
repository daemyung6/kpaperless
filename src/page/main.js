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
    ScrollView,
    Button
} from 'react-native';

import SwitchButton from '../comp/switchButton.js';
import { alert, setPage, userData, setUserData, } from '../App.js';


let _onClickBack;
export function onClickBack() {
    if(typeof _onClickBack === 'function') {
        _onClickBack();
        return
    }
    return false
}

let _setIsLogin;
export function Page() {
    const [isLogin, setIsLogin] = useState(userData.isLogin);
    // const [isLogin, setIsLogin] = useState(true);
    _setIsLogin = function(flag) {
        setIsLogin(flag);
    }

    return isLogin ? <Main /> : <Login />
}
function Main() {
    const styles = StyleSheet.create({
        outter: {
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: '100%',
        },
        title: {
            fontSize: 60 * config.ratio.width,
            margin: 20 * config.ratio.width,
        },
        bt: {
            margin: 20 * config.ratio.width,
        },
        main_img: {
            width: config.ratio.width * 1200,
            height: undefined,
            aspectRatio: 1200 / 1920,
        },
        contract_bt1: {
            position: 'absolute',
            width: 340 * config.ratio.width,
            height: 340 * config.ratio.width,
            top: 1335* config.ratio.width,
            left: 160* config.ratio.width,
        },
        contract_bt2: {
            position: 'absolute',
            width: 340 * config.ratio.width,
            height: 340 * config.ratio.width,
            top: 1335* config.ratio.width,
            left: 700* config.ratio.width,
        },
        menu: {
            position: 'absolute',
            width: 100 * config.ratio.width,
            height: 100 * config.ratio.width,
            top: 100* config.ratio.width,
            right: 50* config.ratio.width,
        },
        close: {
            position: 'absolute',
            width: 100 * config.ratio.width,
            height: 100 * config.ratio.width,
            top: 60* config.ratio.width,
            right: 700 * config.ratio.width,
        },
        bt1: {
            position: 'absolute',
            width: 252 * config.ratio.width,
            height: 170 * config.ratio.width,
            top: 0* config.ratio.width,
            right: 470 * config.ratio.width,
        },
        bt2: {
            position: 'absolute',
            width: 252 * config.ratio.width,
            height: 170 * config.ratio.width,
            top: 0* config.ratio.width,
            right: 223 * config.ratio.width,
        },
        list_bt: {
            position: 'absolute',
            width: 710 * config.ratio.width,
            height: 170 * config.ratio.width,
            top: 168 * config.ratio.width,
            right: 0 * config.ratio.width,
        }
    })

    const [isMenu, setIsmenu] = useState(false);
    const [menuNum, set_menuNum] = useState(0);

    return (<>
        {
            !isMenu && <ScrollView style={styles.outter}>
                <Image style={styles.main_img} source={require('../img/login-img.jpg')} />
                <TouchableOpacity style={styles.contract_bt1} onPress={function() {
                    setPage('contract')
                }}></TouchableOpacity>
                <TouchableOpacity style={styles.contract_bt2} onPress={function() {
                    setPage('contract')
                }}></TouchableOpacity>

                <TouchableOpacity style={styles.menu} onPress={function() {
                    setIsmenu(true);
                    _onClickBack = function() {
                        setIsmenu(false);
                        _onClickBack = null
                    }
                }}></TouchableOpacity>
            </ScrollView>
        }
        {
            (isMenu && (menuNum === 0)) && <View style={styles.outter}>
            <Image style={styles.main_img} source={require('../img/login-img-1.jpg')} />
            <TouchableOpacity style={styles.close} onPress={function() {
                setIsmenu(false);
                _onClickBack = null
            }}></TouchableOpacity>
            <TouchableOpacity style={styles.bt2} onPress={function() {
                set_menuNum(1)
            }}></TouchableOpacity>
            <TouchableOpacity style={styles.list_bt} onPress={function() {
                setPage('list')
            }}></TouchableOpacity>
        </View> 
        }
        {
            (isMenu && (menuNum === 1)) && <View style={styles.outter}>
            <Image style={styles.main_img} source={require('../img/login-img-2.jpg')} />
            <TouchableOpacity style={styles.close} onPress={function() {
                setIsmenu(false);
                _onClickBack = null
            }}></TouchableOpacity>
            <TouchableOpacity style={styles.bt1} onPress={function() {
                set_menuNum(0)
            }}></TouchableOpacity>
            <TouchableOpacity style={styles.list_bt} onPress={function() {
                setPage('card')
            }}></TouchableOpacity>
        </View> 
        }
    </>)
}

function Login() {
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
    function onChangePassword(text) {
        set_password(text)
    }

    // const [isClickInput, setisClickInput] = useState(false);

    // Keyboard.addListener('keyboardDidShow', function () {
    //     setisClickInput(true);
    // });
    // Keyboard.addListener('keyboardDidHide', function () {
    //     setisClickInput(false);
    // });

    function onClickLoginButton() {
        console.log(user_id, password)
        if(
            (user_id !== '1234') ||
            (password !== '1234')
        ) {
            alert({
                img: 'login',
                bold: '등록되지 않은 회원입니다.\n정식 딜러 인증을 위해 회원가입을 해주세요',
                thin: '본 서비스는 회원가입 후 이용이 가능합니다',
                callback: function () {
                    console.log('callback')
                }
            })
        }
        else {
            let temp = {...userData};
            temp.isLogin = true;
            setUserData(temp);
            _setIsLogin(true);
        }
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
            color: 'black',
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
            width: config.ratio.width * 70,
            height: config.ratio.width * 70,
        },
        inputBox_clearButton_img: {
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
        },
        main_footer_img: {
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: config.ratio.height * 16,
            height: undefined,
            width: config.ratio.width * 430,
            aspectRatio: 430 / 111,
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
                <TouchableOpacity style={styles.inputBox_clearButton} onPress={function() {
                    set_user_id('');
                }}>
                    <Image
                        style={styles.inputBox_clearButton_img}
                        source={require('../img/login-clear-icon.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.inputBox}>
                <TextInput
                    style={styles.inputBox_input}
                    placeholder='비밀번호를 입력해 주세요'
                    onChangeText={onChangePassword}
                    value={password}
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
                <TouchableOpacity style={styles.inputBox_clearButton} onPress={function() {
                    set_password('');
                }}>
                    <Image
                        style={styles.inputBox_clearButton_img}
                        source={require('../img/login-clear-icon.png')}
                    />
                </TouchableOpacity>
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
            <Image style={styles.main_footer_img} source={require('../img/main-footer-img.png')} />

        </ScrollView>
    )
}