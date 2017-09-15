import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, StatusBar, Dimensions, CameraRoll } from 'react-native';
import { Screen } from '@shoutem/ui';
import Camera from 'react-native-camera';
import { getClosestMatch, hydrate } from '../services/api-layer';
import { Icon } from 'react-native-elements';
import MatchStore from '../stores/MatchStore';
import ViewPort from '../components/ViewPort';
import CircleButton from '../components/CircleButton';
import CameraRollStore from '../stores/CameraRollStore';




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

	toggleFlash() {

	}

	render() {
		const { navigate } = this.props.navigation;

		return (
			<Screen>

				<StatusBar barStyle = 'light-content' />

				<Camera 
					style = { styles.preview }
					ref = { cam => this.camera = cam }
					aspect = { Camera.constants.Aspect.fill }
					captureTarget = { Camera.constants.CaptureTarget.disk }
					captureMode = { Camera.constants.CaptureMode.still }
					flashMode = { Camera.constants.FlashMode.off }
				>

					<ViewPort />

					<View style = { {width: Dimensions.get('window').width, flexDirection: 'row' , marginTop: 50, marginBottom: 30, justifyContent: 'space-around', alignItems: 'flex-end'} } >
						<TouchableOpacity 
							onPress = { () => this.toggleFlash() } 
							activeOpacity = { 0.3 }
						>

							<CircleButton 
								name = 'flash-off'
								iconSize = { 15 }
								borderSize = { 25 }
							/>

						</TouchableOpacity>


						<TouchableOpacity 
							onPress = { () => { 
								this.takePicture() 
								navigate('MyArt')
							} } 
							activeOpacity = { 0.3 }
						>

							<CircleButton 
								name = 'camera'
								iconSize = { 45 }
								borderSize = { 50 }
							/>

						</TouchableOpacity>


						<TouchableOpacity 
							onPress = { () =>  CameraRoll.getPhotos(FETCH_PARAMS, storeImages, logImageError) } 
							activeOpacity = { 0.3 }
						>

							<CircleButton 
								name = 'content-copy'
								iconSize = { 15 }
								borderSize = { 25 }
							/>

						</TouchableOpacity>
					</View>

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
})


export default CameraFeed;