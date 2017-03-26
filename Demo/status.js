/*
  State 状态练习
  ------------------------------------------------
  http://reactnative.cn/docs/0.35/state.html#content
  ------------------------------------------------
*/

import React, { Component } from 'react';
import { 
  AppRegistry, 
  Text, 
  View,
} from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true };

    // 每1秒对showText 状态做一次取反操作
    setInterval(()=>{
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }

  render() {
    // 根据当前 showText 的值决定是否显示 text 内容
    let display = this.state.showText ? this.props.text : ' ';

    return (
      <Text> {display} </Text>
    );
  }

}

class HelloWorldApp extends Component {
  render() {
    return (
      <View>
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great!' />

      </View>
    )
  }
}

AppRegistry.registerComponent('helloworld', () => HelloWorldApp);