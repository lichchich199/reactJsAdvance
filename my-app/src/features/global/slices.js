import { createSlice } from "@reduxjs/toolkit";
// init state
const initialState ={
    loadingStatus : false
}
// create slice global
export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        toggleLoadingStatus: (state) => {
            state.loadingStatus = !state.loadingStatus
        }
    }
})
// export actions
export const {
    toggleLoadingStatus
} = globalSlice.actions

export default globalSlice.reducer