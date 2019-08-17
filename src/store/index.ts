import { createStore, applyMiddleware, compose } from 'redux';
import devTools from 'remote-redux-devtools';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Platform } from 'react-native';

import RootReducer from '../reducers'

const store = createStore(
	RootReducer,
	compose(
		applyMiddleware(thunk, promise, logger),
		devTools({
			name: Platform.OS,
			hostname: 'localhost',
			port: 2222
		}),
	)
)

export default store;