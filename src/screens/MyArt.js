import React, { Component } from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import { Screen } from '@shoutem/ui';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import MatchEntry from '../components/matchEntry';
import MatchStore from '../stores/MatchStore';
import { observer } from 'mobx-react';



const MyArt = (props) => {
	const listOfMatches = MatchStore.matches.map((match, i) => {
		return (
			<MatchEntry
				key = { i }
				path = { match.path }
				artistFirst = { match.artistFirst }
				artistLast = { match.artistLast }
				created = { match.created }
				title = { match.title }
				medium = { match.medium }
			/>
		)
	})

	return (
		<Container>

			<Content>{listOfMatches}</Content>

		</Container>
	)
}


export default observer(MyArt);