import { createSlice, configureStore, createAsyncThunk as _createAsyncThunk} from '@reduxjs/toolkit'
import { toggleLoadingStatus } from './global/slices'

const createAsyncThunk = (name, callback, errorCallback) => {
    return _createAsyncThunk(name, async (payload, thunkAPI) => {
        try {
            thunkAPI.dispatch(toggleLoadingStatus())
            const res = await callback(payload, thunkAPI);
            thunkAPI.dispatch(toggleLoadingStatus())
            return res
        } catch (error) {
            let errorRes = {}
            if(typeof errorCallback != 'undefined') {
                if(typeof error.response == 'undefined') {
                    errorRes = await errorCallback(error, thunkAPI, payload)
                } else {
                    errorRes = await errorCallback(error.response, thunkAPI, payload)
                }
            }
            thunkAPI.dispatch(toggleLoadingStatus());
            return thunkAPI.rejectWithValue(errorRes)
        }
    })
}

export { createSlice, createAsyncThunk, configureStore}