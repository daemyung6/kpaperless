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

import { alert, setPage } from '../../App.js';
import Header from '../../comp/header.js';
import StatusBar from '../../comp/status-bar.js';
import CheckBox from '../../comp/checkBox.js';
import * as agreeText from '../../agree-text.js'; 
import { onClickBack, grobal_styles, setOnClickBack } from '../contract.js'; 


export default function Customer_Agree({nextPage, contractData, setContractData}) {
    setOnClickBack(function() {
        if(isViewMore) {
            onClickMoreBt();
            return;
        }
        nextPage(-1)
    })

    const [isCheckBox1, setisCheckBox1] = useState(contractData.customer_agree1);
    function onClickCheckBox1() {
        contractData.customer_agree1 = !contractData.customer_agree1;
        setContractData(contractData);

        setisCheckBox1(!isCheckBox1);
    }

    const [isCheckBox2, setisCheckBox2] = useState(contractData.customer_agree2);
    function onClickCheckBox2() {
        contractData.customer_agree2 = !contractData.customer_agree2;
        setContractData(contractData);

        setisCheckBox2(!isCheckBox2);
    }

    const [isViewMore, setIsViewMore] = useState(false);
    function onClickMoreBt() {
        setIsViewMore(!isViewMore);
    }

    function onClick_Page_ok_bt() {
        if(
            !isCheckBox1 ||
            !isCheckBox2
        ) {
            alert({
                img: 'error',
                bold: '동의가 필요 합니다.',
                callback: function () {}
            })
        }
        else {
            nextPage(1)
        }
    }

    const styles = StyleSheet.create({
        outter: {
            position: 'absolute',
            width: '100%',
            height: '100%',
        },
        StatusBar: {
            width: config.ratio.width * 600,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: config.ratio.height * 45
        },
        main_img: {
            height: undefined,
            width: config.ratio.width * 625,
            aspectRatio: 625 / 604,
            marginTop: config.ratio.height * 30,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        dot: {
            width: config.ratio.width * 9,
            height: config.ratio.width * 9,
            borderRadius: config.ratio.width * 9,
            backgroundColor: '#7D7D7D',
            top: config.ratio.width * 9,
            left: 0,
            position: 'absolute'
        },
        subtitle_margin: {
            width: config.ratio.width * 28,
        },
        title: {
            fontFamily: config.font.Inter[600],
            color: 'black',
            fontSize: config.ratio.width * 40,
            textAlign: 'center'
        },
        subtitle: {
            fontFamily: config.font.Inter[600],
            color: '#7D7D7D',
            fontSize: config.ratio.width * 29
        },
        subtitle_box: {
            flexDirection: 'row',
            justifyContent: "center",
            alignItems: "center",
            marginTop: config.ratio.height * 60,
            width: config.ratio.width * 733,
            position: 'relative',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        list_item_bt_box: {
            width: 930 * config.ratio.width,
            height: 130 * config.ratio.height,
            borderColor: '002DCC',
            alignItems: "center",
            flexDirection: 'row',
            borderBottomWidth: 1, 
            borderColor: '#002DCC',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        arrow_bt: {
            position: 'absolute',
            right: 0
        },
        checkBox: {
            marginLeft: 20 * config.ratio.width,
            marginRight: 39 * config.ratio.width,
        },
        check_text_red: {
            fontFamily: config.font.Inter[600],
            color: 'rgba(207, 24, 24, 0.8)'
        },
        check_text: {
            fontFamily: config.font.Inter[600],
            color: 'black'
        },
        moreData_outter: {
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: 'rgba(105, 105, 105, 0.5)',
            alignItems: "center",
            justifyContent: 'center',
        },
        moreData_inner: {
            width: 1153 * config.ratio.width,
            height: 1390 * config.ratio.width,
            padding: 80 * config.ratio.width,
            backgroundColor: 'white'
        },
        moreData_title: {
            fontFamily: config.font.Inter[600],
            fontSize: 60 * config.ratio.width,
            color: 'black'
        },
        moreData_text: {
            width: 1007 * config.ratio.width,
            height: 1000 * config.ratio.height,
            padding: 30 * config.ratio.width,
            backgroundColor: '#F8F8F8',
            borderWidth: 1,
            borderColor: '#3B3636'
        },
        moreData_bt: {
            width: 220 * config.ratio.width,
            height: 66 * config.ratio.height,
            alignItems: "center",
            justifyContent: 'center',
            backgroundColor: '#002DCC',
            marginTop: 67 * config.ratio.height,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        moreData_bt_text: {
            fontFamily: config.font.Inter[700],
            fontSize: 25 * config.ratio.width,
            color: 'white'
        },
        moreData_text_black: {
            fontFamily: config.font.Inter[600],
            color: 'black',
            fontSize: config.ratio.width * 30
        },
        moreData_text_red: {
            fontFamily: config.font.Inter[600],
            color: '#EB0000',
            fontSize: config.ratio.width * 30
        },

        margin: {
            height:  100 * config.ratio.height
        }
    });

    return (
        <View style={styles.outter} >
            <Header 
                title={'약 관 동 의'} 
                subtitle={`계약서 등록번호 ${contractData.name}`} 
                onBack={onClickBack}
            />
            <ScrollView>
                <StatusBar
                    style={styles.StatusBar}
                    items={[
                        '딜러약관동의',
                        '딜러/고객약관동의'
                    ]}
                    idx={1}
                />
                <Image
                    style={styles.main_img}
                    source={require('../../img/contract-agree.png')} 
                />
                <Text style={styles.title}>거래 약관을 확인하고, 약관에 동의해주세요.</Text>
                <View style={styles.subtitle_box}>
                    <View style={styles.dot} />
                    <View style={styles.subtitle_margin} />
                    <Text style={styles.subtitle}>필수 동의 사항에 체크해야 다음 단계로 이동이 가능합니다. </Text>
                </View>
                <View style={styles.margin}></View>
                <TouchableOpacity style={styles.list_item_bt_box} onPress={onClickMoreBt}>
                    <CheckBox 
                        style={styles.checkBox}
                        value={isCheckBox1} 
                        onPress={onClickCheckBox1} 
                    />
                    <Text style={styles.check_text_red}>{'(필수) '}</Text>
                    <Text style={styles.check_text}>딜러 거래 이용약관</Text>
                    <TouchableOpacity
                        style={[grobal_styles.right_arrow_bt, styles.arrow_bt]}
                        onPress={onClickMoreBt}
                    >
                        <Image 
                            style={grobal_styles.right_arrow_bt_img}
                            source={require('../../img/right-arrow-bt.png')}
                         />
                    </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity style={styles.list_item_bt_box} onPress={onClickMoreBt}>
                    <CheckBox 
                        style={styles.checkBox}
                        value={isCheckBox2} 
                        onPress={onClickCheckBox2} 
                    />
                    <Text style={styles.check_text_red}>{'(필수) '}</Text>
                    <Text style={styles.check_text}>고객 거래 이용약관</Text>
                    <TouchableOpacity
                        style={[grobal_styles.right_arrow_bt, styles.arrow_bt]}
                        onPress={onClickMoreBt}
                    >
                        <Image 
                            style={grobal_styles.right_arrow_bt_img}
                            source={require('../../img/right-arrow-bt.png')}
                         />
                    </TouchableOpacity>
                </TouchableOpacity>

                <Image style={grobal_styles.main_footer} source={require('../../img/main-footer-img.png')} />
                
            </ScrollView>
            <TouchableOpacity style={grobal_styles.page_ok_bt} onPress={onClick_Page_ok_bt}>
                <Text style={grobal_styles.page_ok_bt_text} >확인</Text>
            </TouchableOpacity>
            
            {
                isViewMore && <View style={styles.moreData_outter} >
                    <View style={styles.moreData_inner}>
                        <Text style={styles.moreData_title}>딜러/고객용 이용약관 확인</Text>
                        <View style={styles.moreData_text}>
                            <ScrollView >
                                <Text style={styles.moreData_text_black}>{agreeText.customer()}</Text>
                            </ScrollView>
                        </View>
                            <TouchableOpacity onPress={onClickMoreBt} style={styles.moreData_bt}>
                                <Text style={styles.moreData_bt_text}>확인</Text>
                            </TouchableOpacity>
                    </View>
                </View>
            }
        </View>
    )
}