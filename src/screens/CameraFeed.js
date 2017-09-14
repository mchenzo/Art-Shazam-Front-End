import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Screen } from '@shoutem/ui';
import Camera from 'react-native-camera';
import { getClosestMatch, hydrate } from '../services/api-layer';
import { Icon } from 'react-native-elements';
import MatchStore from '../stores/MatchStore';
import ViewPort from '../components/ViewPort';
import CircleButton from '../components/CircleButton';


const flashMode = 'off';


class CameraFeed extends Component {
	async componentWillMount() {
		try {
			let thirsty = await hydrate();
			console.log(`App was thirsty................................but ${thirsty.data}`)
		} catch (err) { console.log(`Error hydrating images from database: ${err}. I'm dying of thirst`) }
	}

	async takePicture() {
		try {
			let snapshot = await this.camera.capture();
			let response = await getClosestMatch(snapshot.path);
			MatchStore.addMatch(response.data)
			console.log('==================================== response data:', response.data)
		} catch (err) { console.log('ERROR <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><> ERROR: ', err) }
	}

	render() {

		return (
			<Screen>

				<Camera 
					style = { styles.preview }
					ref = { cam => this.camera = cam }
					aspect = { Camera.constants.Aspect.fill }
					captureTarget = { Camera.constants.CaptureTarget.disk }
					captureMode = { Camera.constants.CaptureMode.still }
				>

					<TouchableOpacity 
						onPress = { () => this.takePicture() } 
						activeOpacity = { 0.3 }
						style = { { alignSelf: 'flex-start', marginBottom: 30 } }
					>

						<CircleButton 
							name = 'flash-on'
							iconSize = { 15 }
							borderSize = { 25 }
						/>

					</TouchableOpacity>

					<ViewPort />


					<TouchableOpacity 
						onPress = { () => this.takePicture() } 
						activeOpacity = { 0.3 }
						style = { { marginBottom: 30, marginTop: 50 } }
					>

						<CircleButton 
							name = 'camera'
							iconSize = { 45 }
							borderSize = { 50 }
						/>

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


export default CameraFeed;