/*
  自定义组件按钮
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

// 引入自定义的按钮
import Button from './Demo/button/myBtn';

class HelloWorldApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello world!</Text>

        { /* 自定义 props 属性 */}
        <Button text="确认" bgColor="green" data-obj={{a: 'test'}}/>
        <Button text="取消" bgColor="#ccc" fun={()=>{alert('你点击了取消')}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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