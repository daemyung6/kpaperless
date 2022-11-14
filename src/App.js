import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import Login from './page/login.js';

const App = () => {

  return (
    <View style={styles.App}> 
     <Login />
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
