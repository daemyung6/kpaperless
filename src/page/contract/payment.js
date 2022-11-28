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
        width : 970 * config.ratio.width,
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 50 * config.ratio.width
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
    }
    
});


export default function Payment({nextPage, contractData, setContractData}) {

    setOnClickBack(function() {
        nextPage(-1)
    })

    function onClick_Page_ok_bt() {
        if(
            (vehicle_money.length === 0) ||
            (contract_money.length === 0) ||
            (balance.length === 0) ||
            (management_cost.length === 0) ||
            (commission_fee.length === 0) ||
            (performance_premium.length === 0)
        ) {
            alert({
                img: 'error',
                bold: '입력란에 공백이 있습니다.',
                callback: function () {}
            })
            return;
        }

        if(
            Number(vehicle_money) !== Number(contract_money) + Number(balance)
        ) {
            alert({
                img: 'error',
                bold: '금액을 확인해 주세요.',
                callback: function () {}
            })
            return;
        }

        contractData.vehicle_money = vehicle_money;
        contractData.contract_money = contract_money;
        contractData.balance = balance;
        contractData.management_cost = management_cost;
        contractData.commission_fee = commission_fee;
        contractData.performance_premium = performance_premium;
        contractData.isForeclose = isForeclose;
        contractData.isMortgage = isMortgage;

        setContractData(contractData);

        nextPage(1);
    }


    const [vehicle_money, set_vehicle_money] = useState(contractData.vehicle_money);
    const [vehicle_money_date, set_vehicle_money_date] = useState(contractData.vehicle_money_date);

    const [contract_money, set_contract_money] = useState(contractData.contract_money);
    const [contract_money_date, set_contract_money_date] = useState(contractData.contract_money_date);

    const [balance, set_balance] = useState(contractData.balance);
    const [balance_date, set_balance_date] = useState(contractData.balance_date);

    const [management_cost, set_management_cost] = useState(contractData.management_cost);
    const [commission_fee, set_commission_fee] = useState(contractData.commission_fee);
    const [performance_premium, set_performance_premium] = useState(contractData.performance_premium);


    const [isForeclose, set_isForeclose] = useState(contractData.isForeclose);
    const [isMortgage, set_isMortgage] = useState(contractData.isMortgage);

    return (
        <View style={styles.outter} >
            <Header 
                title={'차 량 매 매 금 액 입 력'} 
                subtitle={`계약서 등록번호 ${contractData.name}`} 
                onBack={onClickBack}
            />
            <ScrollView>
                <View style={styles.row_col}>
                    <InputContents 
                        name='차량매매금액'
                        placeholder='차량매매금액을 입력해 주세요'
                        value={vehicle_money}
                        setValue={set_vehicle_money}
                        type='money'
                        issmall={true}
                    />
                    <InputContents 
                        name='날짜'
                        placeholder='날짜를 선택해 주세요'
                        value={vehicle_money_date}
                        setValue={function(text) {
                            set_vehicle_money_date(text)
                        }}
                        type='date'
                        issmall={true}
                    />
                </View>

                <View style={styles.row_col}>
                    <InputContents 
                        name='계약금'
                        value={contract_money}
                        setValue={set_contract_money}
                        type='money'
                        issmall={true}
                        placeholder='계약금을 입력해 주세요'
                    />
                    <InputContents 
                        name='날짜'
                        value={contract_money_date}
                        setValue={function(text) {
                            set_contract_money_date(text)
                        }}
                        type='date'
                        issmall={true}
                        placeholder='날짜를 선택해 주세요'
                    />
                </View>

                <View style={styles.row_col}>
                    <InputContents 
                        name='잔금'
                        value={balance}
                        setValue={set_balance}
                        type='money'
                        issmall={true}
                        placeholder='잔금을 입력해 주세요'
                    />
                    <InputContents 
                        name='날짜'
                        value={balance_date}
                        setValue={function(text) {
                            set_balance_date(text)
                        }}
                        type='date'
                        issmall={true}
                        placeholder='날짜를 선택해 주세요'
                    />
                </View>

                <View style={styles.row_col}>
                    <InputContents 
                        name='관리비용'
                        value={management_cost}
                        setValue={set_management_cost}
                        type='money'
                        issmall={false}
                    />
                </View>
                <View style={styles.row_col}>
                    <InputContents 
                        name='알선수수료'
                        value={commission_fee}
                        setValue={set_commission_fee}
                        type='money'
                        issmall={false}
                    />
                </View>
                <View style={styles.row_col}>
                    <InputContents 
                        name='성능보험료'
                        value={performance_premium}
                        setValue={set_performance_premium}
                        type='money'
                        issmall={false}
                    />
                </View>
                
                <View style={styles.option_list}>
                    <View style={styles.option_label}>
                        <CheckBox
                            value={isForeclose}
                            onPress={function() {
                                set_isForeclose(!isForeclose)
                            }}
                        />
                        <Text style={styles.option_label_text}>압류</Text>
                    </View>
                    <View style={styles.option_label}>
                        <CheckBox
                            value={isMortgage}
                            onPress={function() {
                                set_isMortgage(!isMortgage)
                            }}
                        />
                        <Text style={styles.option_label_text}>저당</Text>
                    </View>
                    <View style={styles.option_label}>
                        <CheckBox
                            value={!isForeclose && !isMortgage}
                            onPress={function() {
                                set_isForeclose(false)
                                set_isMortgage(false)
                            }}
                        />
                        <Text style={styles.option_label_text}>없음</Text>
                    </View>
                </View>
                
                <Text style={styles.totall_pay_title}>총 차량 매매 금액</Text>
                <Text style={styles.totall_pay}>{
                    (function() {
                        let data = Number(vehicle_money) +
                        Number(management_cost) +
                        Number(commission_fee) +
                        Number(performance_premium)

                        return data.toLocaleString('ko-KR') + '원'
                    })()
                }</Text>
            </ScrollView>


            <TouchableOpacity style={grobal_styles.page_ok_bt} onPress={onClick_Page_ok_bt}>
                <Text style={grobal_styles.page_ok_bt_text} >확인</Text>
            </TouchableOpacity>
        </View>
    )
}