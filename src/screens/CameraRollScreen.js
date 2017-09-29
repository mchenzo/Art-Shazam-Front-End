import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, ScrollView, CameraRoll } from 'react-native';
import CameraRollStore from '../stores/CameraRollStore';
import CameraRollPicker from 'react-native-camera-roll-picker';




class CameraRollScreen extends Component {

	

	storeImages = (data) => {
		const assets = data.edges;
		const images = assets.map( asset => asset.node.image );
	}

	logImageError = (err) => { console.log('error picking from camera roll: ' + err) }


	render(){
		return (
			<ScrollView style={styles.container}>
        		<View style={styles.imageGrid}>

                    <CameraRollPicker callback={() => console.log('hi')} />

        		</View>
        	</ScrollView>
		);
	}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6633',
  },
  imageGrid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
});


export default CameraRollScreen;