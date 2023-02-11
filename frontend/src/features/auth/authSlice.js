import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: {},
    isAuthenticate: false,
    success: false
}

const authSlice =  createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginReducer: (state, action) => {
            return { ...state, user: {}, isAuthenticate: true, success: true }
        },
        logoutReducer: (state) => {
            return { ...state, user: {}, isAuthenticate: false, success: true }
        }
    }
})

export const { loginReducer, logoutReducer } = authSlice.actions

export default authSlice.reducer
