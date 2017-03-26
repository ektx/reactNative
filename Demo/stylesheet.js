/*
  stylesheet 样式练习
  ------------------------------------------------
  样式的引用
  ------------------------------------------------
*/

import React, { Component } from 'react';
import { 
  AppRegistry, 
  Text, 
  View,
  StyleSheet,
} from 'react-native';


class HelloWorldApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Days of the week: </Text>
      </View>
    )
  }
}

// style the react component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // 垂直居中
    alignItems: 'center' // 水平居中
  }
})

AppRegistry.registerComponent('helloworld', () => HelloWorldApp);