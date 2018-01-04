/**
 * react navigation demo
 * https://reactnavigation.org/docs/intro/quick-start
 * 简单的页面切换
 * RN > 0.49.3
 */

import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

const HomeScreen = ({navigation}) => (
	<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
		<Text>Home Screen</Text>
		<Button
			onPress={()=> navigation.navigate('Details')}
			title="Go to Details"
		/>
	</View>
);

const DetailsScreen = () => (
	<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
		<Text>Details Screen</Text>
	</View>
)

const RootNavigator = StackNavigator({
	Home: {
		screen: HomeScreen,
		navigationOptions: {
			headerTitle: 'Home'
		}
	},
	Details: {
		screen: DetailsScreen,
		navigationOptions: {
			headerTitle: 'Details'
		}
	}
});

export default RootNavigator