import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
    status: 'idle'
};

// create a slice
export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload)
        }
    }
})
// export action addTask from taskSlice
export const {addTask} = taskSlice.actions;
// export action get state task 
export const selectTask =  (state) => state.task
export default taskSlice.reducer