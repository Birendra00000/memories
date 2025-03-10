import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from '../reducers/auth'
import postReducer from '../reducers/post'
import notifReducer from '../reducers/notif'


const reducer = combineReducers({
	authReducer,
	postReducer,
	notifReducer
	// add more reducers here
})

export const store = configureStore({ reducer })
