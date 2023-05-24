import { configureStore } from "./features/toolkit";
import globalReducer from "./features/global/slices";
import projectReducer from "./features/projects/slices";

// config store
export default configureStore({
    reducer: {
        global: globalReducer,
        project: projectReducer
    }
})
