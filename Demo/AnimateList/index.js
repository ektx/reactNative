
/*
	动画列表效果(开发中)

	@author zwl
	@date 2018-1-23

	参考:
	https://moduscreate.com/blog/react-native-dynamic-animated-lists/
*/

import React, { Component } from 'react'
import { StyleSheet, View, Text, ListView } from 'react-native'
import DynamicListRow from './DynamicListRow'

export default class App extends Component {
	state = {
		loading: true,
		dataSource: new ListView.DataSource({
			rowHasChanged: (row1, row2) => true
		}),
		refreshing: false
	}

	_renderRow (rowData, sectionID, rowID) {
		return (
			<DynamicListRow>
				<Text>ABC</Text>
			</DynamicListRow>
		)
	}

	render () {
		return (
			<View style={styles.container}>
				<ListView
					dataSource={this.state.dataSource}
					renderRow={this._renderRow.bind(this)}
				/>
				<Text>111</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({

})