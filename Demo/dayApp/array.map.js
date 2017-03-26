/*
  Day App 练习
  ------------------------------------------------
  引用 moment
  ------------------------------------------------
*/
import Moment from 'moment';
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
        <Text>{Moment().format('ddd')}</Text>
        {this.days()}
      </View>
    )
  };
  days = ()=> {
    return DAYS.map(function(day, i) {
      // key 是必须值,不添加此值会报错
      // http://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js
      return <DayItem day={day} key={i} />
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