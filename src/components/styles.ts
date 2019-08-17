import { StyleSheet, Dimensions } from 'react-native';
const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export const styles = StyleSheet.create({
	container: {
		backgroundColor: 'rgba(96, 144, 250,1)',
		height: SCREEN_HEIGHT*0.35,
		borderBottomRightRadius: 50,
		borderBottomLeftRadius: 50,
	},
	headerContainer: {
		display: 'flex',
		marginTop: 55,
		alignItems: 'center',
		zIndex: 10
	},
	header: {
		fontWeight: 'bold',
		fontSize: 25,
		color: 'white'
	},
	mainContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: 'black',
		marginTop: - SCREEN_HEIGHT * 0.05,
		flex: 1,
		backgroundColor: 'transparent',
		paddingBottom: 5
	},
	footer:  {
		flex: 1,
		bottom: 0,
		width: '100%',
		paddingBottom: 30,
		alignItems: 'center',
		zIndex: 2,
		position: 'absolute',
		backgroundColor: 'rgba(17, 37, 79, 0.8)'
	}
})
