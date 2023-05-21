import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    loadingStatus : false
}

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        toggleLoadingStatus: (state) => {
            state.loadingStatus = !state.loadingStatus
        }
    }
})

export const {
    toggleLoadingStatus
} = globalSlice.actions

export default globalSlice.reducer