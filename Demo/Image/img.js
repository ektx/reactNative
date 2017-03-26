/*
  图片使用示例
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
  ScrollView,
  Image
} from 'react-native';

class HelloWorldApp extends Component {
  render() {
    let pic = {
      uri: 'http://images.apple.com/v/mac/home/t/images/home/macbook_opt_medium.jpg'
    };

    return (
      <ScrollView style={{height: 100, backgroundColor: 'blue', paddingVertical: 20}}>
        <View style={{flex: 1, height: 2000}}>
      {/* Image.resizeMode.cover：图片居中显示，没有被拉伸，超出部分被截断；
       // Image.resizeMode.contain：容器完全容纳图片，图片等比例进拉伸；
       // Image.resizeMode.stretch： 图片被拉伸适应容器大小，有可能会发生变形
      */}

      {/* 引用网络地址图片 */}
      <Image source={pic} style={{width: 400, height: 300, resizeMode:Image.resizeMode.contain}} />

      <Image source={require('./Demo/Image/kings.png')} style={{width: 200, height: 200, borderRadius: 100, margin: 50}}/>

      <Image source={require('./Demo/Image/kings.png')} style={{flex: 1, width: 200, height: 200}}>
        <Text style={{backgroundColor: 'transparent'}}> 背景图测试</Text>
        <Text style={{backgroundColor: 'transparent'}}> 背景图测试</Text>
      </Image>
        </View>
      </ScrollView>
    );
  }
}

AppRegistry.registerComponent('helloworld', () => HelloWorldApp);