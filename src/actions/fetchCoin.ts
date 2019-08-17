import axios from 'axios';
import * as Types from '../type'
const ApiBaseUrl = 'https://api.coinmarketcap.com'



const FetchCoinData = () => {
	return dispatch => {
		dispatch({ type: Types.FETCHING_COIN_DATA })
		return axios.get(`${ApiBaseUrl}/v1/ticker`)
			.then(res => {
				dispatch({ type: Types.FETCHING_COIN_DATA_SUCCESS, payload: res.data })
			})
			.catch(err => {
				dispatch({ type: Types.FETCHING_COIN_DATA_FAIL, payload: err.data })
			})
	}
}

export default FetchCoinData