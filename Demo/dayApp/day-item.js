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
			<Text style={styles.dayTxt}>{day}</Text>
		)
	}
}

const styles = StyleSheet.create({
	dayTxt: {
		color: '#09f',
		fontSize: 16
	}
})