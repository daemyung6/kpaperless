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

const styles = StyleSheet.create({
    outter: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    page_title: {
        fontFamily: config.font.Poppins[600],
        color: 'black',
        fontSize: 46 * config.ratio.width,
        textAlign: 'center',
        marginTop: 47 * config.ratio.height,
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
    input_box_small: {
        width: 462 * config.ratio.width
    },
    
    input_box_text: {
        fontFamily: config.font.Inter[400],
        fontSize: 26 * config.ratio.width,
        color: 'black',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    input_box_text_date: {
        marginTop: 15 * config.ratio.width,
        color: 'black'
    },
    input_box_placeholder: {
        marginTop: 15 * config.ratio.width,
        color: 'rgba(84, 89, 94, 0.6)'
    },
    inputBox_clearButton: {
        position: 'absolute',
        right: config.ratio.width * 32,
        width: config.ratio.width * 70,
        height: config.ratio.width * 70,
    },
    won: {
        position: 'absolute',
        right: config.ratio.width * 0,
        top: config.ratio.width * 10,
        fontFamily: config.font.Inter[600],
        color: '#54595E',
        fontSize: 40 * config.ratio.width
    },
    inputBox_clearButton_img: {
        width: undefined,
        height: config.ratio.width * 70,
        aspectRatio: 1 / 1,
    },
    get_vehicle_info_text: {
        fontFamily: config.font.Poppins[600],
        fontSize: 32 * config.ratio.width,
        color: 'white',
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
    inputBox_date_img: {
        width: undefined,
        height: config.ratio.width * 46,
        aspectRatio: 46 / 46,
        right: 0,
        top: 15 * config.ratio.width,
        position: 'absolute'
    },
    option_list: {
        width : 1100 * config.ratio.width,
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 50 * config.ratio.width,
        paddingBottom: 100 * config.ratio.width
    },
    option_label_text: {
        fontFamily: config.font.Inter[600],
        fontSize: 40 * config.ratio.width,
        marginLeft: 10 * config.ratio.width,
    },
    option_label: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    totall_pay_title: {
        fontFamily: config.font.Inter[600],
        textAlign: 'center',
        color: '#54595E',
        marginTop: 50 * config.ratio.width,
        fontSize: 40 * config.ratio.width,
    },
     totall_pay: {
        fontFamily: config.font.Inter[600],
        textAlign: 'center',
        color: '#002DCC',
        marginTop: 50 * config.ratio.width,
        fontSize: 73 * config.ratio.width,
    },
    option_list_text: {
        fontFamily: config.font.Inter[600],
        color: '#54595E',
        fontSize: 40 * config.ratio.width
    },
    footer_button: {
        width: 220 * config.ratio.width,
        height: 66 * config.ratio.width,
        backgroundColor: '#72757E',
        borderRadius: 8 * config.ratio.width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer_button_text: {
        color: 'white',
        fontFamily: config.font.Inter[700],
        fontSize: 25 * config.ratio.width,

    }
    
});


export default function Totall_info({nextPage, contractData, setContractData}) {

    setOnClickBack(function() {
        nextPage(-1)
    })

    function onClick_Page_ok_bt() {

        nextPage(1);
    }


    const [vehicle_name, set_vehicle_name] = useState(contractData.vehicle_name);
    const [vehicle_type, set_vehicle_type] = useState(contractData.vehicle_type);
    const [vehicle_totallPay, set_vehicle_totallPay] = useState((function() {
        let data = Number(contractData.vehicle_money) +
        Number(contractData.management_cost) +
        Number(contractData.commission_fee) +
        Number(contractData.performance_premium)

        return String(data);
    })());

    const [num1, set_num1] = useState('');
    const [num2, set_num2] = useState('');
    const [num3, set_num3] = useState('');
    const [num4, set_num4] = useState('');



    return (
        <View style={styles.outter} >
            <Header 
                title={'차 량 매 매 총 금 액'} 
                subtitle={`계약서 등록번호 ${contractData.name}`} 
                onBack={onClickBack}
            />
            <ScrollView>
                <View style={styles.row_col}>
                    <InputContents 
                        name='차량번호'
                        placeholder='차량번호를 입력해 주세요'
                        value={vehicle_name}
                        setValue={set_vehicle_name}
                        type='text'
                        issmall={true}
                    />
                    <InputContents 
                        name='차종'
                        placeholder='차종을 입력해 주세요'
                        value={vehicle_type}
                        setValue={set_vehicle_type}
                        type='text'
                        close={false}
                        issmall={true}
                    />
                </View>

                <View style={styles.row_col}>
                    <InputContents 
                        name='차량구입비용'
                        value={vehicle_totallPay}
                        setValue={set_vehicle_totallPay}
                        type='money'
                        close={false}
                        issmall={false}
                    />
                </View>

                <View style={styles.row_col}>
                    <InputContents 
                        name='취등록세'
                        placeholder='차량구매가의 7% + 채권가'
                        type='money'
                        close={false}
                        issmall={false}
                        value={num1}
                        setValue={set_num1}
                    />
                </View>

                <View style={styles.row_col}>
                    <InputContents 
                        name='관리비용'
                        placeholder='각 상사별 마스터 설정'
                        type='money'
                        close={false}
                        issmall={false}
                        value={num2}
                        setValue={set_num2}
                    />
                </View>

                <View style={styles.row_col}>
                    <InputContents 
                        name='매매수수료'
                        placeholder='각 상사별 마스터 설정'
                        type='money'
                        close={false}
                        issmall={false}
                        value={num3}
                        setValue={set_num3}
                    />
                </View>

                <View style={styles.row_col}>
                    <InputContents 
                        name='성능보험료'
                        placeholder='성능점검표에 정해진 금액이 출력'
                        type='money'
                        close={false}
                        issmall={false}
                        value={num4}
                        setValue={set_num4}
                    />
                </View>
                <Text style={styles.totall_pay_title}>총 차량 매매 금액</Text>
                <Text style={styles.totall_pay}>{
                    (function() {
                        let data = 
                            Number(vehicle_totallPay) +
                            Number(num1) +
                            Number(num2) + 
                            Number(num3) + 
                            Number(num4)

                        return data.toLocaleString('ko-KR') + '원'
                    })()
                }</Text>
                <View style={styles.option_list}>
                    <Text style={styles.option_list_text}>결제송금계좌</Text>
                    <TouchableOpacity style={styles.footer_button}>
                        <Text style={styles.footer_button_text}>조회</Text>
                    </TouchableOpacity>
                    <Text style={styles.option_list_text}>고객 잔액 송금계좌</Text>
                    <TouchableOpacity style={styles.footer_button}>
                        <Text style={styles.footer_button_text}>등록</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>


            <TouchableOpacity style={grobal_styles.page_ok_bt} onPress={onClick_Page_ok_bt}>
                <Text style={grobal_styles.page_ok_bt_text} >확인</Text>
            </TouchableOpacity>
        </View>
    )
}