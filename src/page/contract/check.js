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

import { confirm, alert } from '../../App.js';
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
        justifyContent: 'space-between',
        alignItems: 'center',
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

    },
    inputBox_arrow_img: {
        width: undefined,
        height: config.ratio.width * 30,
        aspectRatio: 47 / 29,
        top: 2 * config.ratio.width,
        marginRight: 42 * config.ratio.width,
    },
    text_box: {
        borderBottomWidth: 2,
        borderColor: '#002DCC',
        paddingTop: 28 * config.ratio.width,
        paddingBottom: 28 * config.ratio.width,
        width: 883 * config.ratio.width,
        fontFamily: config.font.Inter[600],
        color: '#54595E',
        fontSize: 32 * config.ratio.width,
        alignItems: 'center',
        marginBottom: 13 * config.ratio.width
    },
    more_info_input: {
        marginRight: 'auto'
    },
    left_margin: {
        flex: 1
    },
    add_icon: {
        position: 'absolute',
        right: 0,
        width: undefined,
        height: config.ratio.width * 24,
        aspectRatio: 1 / 1,
    },
    
});


export default function Check({nextPage, contractData, setContractData}) {
    

    setOnClickBack(function() {
        nextPage(-1)
    })

    function onClick_Page_ok_bt() {
        if(
            !check1 ||
            !check2 ||
            !check3 ||
            !check4 
        ) {
            alert({
                img: 'error',
                bold: '필수 고지를 확인해주세요',
                callback: function () {}
            })
            return
        }
        confirm({
            text: '특약 사항이 없습니까?',
            callback: function (flag) {
                if(flag) {
                    nextPage(1)
                }
            }
        });
    }

    const [check1, set_check1] = useState(false);
    const [check2, set_check2] = useState(false);
    const [check3, set_check3] = useState(false);
    const [check4, set_check4] = useState(false);

    const [moreText, set_moreText] = useState('');
    const [moreDataArr, set_moreDataArr] = useState([]);

    function onClickAddButton() {
        moreDataArr.push(moreText);
        set_moreDataArr([...moreDataArr]);
        set_moreText('')
    }

    function Item({text, onPress, value}) {
        return <View style={styles.row_col}>
            <TouchableOpacity onPress={onPress}>
                {
                    value 
                    ? <Image
                        style={[
                            styles.inputBox_arrow_img
                        ]}
                        source={require('../../img/on-arrow-icon.png')}
                    />
                    : <Image
                        style={[
                            styles.inputBox_arrow_img
                        ]}
                        source={require('../../img/off-arrow-icon.png')}
                    />
                }
            </TouchableOpacity>
            <Text style={styles.text_box}>{text}</Text>
        </View>
    }
    function MoreDataItem({text, idx}) {
        return <View style={styles.row_col}>
            <View style={styles.left_margin} />
            <Text style={[styles.text_box, styles.more_info_input]} >{text}</Text>
            <TouchableOpacity onPress={function() {
                moreDataArr.splice(idx, 1);
                let temp = [...moreDataArr];
                set_moreDataArr(temp);
            }}>
                <Image
                    style={[
                        styles.add_icon,
                        {transform: [{rotate: '45deg'}]}
                    ]}
                    source={require('../../img/add-icon.png')}
                />
            </TouchableOpacity>
        </View>
    }
    function MoreDataList({data}) {
        let arr = [];
        for (let i = 0; i < data.length; i++) {
            arr.push(<MoreDataItem text={data[i]} key={i} idx={i}/>)
        }
    
        return arr;
    }

    return (
        <View style={styles.outter} >
            <Header 
                title={'필 수 고 지 / 특 약 사 항'} 
                subtitle={`계약서 등록번호 ${contractData.name}`} 
                onBack={onClickBack}
            />
            <ScrollView>
                <Text style={[
                    styles.totall_pay_title,
                    {
                        marginBottom: 90 * config.ratio.width,
                        marginTop: 90 * config.ratio.width
                    }
                ]}>필수고지 체크</Text>
                <Item 
                    text={'정식 등록 된 딜러와 상담 중 이십니까?'} 
                    value={check1}
                    onPress={function() {
                        set_check1(!check1)
                    }}
                />
                <Item 
                    text={'딜러와 실매물을 확인 하셨습니까?'} 
                    value={check2}
                    onPress={function() {
                        set_check2(!check2)
                    }}
                />
                <Item 
                    text={'차량 성능 점검지는 확인 하셨습니까?'} 
                    value={check3}
                    onPress={function() {
                        set_check3(!check3)
                    }}
                />
                <Item 
                    text={'양도인(알선)딜러에게 차량금액, 관리비용, 수수료를 고지 받으셨습니까?'} 
                    value={check4}
                    onPress={function() {
                        set_check4(!check4)
                    }}
                />
                <Text style={[
                    styles.totall_pay_title,
                    {
                        marginBottom: 90 * config.ratio.width,
                        marginTop: 90 * config.ratio.width
                    }
                ]}>특이사항 입력</Text>
                <View style={styles.row_col}>
                    <View style={styles.left_margin} />
                    <TextInput 
                        style={[styles.text_box, styles.more_info_input]} 
                        placeholder='특약 사항을 입력해 주세요'
                        value={moreText}
                        onChangeText={set_moreText}
                    />
                    <TouchableOpacity onPress={onClickAddButton}>
                        <Image
                            style={[
                                styles.add_icon
                            ]}
                            source={require('../../img/add-icon.png')}
                        />
                    </TouchableOpacity>
                </View>
                <MoreDataList data={moreDataArr} />
                
            </ScrollView>


            <TouchableOpacity style={grobal_styles.page_ok_bt} onPress={onClick_Page_ok_bt}>
                <Text style={grobal_styles.page_ok_bt_text} >확인</Text>
            </TouchableOpacity>
        </View>
    )
}
