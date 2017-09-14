import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import CameraFeed from '../screens/CameraFeed';
import MyArt from '../screens/MyArt';
import Settings from '../screens/settings';


export const Tabs = TabNavigator({
	Settings: {
		screen: Settings,
		navigationOptions: {
      		tabBarLabel: 'Settings',
      		tabBarIcon: ({ tintColor }) => <Icon name = 'settings' size={25} color={tintColor} />
    	},
	},
	CameraFeed: {
		screen: CameraFeed,
		navigationOptions: {
      		tabBarLabel: 'Camera',
      		tabBarIcon: ({ tintColor }) => <Icon name = 'linked-camera' size={25} color={tintColor} />
    	},
	},
	MyArt: {
		screen: MyArt,
		navigationOptions: {
      		tabBarLabel: 'My Collection',
      		tabBarIcon: ({ tintColor }) => <Icon name = 'photo-library' size={25} color={tintColor} />
    	},
	},
})