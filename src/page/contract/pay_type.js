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

import { alert, onDatePick } from '../../App.js';
import Header from '../../comp/header.js';
import StatusBar from '../../comp/status-bar.js';
import CheckBox from '../../comp/checkBox.js';
import { onClickBack, grobal_styles, setOnClickBack } from '../contract.js'; 
import * as util from '../../util.js';
import InputContents from '../../comp/inputContents.js';


export default function Pay_type({nextPage, contractData, setContractData}) {
    setOnClickBack(function() {
        nextPage(-1)
    })

    function onClick_Page_ok_bt() {
        nextPage(1)
    }

    const [vehicle_money, set_vehicle_money] = useState(contractData.vehicle_money);
    const [isViewMore, set_isViewMore] = useState(false);
    const [pay_type, set_pay_type] = useState('');

    const [isOnPay, set_isOnPay] = useState(true);

    const styles = StyleSheet.create({
        outter: {
            position: 'absolute',
            width: '100%',
            height: '100%',
        },
    
        row_col: {
            flexDirection: 'row',
            width : 970 * config.ratio.width,
            marginLeft: 'auto',
            marginRight: 'auto',
            justifyContent: 'space-between'
        },
        row_col_item: {
            width: 462 * config.ratio.width
        },
        row_col_item: {
            width: 462 * config.ratio.width
        },
        input_title: {
            fontFamily: config.font.Inter[600],
            color: '#54595E',
            width: 970 * config.ratio.width,
            height: 55 * config.ratio.width,
            marginLeft: 'auto',
            marginRight: 'auto',
            fontSize: 40 * config.ratio.width,
            marginTop: 45 * config.ratio.width,
        },
        input_box: {
            width: 970 * config.ratio.width,
            height: 80 * config.ratio.width,
            borderColor: '#002DCC',
            borderBottomWidth: 2,
            marginLeft: 'auto',
            marginRight: 'auto',
            flexDirection: 'row',
        },
        input_box_placeholder: {
            marginTop: 15 * config.ratio.width,
            color: 'rgba(84, 89, 94, 0.6)',
            textAlign: 'center',
            width: '100%'
        },
        input_box_text: {
            marginTop: 15 * config.ratio.width,
            color: 'black',
            textAlign: 'center',
            width: '100%'
        },
        inputBox_arrow_img: {
            width: undefined,
            height: config.ratio.width * 46,
            aspectRatio: 30 / 48,
            right: 0,
            top: 15 * config.ratio.width,
            position: 'absolute',
            transform: !isViewMore ? [{rotate: '-90deg'}] : [{rotate: '90deg'}],
        },
    });

    return (
        <View style={styles.outter} >
            <Header 
                title={'지 불 방 식'} 
                subtitle={`계약서 등록번호 ${contractData.name}`} 
                onBack={onClickBack}
            />
            <ScrollView>
                <View style={styles.row_col}>
                    <InputContents 
                        name='차량매매금액'
                        value={(function() {
                            let data = Number(contractData.vehicle_money) +
                            Number(contractData.management_cost) +
                            Number(contractData.commission_fee) +
                            Number(contractData.performance_premium)
    
                            return data.toLocaleString('ko-KR')
                        })()}
                        setValue={set_vehicle_money}
                        type='money'
                        issmall={false}
                        placeholder='차량매매금액을 입력해 주세요'
                    />
                </View>

                <View style={styles.row_col}>
                    <View style={styles.row_col_item}>
                        <Text style={styles.input_title}>지불방법</Text>
                        <TouchableOpacity style={[styles.input_box]} onPress={function() {
                            set_isViewMore(!isViewMore);
                        }}>
                            {
                                pay_type === '' 
                                ? <Text style={styles.input_box_placeholder}>지불 방식을 선택하세요</Text>
                                : <Text style={styles.input_box_text}>{pay_type === 'cash' ? '현금' : '카드'}</Text>
                            }
                            <View  style={styles.inputBox_clearButton} >
                                <Image
                                    style={[
                                        styles.inputBox_arrow_img
                                    ]}
                                    source={require('../../img/right-arrow-bt.png')}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                {
                    (isViewMore) && <>
                    <View style={styles.row_col}>
                        <TouchableOpacity style={styles.input_box} onPress={function() {
                            set_pay_type('cash');
                            set_isViewMore(false);
                        }}>
                            <Text style={styles.input_box_placeholder}>현금</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row_col}>
                        <TouchableOpacity style={styles.input_box} onPress={function() {
                            set_pay_type('card');
                            set_isViewMore(false);
                        }}>
                            <Text style={styles.input_box_placeholder}>카드</Text>
                        </TouchableOpacity>
                    </View>
                </>
                }
                {
                    (pay_type === 'cash') && <View style={option.outter}>
                        <TouchableOpacity style={option.item} onPress={function() {
                            set_isOnPay(true)
                        }}>
                            <View style={[option.ball, isOnPay && option.ball_active]} >
                                { isOnPay && <View style={option.ball_inner} /> }
                            </View> 
                            <Text style={[option.name]}>일시불</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={option.item} onPress={function() {
                            set_isOnPay(false)
                        }}>
                            <View style={[option.ball, !isOnPay && option.ball_active]} >
                                { !isOnPay && <View style={option.ball_inner} /> }
                            </View> 
                            <Text style={[option.name]}>할부</Text>
                        </TouchableOpacity>
                    </View>
                }
                {
                    (pay_type === 'cash') && (!isOnPay) && <>
                        <View style={styles.row_col}>
                            <InputContents 
                                name='매매 금액'
                                type='money'
                                issmall={false}
                            />
                        </View>
                        <View style={styles.row_col}>
                            <InputContents 
                                name='부대 비용'
                                type='money'
                                issmall={false}
                            />
                        </View>
                    </>
                }
                
            
            </ScrollView>


            <TouchableOpacity style={grobal_styles.page_ok_bt} onPress={onClick_Page_ok_bt}>
                <Text style={grobal_styles.page_ok_bt_text} >확인</Text>
            </TouchableOpacity>
        </View>
    )
}


const option = StyleSheet.create({
    outter: {
        width: 500 * config.ratio.width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 100 * config.ratio.width
    },
    name: {
        fontFamily: config.font.Inter[700],
        textAlign: 'center',
        letterSpacing: config.ratio.width * 6
    },
    name_active: {
        color: '#1334A9'
    },
    item: {
        height: '100%',
        flexDirection: 'row',
    },
    button: {
        flexDirection: 'row',
        width: '100%',
        height: config.ratio.width * 44,
        bottom: 0,
    },
    button_back: {

        width: '100%',
        height: '100%',
        alignContent: 'center',
        alignItems: "center",
        flexDirection: "row",
    },
    button_front: {

        width: '100%',
        height: '100%',
        alignContent: 'center',
        alignItems: "center",
    },
    line: {
        width: '50%',
        height: 1,
        backgroundColor: '#002DCC',
    },
    hide_line: {
        backgroundColor: undefined
    },
    ball: {
        width: config.ratio.width * 40,
        height: config.ratio.width * 40,
        borderRadius: config.ratio.width * 40,
        borderWidth: 1,
        borderColor: '#707070',
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "center",
    },
    ball_active: {
        borderColor: '#002DCC',
    },
    ball_inner: {
        width: config.ratio.width * 22,
        height: config.ratio.width * 22,
        borderRadius: config.ratio.width * 40,
        backgroundColor: '#002DCC',
    }
});