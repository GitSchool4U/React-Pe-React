import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    users: [],
    loading: false,
    error: null,
}

const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async (payload, {rejectWithValue})=>{

        try {
            const response = await fetch('https://jsonplaceholder.typicod.com/users')
            const data = await response.json()
            return data;
        } catch (error) {
            return rejectWithValue('Something went wrong')
        }
    }
)

// user/fetchUser/pending
// user/fetchUser/fullfilled
// user/fetchUser/rejected

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers: (addBuilder)=>{
        addBuilder.addCase(fetchUser.pending, (state, action)=>{
            state.loading = true;
            state.error = null;
        })
        addBuilder.addCase(fetchUser.fulfilled, (state, action)=>{
            state.loading = false;
            state.users = action.payload
        })
        addBuilder.addCase(fetchUser.rejected, (state, action)=>{
            state.loading = false;
            // state.error = action.error.message
            state.error = action.payload
        })
    }
})

export const { } = userSlice.actions
export {
    fetchUser
}
export default userSlice.reducer