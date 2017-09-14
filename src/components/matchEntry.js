import React, { Component } from 'react';
import { Image, View } from 'react-native';


const MatchEntry = (props) => {
	const { artist, title, medium, path } = props;
	return (
		<View>
			<Image 
				style = { { height: 300 } }
				source = { { uri: '/Users/michaelchen/Desktop/resemble-uploads/art13.jpg' } }
			/>

		</View>
	)
}

export default MatchEntry