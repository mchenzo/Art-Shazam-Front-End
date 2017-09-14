import React, { Component } from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import { Screen } from '@shoutem/ui';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';


export default class MyArt extends Component {
	render() {
		return (
			<Container>

				<Content>
					
					<Image 
						style = { { height: 300 } }
						source = { { uri: '/Users/michaelchen/Desktop/resemble-uploads/art13.jpg' } }
					/>

				</Content>

			</Container>
		)
	}
}