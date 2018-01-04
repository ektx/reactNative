/**
 * react navigation demo
 * https://reactnavigation.org/docs/intro/quick-start
 * 简单的抽屉页面切换
 * RN > 0.49.3
 */

import React from 'react';
import { View, Text, Button } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({navigation}) => (
	<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
		<Text>主界面</Text>
		<Button
			onPress={() => navigation.navigate('DrawerToggle')}
			title="打开抽屉菜单"
		/>
	</View>
);

const ProfileScreen = ({navigation}) => (
	<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
		<Text>个人中心</Text>
		<Button
			onPress={() => navigation.navigate('DrawerToggle')}
			title="打开抽屉菜单"
		/>
	</View>
)

const RootDrawer = DrawerNavigator({
	Home: {
		screen: HomeScreen,
		navigationOptions: {
			drawerLabel: '主页',
			drawerIcon: ({ tintColor, focused}) => (
				<Ionicons
					name={focused ? 'ios-home' : 'ios-home-outline'}
					size={26}
					style={{ color: tintColor }}
				/>
			)
		}
	},
	Profile: {
		screen: ProfileScreen,
		navigationOptions: {
			drawerLabel: '我',
			drawerIcon: ({ tintColor, focused}) => (
				<Ionicons
					name={focused ? 'ios-person' : 'ios-person-outline'}
					size={26}
					style={{ color: tintColor }}
				/>
			)
		}
	}
});

export default RootDrawer