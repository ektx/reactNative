/*
  Day App 练习
  ------------------------------------------------
  最终版本,相关文件:
    index.ios.js
  ✓ day-item2.js
  ------------------------------------------------
*/

import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';

export default class DayItem extends Component {
	render() {
		const { day } = this.props;
		return (
			<View style={this.ViewBgColor()}>
				<Text  style={this.style()}>{day}</Text>
			</View>
		)
	}

	ViewBgColor = () => {
		return {
			flex: 1,
			backgroundColor: this.bgColor(),
		    justifyContent: 'center', // 垂直居中
		}
	}

	style = () => {
		return {
			color: this.color(),
			textAlign: 'center',
			fontSize: this.fontSize(),
		}
	}

	bgColor = ()=> {
		let opacity = 1 / (this.props.index + 1);

		return 'rgba(5, 160, 210, '+ opacity + ')';
	}

	color = ()=> {
		let opacity = 1 / (this.props.index +1);

		return 'rgba(255, 255, 255, ' + opacity +')';
	}

	fontSize = () => {
		return 60 - 6 * this.props.index;
	}


}
