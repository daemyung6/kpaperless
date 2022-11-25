import React, { useState } from 'react';
import config from '../config.js';
import {
    StyleSheet,

} from 'react-native';




export let onClickBack = function() {}
export function setOnClickBack(func) {
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

export function Page() {
    const [contractData, setContractData] = useState({
        name: '22-30-000001',
    });

    const [pageIdx, setPageIdx] = useState(0);
    function nextPage(idx) {
        setPageIdx(pageIdx + idx);
    }
    const pageList = [
        Dealer_Agree,
        Customer_Agree,
    ]

    const Page = pageList[pageIdx];

    return <Page 
        contractData={contractData}
        setContractData={setContractData}
        nextPage={nextPage}
    />
}
