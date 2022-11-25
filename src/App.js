import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  BackHandler,
  ToastAndroid,
} from 'react-native';


import Alert from './page/alert.js';
import * as main from './page/main.js';
import * as contract from './page/contract.js';
import * as createUser from './page/createUser.js';


const pageList = {
  main: main,
  createUser: createUser,
  contract: contract,
}


const App = () => {
  // const [page, setpage] = useState('main');
  // const [page, setpage] = useState('createUser');
  const [page, setpage] = useState('contract');
  pageName = page;
  _setPage = setpage;

  const [alertData, setAlertData] = useState({ isView: false })
  _alertData = alertData;
  _setAlertData = setAlertData;
  
  const Page = pageList[page].Page;
  return (
    <View style={styles.App}>

      <Page />

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
export function closeAlert() {
  let returnData = {};
  var keys = Object.keys(_alertData);
  for (let i = 0; i < keys.length; i++) {
    returnData[keys[i]] = _alertData[keys[i]];
  }
  returnData.isView = false;

  _setAlertData(returnData);
};

export let pageName;
let _setPage;
export function setPage(name) {
  _setPage(name);
}

let isReadyExit = false;
BackHandler.addEventListener('hardwareBackPress', function () {
  if (typeof pageList[pageName].onClickBack === 'undefined') {
    if (!isReadyExit) {
      ToastAndroid.show("버튼을 한번 더 누르면 종료됩니다.", ToastAndroid.SHORT);
      isReadyExit = true;
      setTimeout(function () {
        isReadyExit = false;
      }, 3000);
      return true;
    }
    return false;
  }
  if (typeof pageList[pageName].onClickBack === 'function') {
    pageList[pageName].onClickBack();
    return true;
  }
})

export let userData = {
  isLogin: false
}
export function setUserData(data) {
  userData = data;
}