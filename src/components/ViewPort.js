import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

const ViewPort = () => {
	return (
		<View>

			<View style = { [styles.ViewPortBorderTop, { borderTopColor: '#FF6633', borderWidth: 0.5, borderLeftColor: '#FF6633', borderRightColor: '#FF6633' }] } >

				<View style = { styles.VPInterior } >
					<View style = { { width: 25, height: 25, borderWidth: 2, borderTopColor: '#FF6663', borderLeftColor: '#FF6663' } } ></View>
				</View>

				<View style = { styles.VPInterior } >
					<View style = { { alignSelf: 'flex-end', width: 25, height: 25, borderWidth: 2, borderTopColor: '#FF6663', borderRightColor: '#FF6663' } } ></View>
				</View>

			</View>

			<View style = { [styles.ViewPortBorderBottom, { borderBottomColor: '#FF6633', borderWidth: 0.5, borderLeftColor: '#FF6633', borderRightColor: '#FF6633' }] } >

				<View style = { styles.VPInteriorBottom } >
					<View style = { { width: 25, height: 25, borderWidth: 2, borderBottomColor: '#FF6663', borderLeftColor: '#FF6663' } } ></View>
				</View>	

				<View style = { styles.VPInteriorBottom } >
					<View style = { { alignSelf: 'flex-end', width: 25, height: 25, borderWidth: 2, borderBottomColor: '#FF6663', borderRightColor: '#FF6663' } } ></View>
				</View>

			</View>

		</View>
	)
}


const styles = StyleSheet.create({
	ViewPortBorderTop: {
		height: 150,
		width: 200,
		justifyContent: 'flex-start',
		flexDirection: 'row',
	},
	ViewPortBorderBottom: {
		height: 150,
		width: 200,
		justifyContent: 'flex-start',
		flexDirection: 'row',
	},
	VPInterior: {
		width: 100,
		height: 150,
		flexDirection: 'column',
		justifyContent: 'flex-start',
	},
	VPInteriorBottom: {
		width: 100,
		height: 150,
		flexDirection: 'column',
		justifyContent: 'flex-end',
	}
})


export default ViewPort;