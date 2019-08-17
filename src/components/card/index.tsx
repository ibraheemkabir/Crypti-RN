import React from 'react';
import { Dimensions, View, Text, StyleSheet, Image } from 'react-native'
const { width: SCREEN_WIDTH } = Dimensions.get('window');

const CoinCard = (props) => {
	const sym = props.symbol.toLowerCase();
	return (
		<View style={styles.container}>
			<View style={{
				alignContent: 'center',
				justifyContent: 'center',
				alignItems: 'center',
				flex: 0.3,
				margin:  5, 
				fontWeight: 'bold'
			}}>
				<Image
					style={styles.image}
					source={{ uri: `https://res.cloudinary.com/ah-krypton/image/upload/v1565968861/${sym}` }}
				/>
			</View>
			<View
				style={{ alignItems: 'flex-start', justifyContent: 'space-between', flex: 0.4, margin: 8, }}
			>
				<Text style={{ fontWeight: 'bold' }}>{props.symbol}</Text>
				<Text style={{ color: 'grey',fontSize: 10}}>{props.coin_name}</Text>
			</View>
			<View style={{
				alignContent: 'center',
				justifyContent: 'space-between',
				alignItems: 'center',
				flex: 0.3, 
				margin: 8,
				fontWeight: 'bold',
			}}>
				
				<Text style={{ fontSize: 12 }}>{props.price_btc.substring(0, 7)}</Text>
				<Text style={{ fontSize: 12,color:'grey' }}><Text style={styles.bold}>$</Text>{props.price_usd.substring(0, 7)}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flex: 0.8,
		width: SCREEN_WIDTH * 0.9,
		borderWidth: 0.1,
		borderRadius: 20,
		shadowOpacity: 0.15,
		shadowRadius: 5,
		shadowColor: '#000',
		shadowOffset: { height: 0, width: 2 },
		justifyContent: 'space-between',
		margin: 5,
		flexDirection: 'row',
		elevation: 0.5,
		padding: 5,
		backgroundColor: 'white'
	},
	bold: {
		fontWeight: 'bold'
	},
	image: {
		width: 40,
		height: 40
	}

})
export default CoinCard;