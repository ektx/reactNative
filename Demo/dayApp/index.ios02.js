/*
  Day App 练习
  ------------------------------------------------
  最终版本,相关文件:
  ✓ index.ios.js
    day-item2.js
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

import DayItem from './Demo/dayApp/day-item2';

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
    let daysItems = [];

    for (let i = 0; i < 7; i++) {
      let day = Moment().add(i, 'days').format('dddd');
      daysItems.push(
        <DayItem day={day} key={i} index={i} />
      )
    }

    return daysItems
  }
}

// style the react component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  }
})

AppRegistry.registerComponent('helloworld', () => HelloWorldApp);