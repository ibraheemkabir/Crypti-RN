import React from 'react';
import { View, Text } from 'react-native'
import { styles } from './styles'
import Textfield from './forms/textfield';

const Header = () => {
	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<Text style={styles.header}>Crytpi</Text>
				<View style={{
					marginTop: 40,
					width: '80%',
					borderRadius: 20,
					padding: 2,
					alignContent: 'center', 
					backgroundColor: 'rgba(227,230,242,0.5)',
					paddingLeft: 20
			}}>
					<Textfield />
				</View>
			</View>
		</View>
	)
}

export default Header;