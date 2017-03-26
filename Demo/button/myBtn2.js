/*
  自定义的按钮组件
  --------------------------------------
  新加:
      支持提交之后禁用,提交完成之后可用
*/

import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
} from 'react-native';

export default class Button extends Component {
  // 构造
  constructor(props) {
    super(props);

    // 初始化状态
    this.state = {
      disabled: false,
    }
  }

  myFunction = ()=> {
    // 自定义函数
    const { fun } = this.props;

    if (fun) {
      fun()
    } else {
      alert('你按了一下;)')
    }
  };

  enable = () => {
    this.setState({
      disabled: true
    })
  }
  
  render() {
    // 解构
    const { text, bgColor } = this.props;
    return (
        <TouchableOpacity 
          disabled={this.state.disabled}
          /* 自定义 props 属性 */
          style={[styles.button, {backgroundColor: bgColor}, this.state.disabled && styles.disabled]}
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
  },
  disabled: {
    backgroundColor: '#f5f5f5'
  }
});
