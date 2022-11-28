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
import DatePicker from 'react-native-date-picker'

import Alert from './page/alert.js';
import Confirm from './page/confirm.js';
import * as main from './page/main.js';
import * as contract from './page/contract.js';
import * as createUser from './page/createUser.js';
import * as list from './page/list.js';

const pageList = {
  main: main,
  createUser: createUser,
  contract: contract,
  list: list,
}


const App = () => {
  console.log('render App');
  const [page, setpage] = useState('main');

  pageName = page;
  _setPage = setpage;

  const [alertData, setAlertData] = useState({ isView: false })
  _alertData = alertData;
  _setAlertData = setAlertData;

  const [confirmData, setConfirmData] = useState({ isView: false })
  _confirmData = confirmData;
  _setConfirmData = setConfirmData;


  const [dateOpen, setDateOpen] = useState(false)
  _setDateOpen = setDateOpen;
  const [date, setDate] = useState(new Date())
  _date = date;
  _setDate = setDate;
  
  const Page = pageList[page].Page;
  return (
    <View style={styles.App}>

      <Page />

      {alertData.isView && <Alert data={alertData} />}
      {confirmData.isView && <Confirm data={confirmData} />}
      {
        dateOpen && <DatePicker
          modal
          open={dateOpen}
          date={date}
          mode='date'
          locale='ko'
          onConfirm={(date) => {
            setDateOpen(false)
            _setDatecallback(date);
          }}
          onCancel={() => {
            setDateOpen(false)
          }}
        />
      }
      
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


let _dateOpen, _setDateOpen, _date, _setDate, _setDatecallback;
export function onDatePick(initDate, callback) {
  _setDate(initDate);
  _setDateOpen(true);
  _setDatecallback = callback;
}



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


let _confirmData, _setConfirmData;
export function confirm(data) {
  console.log(data)
  let returnData = {
    isView: true
  };
  var keys = Object.keys(data);
  for (let i = 0; i < keys.length; i++) {
    returnData[keys[i]] = data[keys[i]];
  }
  _setConfirmData(returnData);
};
export function closeConfirm() {
  let returnData = {};
  var keys = Object.keys(_confirmData);
  for (let i = 0; i < keys.length; i++) {
    returnData[keys[i]] = _confirmData[keys[i]];
  }
  returnData.isView = false;
  _setConfirmData(returnData);
};

export let pageName;
let _setPage;
export function setPage(name) {
  _setPage(name);
}

let isReadyExit = false;
BackHandler.addEventListener('hardwareBackPress', function () {
  if (
    (typeof pageList[pageName].onClickBack === 'undefined') ||
    !pageList[pageName].onClickBack()
  ) {
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