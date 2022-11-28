import React, { useState } from 'react';
import config from '../config.js';
import {
    StyleSheet,

} from 'react-native';




export let onClickBack = function() {}
export function setOnClickBack(func) {
    console.log('setOnClickBack');
    onClickBack = func;
}

export const grobal_styles = StyleSheet.create({
    right_arrow_bt: {
        width: 29 * config.ratio.width,
        height:  47 * config.ratio.width,
    },
    right_arrow_bt_img: {
        width: 29 * config.ratio.width,
        height: undefined,
        aspectRatio: 29 / 47,
    },
    page_ok_bt: {
        width: '100%',
        height: 178 * config.ratio.height,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#002DCC'
    },
    page_ok_bt_text : {
        fontFamily: config.font.Inter[600],
        fontSize: 40 * config.ratio.width,
        color: 'white',
    }
})

import Dealer_Agree from './contract/dealer_agree.js';
import Customer_Agree from './contract/customer_agree.js';
import Info from './contract/info.js';
import payment from './contract/payment.js';
import Pay_type from './contract/pay_type.js';
import Totall_info from './contract/totall_info';
import Check from './contract/check';
import Signature from './contract/signature.js';
import Done from './contract/done.js';


export function Page() {
    const [contractData, setContractData] = useState({
        name: '22-30-000001',
        customer_agree1: false,
        customer_agree2: false,
        dealer_agree: false,

        vehicle_number: '',
        vehicle_name: '',
        vehicle_id: '',
        vehicle_type: '',
        vehicle_year: '',
        distance_driven: '',

        vehicle_money: '',
        vehicle_money_date: '',
        contract_money: '',
        contract_money_date: '',
        balance: '',
        balance_date: '',
        management_cost: '',
        commission_fee: '',
        performance_premium: '',
        isForeclose: false,
        isMortgage: false,


    });

    const [pageIdx, setPageIdx] = useState(0);
    function nextPage(idx) {
        setPageIdx(pageIdx + idx);
    }
    const pageList = [
        Dealer_Agree,
        Customer_Agree,
        Info,
        payment,
        Pay_type,
        Totall_info,
        Check,
        Signature,
        Done
    ]

    const Page = pageList[pageIdx];

    return <Page 
        contractData={contractData}
        setContractData={setContractData}
        nextPage={nextPage}
    />
}
