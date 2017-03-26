/*
  Day App 练习
  ------------------------------------------------

  ------------------------------------------------
*/

import React, { Component } from 'react';
import { 
  AppRegistry, 
  Text, 
  View,
  StyleSheet,
} from 'react-native';

import DayItem from './Demo/dayApp/day-item';

let DAYS = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];


class HelloWorldApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Days of the week: </Text>
        {this.days()}
      </View>
    )
  };
  days = ()=> {
    return DAYS.map(function(day) {
      return <DayItem day={day} />
    })
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