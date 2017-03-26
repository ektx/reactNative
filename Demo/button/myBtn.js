/*
  自定义的按钮组件
  --------------------------------------
*/

import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
} from 'react-native';

export default class Button extends Component {
  myFunction = ()=> {
    // 自定义函数
    const { fun } = this.props;

    if (fun) {
      fun()
    } else {
      alert('你按了一下;)')
    }
  };
  
  render() {
    // 解构
    const { text, bgColor } = this.props;
    return (
        <TouchableOpacity 
          /* 自定义 props 属性 */
          style={[styles.button, {backgroundColor: bgColor}]}
          onPress={this.myFunction}
        >
          <Text style={styles.btnTxt}>{text}</Text>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 150,
    margin: 10,
    borderRadius: 20,
    backgroundColor: 'green',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  btnTxt: {
    textAlign: 'center',
    color: '#fff'
  }
});
