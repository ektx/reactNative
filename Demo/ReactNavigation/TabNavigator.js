/**
 * react navigation demo
 * https://reactnavigation.org/docs/intro/quick-start
 * 简单的底部主页面间切换
 * RN > 0.49.3
 */

import React from 'react';
import { View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({navigation}) => (
	<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
		<Text>Home Screen</Text>
	</View>
);

const DetailsScreen = () => (
	<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
		<Text>Details Screen</Text>
	</View>
)

const RootTabs = TabNavigator({
	Home: {
		screen: HomeScreen,
		navigationOptions: {
			tabBarLabel: '主页',
			tabBarIcon: ({ tintColor, focused}) => (
				<Ionicons
					name={focused ? 'ios-home' : 'ios-home-outline'}
					size={26}
					style={{ color: tintColor }}
				/>
			)
		}
	},
	Details: {
		screen: DetailsScreen,
		navigationOptions: {
			tabBarLabel: '我',
			tabBarIcon: ({ tintColor, focused}) => (
				<Ionicons
					name={focused ? 'ios-person' : 'ios-person-outline'}
					size={26}
					style={{ color: tintColor }}
				/>
			)
		}
	}
});

export default RootTabs