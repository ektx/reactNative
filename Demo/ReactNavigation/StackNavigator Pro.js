/**
 * react navigation demo
 * https://reactnavigation.org/docs/intro/quick-start
 * 简单的页面切换
 * RN > 0.49.3
 */

import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { StackNavigator } from 'react-navigation'

const HomeScreen = ({navigation}) => (
	<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
		<Text>Home</Text>
		<Button
			// 动态传值
			onPress={() => navigation.navigate('Chat', { user: '宝宝' })}
			title="和 宝宝 聊天"
		/>
	</View>
)

const ChatScreen = ({navigation}) => (
	<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
		<Text>love {navigation.state.params.user}</Text>
	</View>
)

const RootNavigator = StackNavigator({
	Home: {
		screen: HomeScreen,
		navigationOptions: {
			headerTitle: 'Home'
		}
	},
	Chat: {
		screen: ChatScreen,
		navigationOptions: {
			headerTitle: '和宝宝通话中'
		}
	}
})

const styles = StyleSheet.create({

})

export default RootNavigator