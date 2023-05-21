import { createAsyncThunk, createSlice } from "../toolkit";
import { createContact, deleteContact, getContact, getContacts, updateContact } from "./api";

const initialState = {
    status: false,
    project: {},
    projects: []
}

export const getContactAsync = createAsyncThunk(
    'projects/getContact',
    async(params) => {
        const res = await getContact(params)
        return res
    }
)

export const getContactsAsync = createAsyncThunk(
    'projects/getContacts',
    async(name) => {
        const res = await getContacts(name)
        return res
    }
)

export const createContactAsync = createAsyncThunk(
    'projects/createContact',
    async(params) => {
        const res = await createContact(params)
        return res
    }
)

export const updateContactAsync = createAsyncThunk(
    'projects/updateContact',
    async(params) => {
        const res = await updateContact(params)
        return res
    }
)

export const deleteContactAsync = createAsyncThunk(
    'projects/deleteContact',
    async(params) => {
        const res = await deleteContact(params)
        return res
    }
)

export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        cleanup: (state) => {
            state.status = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getContactAsync.pending, (state) => {
                state.status = true
            })
            .addCase(getContactAsync.fulfilled, (state, action) => {
                state.project = action.payload
                state.status = false
            })
            .addCase(getContactAsync.rejected, (state) => {
                state.status = false
            })
            .addCase(getContactsAsync.pending, (state) => {
                state.status = true
            })
            .addCase(getContactsAsync.fulfilled, (state) => {
                state.status = false
            })
            .addCase(getContactsAsync.rejected, (state) => {
                state.status = false
            })
            .addCase(createContactAsync.pending, (state) => {
                state.status = true
            })
            .addCase(createContactAsync.fulfilled, (state) => {
                state.status = false
            })
            .addCase(createContactAsync.rejected, (state) => {
                state.status = false
            })
            .addCase(updateContactAsync.pending, (state) => {
                state.status = true
            })
            .addCase(updateContactAsync.fulfilled, (state) => {
                state.status = false
            })
            .addCase(updateContactAsync.rejected, (state) => {
                state.status = false
            })
            .addCase(deleteContactAsync.pending, (state) => {
                state.status = true
            })
            .addCase(deleteContactAsync.fulfilled, (state) => {
                state.status = false
            })
            .addCase(deleteContactAsync.rejected, (state) => {
                state.status = false
            })
    }
})



export const {
    cleanup
} = projectSlice.actions;
export default projectSlice.reducer