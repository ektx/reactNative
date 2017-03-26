/*
  自定义按钮
  zwl 2016-10-12
  ------------------------------------------------
  复制以下代码到你的 index.ios.js 中在mac中查看效果
  ------------------------------------------------
*/

import React, { Component } from 'react';
import { 
  AppRegistry, 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
  TouchableHighlight, 
} from 'react-native';

class HelloWorldApp extends Component {
  myFunction = ()=> {
    // 自定义函数
    alert('你按了一下;)')
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello world!</Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={this.myFunction}
        >
          <Text style={styles.btnTxt}>你好!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 150,
    borderRadius: 20,
    backgroundColor: 'green',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  btnTxt: {
    textAlign: 'center',
    color: '#fff'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 32,
    color: '#09f',
    textAlign: 'center',
    margin: 10,
  }
});

AppRegistry.registerComponent('helloworld', () => HelloWorldApp);