import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import { View, Text, ScrollView } from 'react-native';
import FetchCoin from '../actions/fetchCoin';
import { fetchProps, cryptoProps } from './interfaces'
import CoinCard from './card'
import { styles } from './styles'

class Crypti extends Component<fetchProps> {

	componentDidMount() {
		this.props.FetchCoin();
	}

	renderCoinCards() {
		const { crypto } = this.props;
		return crypto.data.map((coin: cryptoProps, index) =>
			<CoinCard
				key={index}
				coin_name={coin.name}
				symbol={coin.symbol}
				percent_change_24h={coin.percent_change_24h}
				percent_change_1h={coin.percent_change_1h}
				percent_change_7d={coin.percent_change_7d}
				price_usd={coin.price_usd}
				price_btc={coin.price_btc}
			/>)
	}

	render() {
		if (this.props.crypto.isFetching) {
			return (
				<View>
					<Spinner
						visible={this.props.crypto.isFetching}
						animation='fade'
					/>
				</View>
			)
		}

		return (
			<View style={styles.mainContainer}>
				< ScrollView
					showsVerticalScrollIndicator={false}
				>
					{
						this.props.crypto.data ?
							this.renderCoinCards()
							: <View>
								<Text >Error Loading Data.. Check network Connection</Text>
								</View>
					}
				</ScrollView >
			</View>

		)
	}
}

function mapStateToProps(state) {
	return {
		crypto: state.crypto
	}
}

export default connect(mapStateToProps, { FetchCoin })(Crypti)