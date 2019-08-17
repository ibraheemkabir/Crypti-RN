const initialState = {
	isFetching: null,
	data: [],
	hasError: false,
	errorMessage: null
}
import * as Types from '../type'

export default function (state = initialState, action) {
	switch (action.type) {
		case Types.FETCHING_COIN_DATA:
			return {
				...state,
				isFetching: true,
				data: null,
				hasError: false,
				errorMessage: null
			}
		case Types.FETCHING_COIN_DATA_SUCCESS:
			return {
				...state,
				isFetching: false,
				data: action.payload,
				hasError: false,
				errorMessage: null
			}
		case Types.FETCHING_COIN_DATA_FAIL:
			return {
				...state,
				isFetching: false,
				data: action.payload,
				hasError: true,
				errorMessage: action.err
			}
		default:
			return state
	}
}