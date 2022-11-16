import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import Alert from './page/alert.js';
import Login from './page/login.js';


const App = () => {
  const [ alertData, setAlertData ] = useState({ isView: false })
  _alertData = alertData;
  _setAlertData = setAlertData;

  return (
    <View style={styles.App}> 
      <Login />
      {alertData.isView && <Alert data={alertData} />}
    </View>
  );
};

const styles = StyleSheet.create({
  App: {
    backgroundColor: '#EEEEEE',
    width: '100%',
    height: '100%',
  }
});

export default App;




let _alertData, _setAlertData;
export function alert(data) {
  let returnData = {
    isView: true
  };
  var keys = Object.keys(data);
  for (let i = 0; i < keys.length; i++) {
    returnData[keys[i]] = data[keys[i]];
  }
  _setAlertData(returnData);
};

setTimeout(function() {
  alert({
    bold: '등록되지 않은 회원입니다.\n정식 딜러 인증을 위해 회원가입을 해주세요',
    thin: '본 서비스는 회원가입 후 이용이 가능합니다',
    img: 'login',
    callback: function() {
      console.log('callback')
    }
  })
}, 1000)