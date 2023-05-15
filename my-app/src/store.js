import { configureStore } from "@reduxjs/toolkit";
import slices from "./features/login/slices";


export default configureStore({
    reducer: {
        task: slices,
        // user: userReducer
    }
})