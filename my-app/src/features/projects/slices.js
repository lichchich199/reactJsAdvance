import { createAsyncThunk, createSlice } from "../toolkit";
import { createProject, deleteProject, getProject, getProjects, updateProject } from "./api";

// initial state
const initialState = {
    status: false,
    statusAction: false,
    project: {},
    projects: []
}

// create async action get project
export const getProjectAsync = createAsyncThunk(
    'projects/getProject',
    async(params) => {
        const res = await getProject(params)
        return res
    }
)
// create async action list project
export const getProjectsAsync = createAsyncThunk(
    'projects/getProjects',
    async(name) => {
        const res = await getProjects(name)
        return res
    }
)
// create async action create project
export const createProjectAsync = createAsyncThunk(
    'projects/createProject',
    async(params) => {
        const res = await createProject(params)
        return res
    }
)
// create async action update project
export const updateProjectAsync = createAsyncThunk(
    'projects/updateProject',
    async(params) => {
        const res = await updateProject(params)
        return res
    }
)
// create async action delete project
export const deleteProjectAsync = createAsyncThunk(
    'projects/deleteProject',
    async(params) => {
        console.log('param:', params)
        const res = await deleteProject(parseInt(params))
        return res
    }
)
// create slice
export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        cleanup: (state) => {
            state.status = false
        },
        changeStatusAction: (state) => {
            state.statusAction = !state.statusAction
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProjectAsync.pending, (state) => {
                state.status = true
            })
            .addCase(getProjectAsync.fulfilled, (state, action) => {
                state.project = action.payload
                state.status = false
            })
            .addCase(getProjectAsync.rejected, (state) => {
                state.status = false
            })
            .addCase(getProjectsAsync.pending, (state) => {
                state.status = true
            })
            .addCase(getProjectsAsync.fulfilled, (state, action) => {
                state.projects = action.payload
                state.status = false
            })
            .addCase(getProjectsAsync.rejected, (state) => {
                state.status = false
            })
            .addCase(createProjectAsync.pending, (state) => {
                state.status = true
            })
            .addCase(createProjectAsync.fulfilled, (state) => {
                state.status = false
            })
            .addCase(createProjectAsync.rejected, (state) => {
                state.status = false
            })
            .addCase(updateProjectAsync.pending, (state) => {
                state.status = true
            })
            .addCase(updateProjectAsync.fulfilled, (state) => {
                state.status = false
            })
            .addCase(updateProjectAsync.rejected, (state) => {
                state.status = false
            })
            .addCase(deleteProjectAsync.pending, (state) => {
                state.status = true
            })
            .addCase(deleteProjectAsync.fulfilled, (state) => {
                state.status = false
            })
            .addCase(deleteProjectAsync.rejected, (state) => {
                state.status = false
            })
    }
})

// export action
export const {
    cleanup,
    changeStatusAction
} = projectSlice.actions;
export default projectSlice.reducer