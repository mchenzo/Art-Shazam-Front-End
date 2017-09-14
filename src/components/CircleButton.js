import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';


const CircleButton = (props) => {
	const { name, iconSize, borderSize } = props;
	return (
			<View style = { { borderWidth: 0.7, borderColor: '#FF6663', height: props.borderSize , width: props.borderSize, borderRadius: props.borderSize, justifyContent: 'center' } } >
				<Icon name = { name } size = { iconSize } color = '#FF6663' />
			</View>
	)
}

export default CircleButton;