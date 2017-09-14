import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';


const MatchEntry = (props) => {
	const { artistFirst, artistLast, created, title, medium, path } = props;
	return (
		<View>
			<Image 
				style = { { height: 200 } }
				source = { { uri: path } }
			/>
			<Text style = {styles.title} >{title}</Text>
			<Text style = {styles.artist} >{artistFirst} {artistLast}  |  {created}</Text>
			<Text style = {styles.medium} >{medium}</Text>
			<View style = {styles.separator} ></View>
		</View>
	)
}


const styles = StyleSheet.create({
	title: {
		marginTop: 28,
		marginLeft: 12,
		fontSize: 14,
		fontFamily: 'Lato-Regular',
	},
	artist: {
		fontSize: 10,
		marginTop: 6,
		marginLeft: 12,
		marginBottom: 1,
		fontFamily: 'Lato-Light'
	},
	medium: {
		fontSize: 10,
		marginLeft: 12,
		marginBottom: 1,
		fontFamily: 'Lato-Light'
	},
	separator: {
		borderBottomColor: 'black',
		borderBottomWidth: 0.3,
		margin: 6,
	}
})



export default MatchEntry