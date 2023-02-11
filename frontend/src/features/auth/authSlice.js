import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: {},
    isAuthenticate: true,
    success: false
}

const authSlice =  createSlice({
    name: 'auth',
    initialState
})

export default authSlice.reducer
