import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Screen } from '@shoutem/ui';
import Camera from 'react-native-camera';
import { getClosestMatch, hydrate } from '../services/api-layer';
import { Icon } from 'react-native-elements';


export default class CameraFeed extends Component {
	async componentWillMount() {
		console.log('component mounted????????????????')
		try {
			let thirsty = await hydrate();
			console.log(`App was thirsty................................but ${thirsty.data}`)
		} catch (err) {
			console.log(`Error hydrating images from database: ${err}. I'm dying of thirst`)
		}
	}

	async takePicture() {
		try {
			let snapshot = await this.camera.capture();
			let response = await getClosestMatch(snapshot.path);
			console.log('==================================== response data:', response.data)
		} catch (err) { console.log('ERROR <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><> ERROR: ', err) }
	}

	render() {

		return (
			<Screen>
				
				<Camera 
					style = { styles.preview }
					ref = {cam => this.camera = cam}
					aspect = {Camera.constants.Aspect.fill}
					captureTarget={Camera.constants.CaptureTarget.disk}
				>
					<TouchableOpacity 
						onPress = { () => this.takePicture() } 
						activeOpacity = { 0.3 }
					>
						<Icon name = 'camera' size={30} color = 'white' />
					</TouchableOpacity>
				</Camera>

			</Screen>
		)
	}
}


const styles = StyleSheet.create({
	preview: {
	   flex: 1,
	   justifyContent: 'flex-end',
	   alignItems: 'center',
	},
	capture: {
	    flex: 0,
	    backgroundColor: '#fff',
	    borderRadius: 5,
	    color: '#000',
	    padding: 10,
	    margin: 40
	}
})