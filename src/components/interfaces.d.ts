export interface fetchProps {
	FetchCoin: () => {}
	crypto: {
		isFetching: string
		data: [],
		fetch: boolean
	}
	nav: any
}

export interface cryptoProps {
	name: string,
	symbol: string,
	percent_change_24h: string,
	percent_change_7d: string,
	percent_change_1h: string,
	price_usd: string
	price_btc: string
}