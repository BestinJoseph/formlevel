import { configureStore, combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist'

import authReducer from '../features/auth/authSlice'

const presistConfig = {
    key: 'root',
    version: 1,
    storage
}

const reducers = combineReducers({
    auth: authReducer
})

const presistedReducer = persistReducer(presistConfig, reducers)

export const store = configureStore({
    reducer: presistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
