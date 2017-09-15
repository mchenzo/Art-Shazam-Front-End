import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import CameraFeed from '../screens/CameraFeed';
import MyArt from '../screens/MyArt';
import Settings from '../screens/settings';
import CameraRollScreen from '../screens/CameraRollScreen';


export const Tabs = TabNavigator({
	Settings: {
		screen: Settings,
		navigationOptions: {
      		tabBarLabel: 'SETTINGS',
      		tabBarIcon: ({ tintColor }) => <Icon name = 'settings' size={25} color={tintColor} />
    	},
	},
	CameraFeed: {
		screen: CameraFeed,
		navigationOptions: {
      		tabBarLabel: 'CAMERA',
      		tabBarIcon: ({ tintColor }) => <Icon name = 'linked-camera' size={25} color={tintColor} />
    	},
	},
	CameraRollScreen: {
		screen: CameraRollScreen,
		navigationOptions: {
			tabBarLabel: 'CAMERA ROLL',
			tabBarIcon: ({ tintColor }) => <Icon name = 'content-copy' size={25} color={tintColor} />
		}
	},
	MyArt: {
		screen: MyArt,
		navigationOptions: {
      		tabBarLabel: 'MY COLLECTION',
      		tabBarIcon: ({ tintColor }) => <Icon name = 'photo-library' size={25} color={tintColor} />
    	},
	},
},
	{	
		animationEnabled: true,
		tabBarOptions: {
			showLabel: false,
			scrollEnabled: true,
			labelStyle : {
				fontSize: 8,
				fontFamily: 'Lato-Regular'
			},
			activeTintColor: '#FF6663',
			inactiveTintColor: '#878787',
			style: {
				backgroundColor: '#FFF'
			}
		},
	}
)