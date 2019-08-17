import React from 'react';
import { View, TextInput } from 'react-native'

const Textfield = () => {
	return (
		<View>
			<TextInput
				style={{ height: 30, color: 'white' }}
				placeholder="Search Crypto"
			/>
		</View>
	)
}

export default Textfield;