/*
  复制以下代码到你的 index.ios.js 中在mac中查看效果
*/
import React, { Component } from 'react';
import { 
  AppRegistry, 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';

class HelloWorldApp extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>Hello world!</Text>
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