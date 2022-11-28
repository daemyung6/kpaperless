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

import { alert } from '../../App.js';
import Header from '../../comp/header.js';
import { onClickBack, grobal_styles, setOnClickBack } from '../contract.js'; 


export default function Info({nextPage, contractData, setContractData}) {
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
        input_box_text: {
            fontFamily: config.font.Inter[400],
            fontSize: 26 * config.ratio.width,
            width: '100%',
            height: '100%',
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
        get_vehicle_info: {
            width : 390 * config.ratio.width,
            height: 82 * config.ratio.width,
            backgroundColor: '#002DCC',
            borderRadius: 390 * config.ratio.width,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 82 * config.ratio.height,
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

        }
    });

    setOnClickBack(function() {
        nextPage(-1)
    })

    function onClick_Page_ok_bt() {
        if(
            (vehicle_number.length === 0) ||
            (vehicle_name.length === 0) ||
            (vehicle_id.length === 0) ||
            (vehicle_type.length === 0) ||
            (vehicle_year.length === 0) ||
            (distance_driven.length === 0)
        ) {
            alert({
                img: 'error',
                bold: '입력란에 공백이 있습니다.',
                callback: function () {}
            })
            return;
        }

        contractData.vehicle_number = vehicle_number;
        contractData.vehicle_name = vehicle_name;
        contractData.vehicle_id = vehicle_id;
        contractData.vehicle_type = vehicle_type;
        contractData.vehicle_year = vehicle_year;
        contractData.distance_driven = distance_driven;

        setContractData(contractData);

        nextPage(1);
    }

    function get_vehicle_info() {
        if(vehicle_number.length === 0) {
            alert({
                img: 'error',
                bold: '등록번호를 조회하지 못했습니다.',
                callback: function () {}
            })
            return;
        }
        set_vehicle_name('test_vehicle_name');
        set_vehicle_id('test_vehicle_id');
        set_vehicle_type('test_vehicle_type');
        set_vehicle_year('test_vehicle_year');
        set_distance_driven('test_distance_driven');
    }

    const [vehicle_number, set_vehicle_number] = useState(contractData.vehicle_number);
    const [vehicle_name, set_vehicle_name] = useState(contractData.vehicle_name);
    const [vehicle_id, set_vehicle_id] = useState(contractData.vehicle_id);
    const [vehicle_type, set_vehicle_type] = useState(contractData.vehicle_type);
    const [vehicle_year, set_vehicle_year] = useState(contractData.vehicle_year);
    const [distance_driven, set_distance_driven] = useState(contractData.distance_driven);

    return (
        <View style={styles.outter} >
            <Header 
                title={'차 량 정 보 표 시'} 
                subtitle={`계약서 등록번호 ${contractData.name}`} 
                onBack={onClickBack}
            />
            <ScrollView>
                <Text style={styles.page_title}>자동차 등록번호</Text>
                <View style={styles.input_box}>
                    <TextInput 
                        style={styles.input_box_text} 
                        placeholder='자동차 등록번호를 입력해 주세요'
                        value={vehicle_number}
                        onChangeText={function(text) {set_vehicle_number(text)}}
                    />
                    <TouchableOpacity 
                        style={styles.inputBox_clearButton}
                        onPress={function() {set_vehicle_number('')}}
                    >
                        <Image
                            style={styles.inputBox_clearButton_img}
                            source={require('../../img/login-clear-icon.png')}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.get_vehicle_info} onPress={get_vehicle_info}>
                    <Text style={styles.get_vehicle_info_text}>정보 불러오기</Text>
                </TouchableOpacity>

                <Text style={styles.input_title}>차명</Text>
                <View style={styles.input_box}>
                    <TextInput 
                        style={styles.input_box_text} 
                        value={vehicle_name}
                        onChangeText={function(text) {set_vehicle_name(text)}}
                    />
                </View>

                <Text style={styles.input_title}>차대번호</Text>
                <View style={styles.input_box}>
                    <TextInput 
                        style={styles.input_box_text} 
                        value={vehicle_id}
                        onChangeText={function(text) {set_vehicle_id(text)}}
                    />
                </View>

                <Text style={styles.input_title}>차종</Text>
                <View style={styles.input_box}>
                    <TextInput 
                        style={styles.input_box_text} 
                        value={vehicle_type}
                        onChangeText={function(text) {set_vehicle_type(text)}}
                    />
                </View>

                <Text style={styles.input_title}>년식</Text>
                <View style={styles.input_box}>
                    <TextInput 
                        style={styles.input_box_text} 
                        value={vehicle_year}
                        onChangeText={function(text) {set_vehicle_year(text)}}
                    />
                </View>

                <Text style={styles.input_title}>주행거리</Text>
                <View style={styles.input_box}>
                    <TextInput 
                        style={styles.input_box_text} 
                        value={distance_driven}
                        onChangeText={function(text) {set_distance_driven(text)}}
                    />
                </View>

            </ScrollView>




            <TouchableOpacity style={grobal_styles.page_ok_bt} onPress={onClick_Page_ok_bt}>
                <Text style={grobal_styles.page_ok_bt_text} >확인</Text>
            </TouchableOpacity>
        </View>
    )
}